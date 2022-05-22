// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject convertToReadbaleText into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: convertToReadbaleText,
  });
});


// The body of this function will be executed as a content script inside the current page
function convertToReadbaleText() {
	// making half of the letters in a word bold
	function highlightText(sentenceText, node= {}) {
    return sentenceText
      .split(' ')
      .map((word) => {
        const length = word.length;
        const midPoint = Math.round(length / 2);
        const firstHalf = word.slice(0, midPoint);
        const secondHalf = word.slice(midPoint);
          //function to get the perceived brightness of a colour, used to determine if the bold characters should be brighter or lighter than the rest of the text
          function getLuminance(color) {
              const luminanceCoefficients = [.2126, .7152, .0722];
              const colorCodeToRGB = function(colorCode) {
                  if(!Array.isArray(colorCode)) {
                      colorCode = colorCode.substr(1);
                      return [
                          colorCode.substr(0, 2),
                          colorCode.substr(2, 2),
                          colorCode.substr(4, 2)
                      ].map(it => parseInt(it, 16));
                  }else{
                      return colorCode;
                  }
              }
              const linearizeSRGB = function(colorChannel) {
                  colorChannel /= 255;
                  if (colorChannel <= .04045 ) {
                      return colorChannel / 12.92;
                  } else {
                      return Math.pow((colorChannel + .055)/1.055, 2.4);
                  }
              }
              let cv;
              if(Array.isArray(color)) {
                  cv = colorCodeToRGB(color).map(v => linearizeSRGB(v))
              }else{
                  cv = color.map(v => linearizeSRGB(v))
              }
              return cv[0]*luminanceCoefficients[0]+
                  cv[1]*luminanceCoefficients[1]+
                  cv[2]*luminanceCoefficients[2]
          }
          function RGBToHSL(val) {
              // Make r, g, and b fractions of 1
              val[0] /= 255;
              val[1] /= 255;
              val[2] /= 255;

              // Find greatest and smallest channel values
              let cmin = Math.min(val[0],val[1],val[2]),
                  cmax = Math.max(val[0],val[1],val[2]),
                  delta = cmax - cmin,
                  h = 0,
                  s = 0,
                  l = 0;
              // Calculate hue
              // No difference
              if (delta == 0)
                  h = 0;
              // Red is max
              else if (cmax == val[0])
                  h = ((val[1] - val[2]) / delta) % 6;
              // Green is max
              else if (cmax == val[1])
                  h = (val[2] - val[0]) / delta + 2;
              // Blue is max
              else
                  h = (val[0] - val[1]) / delta + 4;

              h = Math.round(h * 60);

              // Make negative hues positive behind 360°
              if (h < 0)
                  h += 360;
              // Calculate lightness
              l = (cmax + cmin) / 2;

              // Calculate saturation
              s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

              // Multiply l and s by 100
              s = +(s * 100).toFixed(1);
              l = +(l * 100).toFixed(1);

              return [h,s,l];
          }
          function HSLToRGB(h,s,l) {
              // Must be fractions of 1
              s /= 100;
              l /= 100;

              let c = (1 - Math.abs(2 * l - 1)) * s,
                  x = c * (1 - Math.abs((h / 60) % 2 - 1)),
                  m = l - c/2,
                  r = 0,
                  g = 0,
                  b = 0;
              if (0 <= h && h < 60) {
                  r = c; g = x; b = 0;
              } else if (60 <= h && h < 120) {
                  r = x; g = c; b = 0;
              } else if (120 <= h && h < 180) {
                  r = 0; g = c; b = x;
              } else if (180 <= h && h < 240) {
                  r = 0; g = x; b = c;
              } else if (240 <= h && h < 300) {
                  r = x; g = 0; b = c;
              } else if (300 <= h && h < 360) {
                  r = c; g = 0; b = x;
              }
              r = Math.round((r + m) * 255);
              g = Math.round((g + m) * 255);
              b = Math.round((b + m) * 255);

              return [r,g,b];
          }
        const getRGBArray = function (val){
            return val.substr(4, val.length-5).split(', ')
        }
        //get the true background of an element by recusing backwards through the dom
        const trueBG = function(node){
              for(let i=0;i<5;i++){
                if(i==4){
                   break;
                   node = document.body;
                }else {
                    if(getRGBArray(window.getComputedStyle(node).backgroundColor)[3] < 0.2) {
                        return node.parentNode;
                    }
                }
              }
        }
        //not all websites implement bold fonts correctly, font weights work more universally
        const fw = function(node){
            let ogfw = window.getComputedStyle(node).fontWeight;
            if(ogfw <= 700){
                return parseInt(ogfw)+200;
            } else{
                return 900;
            }
          };
        //determine if the bold colour should be brighter or darker than the base text against the background
        //this is kinda(very) inefficient but easier
        const newColour = function(node, rgb){
            let colour = rgb;
            let background = window.getComputedStyle(trueBG(node)).backgroundColor;
            let backgroundLum = getLuminance(getRGBArray(background));
            let colourL = RGBToHSL(colour);
            if(colourL[2] < 90){
                colourL[2] = colourL[2]+10;
            }else{
                colourL[2] = 100;
            }
            colourL = HSLToRGB(colourL[0], colourL[1], colourL[2]);
            let colourD = RGBToHSL(colour);
            if(colourD[2] > 10){
                colourD[2] = colourD[2]-10;
            }else{
                colourD[2] = 0;
            }
            colourD = HSLToRGB(colourD[0], colourD[1], colourD[2]);
            let colourLLum = getLuminance(colourL);
            let colourDLum = getLuminance(colourD);
            if(colourLLum/backgroundLum > colourDLum/backgroundLum){
                return colourL;
            }else{
                return colourD;
            }
        }
        return `<span style="font-weight:${fw(node)};color:rgb(${newColour(node, getRGBArray(window.getComputedStyle(node).color))})">${firstHalf}</span>${secondHalf}`;
        //return `<span style="font-weight:${fw(node)}">${firstHalf}</span>${secondHalf}`;
      })
      .join(' ')
  }
  //removed styles, although more semantic inline styles are more robust

	chrome.storage.sync.get('color', async ({ color }) => {

    //let tags = ['p', 'font', 'span', 'li', 'h1', 'h2', 'h3', 'h4']
    let tags = ['p', 'font', 'span', 'li']

    const parser = new DOMParser()
    tags.forEach((tag) => {
      console.log(document.getElementsByTagName(tag).length);
      for (let element of document.getElementsByTagName(tag)) {
        const elm = element;
        const n = parser.parseFromString(element.innerHTML, 'text/html')
        const textArrTransformed = Array.from(n.body.childNodes).map((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            return highlightText(node.nodeValue, elm)
          }
          return node.outerHTML
        })
        element.innerHTML = textArrTransformed.join(' ')
      }
    })
  })
}
