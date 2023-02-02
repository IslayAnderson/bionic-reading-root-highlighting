const rootwords = {"bio":{"meaning":"biography– a life story written by another person;\nbiology – the science of life;\nbiosphere – Earth’s surface inhabited by living things"},"cand":{"meaning":"candid– free from bias, prejudice, or malice;\ncandle– something that gives light; incandescent– white, glowing, or luminous with intense heat"},"centro":{"meaning":"egocentric – self-centered;\neccentric – not having a common center, not according to norm; centrifugal – moving outward from a center"},"centri":{"meaning":"egocentric – self-centered;\neccentric – not having a common center, not according to norm; centrifugal – moving outward from a center"},"cerebro":{"meaning":"cerebral – pertaining to the brain; cerebrate – to use the brain; cerebrospinal – pertaining to the brain and the spinal cord"},"chrono":{"meaning":"chronic – lasting for a long time; chronological – arranging events in time order,\nsynchronize – happening at the same time"},"celer":{"meaning":"accelerate – to increase the speed of; decelerate – to reduce the speed of"},"circum":{"meaning":"circumference– the  distance around ; circumscribe – to draw around; circumspect – looking around"},"claim":{"meaning":"clamour – to shout and make noise; exclaim – to loudly cry out suddenly;\nproclamation – something announced officially in public"},"clam":{"meaning":"clamour – to shout and make noise; exclaim – to loudly cry out suddenly;\nproclamation – something announced officially in public"},"cise":{"meaning":"homicide – murder;\nincisor – a sharp tooth for cutting food; insecticide – a chemical used to kill insects"},"cide":{"meaning":"homicide – murder;\nincisor – a sharp tooth for cutting food; insecticide – a chemical used to kill insects"},"cline":{"meaning":"inclination – a leaning toward;\nincline – a surface that slopes or leans; recline – to lean back and relax"},"caut":{"meaning":"cauterize – to burn with a hot instrument;\ncaustic – capable of burning or eating away;\nholocaust – total devastation, especially by fire"},"caust":{"meaning":"cauterize – to burn with a hot instrument;\ncaustic – capable of burning or eating away;\nholocaust – total devastation, especially by fire"},"clud":{"meaning":"conclusion – the end or last part; exclusion – shutting out, rejecting; seclude – to keep away from; to isolate"},"clus":{"meaning":"conclusion – the end or last part; exclusion – shutting out, rejecting; seclude – to keep away from; to isolate"},"cede":{"meaning":"to go or yield (intercede, recede, concede)"},"ceed":{"meaning":"exceed – to go beyond the limits; recede – to go back;\naccessible – easily entered, approached, or obtained;"},"cess":{"meaning":"exceed – to go beyond the limits; recede – to go back;\naccessible – easily entered, approached, or obtained;"},"Col":{"meaning":"collaborate – to work together; collision – smashing together;\ncolloquial – words formed by everyday interaction"},"capt":{"meaning":"intercept – to stop or interrupt;\nperceive – to take notice of something; captivating – taking hold of"},"cept":{"meaning":"intercept – to stop or interrupt;\nperceive – to take notice of something; captivating – taking hold of"},"ceive":{"meaning":"intercept – to stop or interrupt;\nperceive – to take notice of something; captivating – taking hold of"},"corpo":{"meaning":"corporation – a company recognized by law as a single body;\ncorpse – a dead body;\ncorporal – pertaining to the body"},"cosmo":{"meaning":"cosmonaut – a Russian astronaut; cosmos – the universe;\nmicrocosm – a miniature universe"},"cranio":{"meaning":"craniology – the study of skull characteristics;\n cranium – skull of vertebrates;\ncranial – pertaining to the skull"},"cred":{"meaning":"believe (credible, credence, incredible)"},"cruc":{"meaning":"crucial-characteristic of or having the form of a cross ;\n crucifix– the cross itself as a Christian emblem;\nexcruciating-  so intense as to cause great pain or anguish"},"cogni":{"meaning":"cognition – process of acquiring knowledge;\nincognito – disguised so no one knows you;\n recognize – to discover that one knows"},"act":{"meaning":"to move or do (actor, acting, reenact)"},"arbor":{"meaning":"tree (arboreal, arboretum, arborist)"},"crypt":{"meaning":"to hide (apocryphal, cryptic, cryptography)"},"ego":{"meaning":"I (egotist, egocentric, egomaniac)"},"form":{"meaning":"shape (conform, formulate, reform)"},"legal":{"meaning":"related to the law (illegal, legalities, paralegal)"},"meter":{"meaning":"measure (kilometer, millimeter, pedometer)"},"norm":{"meaning":"typical (abnormal, normality, paranormal)"},"phobia":{"meaning":"fear (arachnophobia, claustrophobia, hydrophobia)"},"acri":{"meaning":"bitter (acrid, acrimony, acridity)"},"astro":{"meaning":"star (astronaut, astronomy, astrophysics)"},"aud":{"meaning":"hear (audience, audible, audio)"},"auto":{"meaning":"self (autonomy, autocrat, automatic)"},"bene":{"meaning":"good (benefactor, benevolent, beneficial)"},"carn":{"meaning":"flesh (carnal, carnivorous, reincarnate)"},"corp":{"meaning":"body (corporal, corporate, corpse)"},"dict":{"meaning":"say (diction, dictate, edict)"},"fac":{"meaning":"to do (factory, faculty, faction)"},"gen":{"meaning":"birth (genesis, genetics, generate)"},"lum":{"meaning":"light (lumen, luminary, luminous)"},"micro":{"meaning":"small (microbiology, microcosm, microscope)"},"multi":{"meaning":"many (multilingual, multiple, multifaceted)"},"port":{"meaning":"carry (portal, portable, transport)"},"sect":{"meaning":"cut apart (dissect, sectional, transect)"},"sen":{"meaning":"old (senator, senile, senior)"},"sent":{"meaning":"to feel (consent, sensation, sensing)"},"tele":{"meaning":"far (telephone, telegraph, television)"},"vor":{"meaning":"to eat (herbivore, omnivore, voracious)"},"ambul":{"meaning":"to move or walk (ambulance, ambulate)"},"cardio":{"meaning":"heart (cardiovascular, electrocardiogram, cardiology)"},"counter":{"meaning":"against or opposite (counteract, counterpoint, counterargument)"},"dem":{"meaning":"people (democracy, democrat, demographic)"},"derm":{"meaning":"skin (dermatitis, dermatology, epidermis)"},"equi":{"meaning":"equal (equity, equilateral, equidistant)"},"hypno":{"meaning":"sleep (hypnosis, hypnotic, hypnotism)"},"intra":{"meaning":"within or into (intrapersonal, intramural, intravenous)"},"ject":{"meaning":"to throw (reject, eject, inject)"},"magni":{"meaning":"big or great (magnificent, magnify, magnitude)"},"mal":{"meaning":"bad (malignant, malfunction, malice)"},"omni":{"meaning":"all (omnipotent, omnipresent, omnivore)"},"pater":{"meaning":"father (paternal, paternity, patriarch)"},"script":{"meaning":"to write (manuscript, postscript, scripture)"},"vis, vid":{"meaning":"to see (envision, evident, vision)"}};
const rootord = ["bio","cand","centro","centri","cerebro","chrono","celer","circum","claim","clam","cise","cide","cline","caut","caust","clud","clus","cede","ceed","cess","Col","capt","cept","ceive","corpo","cosmo","cranio","cred","cruc","cogni","act","arbor","crypt","ego","form","legal","meter","norm","phobia","acri","astro","aud","auto","bene","carn","corp","cred","dict","fac","gen","lum","micro","multi","port","sect","sen","sent","tele","vor","ambul","cardio","cede","counter","dem","derm","equi","hypno","intra","ject","magni","mal","omni","pater","script","vis","vid"]
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
    console.log('begin function')
	// making half of the letters in a word bold
	function highlightText(sentenceText, node= {}) {
    const rootord = ["bio","cand","centro","centri","cerebro","chrono","celer","circum","claim","clam","cise","cide","cline","caut","caust","clud","clus","cede","ceed","cess","Col","capt","cept","ceive","corpo","cosmo","cranio","cred","cruc","cogni","act","arbor","crypt","ego","form","legal","meter","norm","phobia","acri","astro","aud","auto","bene","carn","corp","cred","dict","fac","gen","lum","micro","multi","port","sect","sen","sent","tele","vor","ambul","cardio","cede","counter","dem","derm","equi","hypno","intra","ject","magni","mal","omni","pater","script","vis","vid"]
    return sentenceText
      .split(' ')
      .map((word) => {
        const length = word.length;
        let negspace="";
        let firstHalf="";
        let secondHalf="";
        
            let regex="(bio)|(cand)|(centro)|(centri)|(cerebro)|(chrono)|(celer)|(circum)|(claim)|(clam)|(cise)|(cide)|(cline)|(caut)|(caust)|(clud)|(clus)|(cede)|(ceed)|(cess)|(Col)|(capt)|(cept)|(ceive)|(corpo)|(cosmo)|(cranio)|(cred)|(cruc)|(cogni)|(act)|(arbor)|(crypt)|(ego)|(form)|(legal)|(meter)|(norm)|(phobia)|(acri)|(astro)|(aud)|(auto)|(bene)|(carn)|(corp)|(cred)|(dict)|(fac)|(gen)|(lum)|(micro)|(multi)|(port)|(sect)|(sen)|(sent)|(tele)|(vor)|(ambul)|(cardio)|(cede)|(counter)|(dem)|(derm)|(equi)|(hypno)|(intra)|(ject)|(magni)|(mal)|(omni)|(pater)|(script)|(vis)|(vid)";

            regex = new RegExp(regex);
            let result = regex.exec(word)

            console.log(result)

            if(result==null){
                negspace = null;
                midPoint = Math.round(length / 2);
                firstHalf = word.slice(0, midPoint);
                secondHalf = word.slice(midPoint);
            }else{
                negspace = word.slice(0, result.index);
                firstHalf = word.slice(result.index, result[0].length+result.index);
                secondHalf = word.slice(result[0].length+result.index);
            }
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
        if(negspace==null){
            return `<span style="font-weight:${fw(node)};color:rgb(${newColour(node, getRGBArray(window.getComputedStyle(node).color))})">${firstHalf}</span>${secondHalf}`;
        }else{
            return `${negspace}<span style="font-weight:${fw(node)};color:rgb(${newColour(node, getRGBArray(window.getComputedStyle(node).color))})">${firstHalf}</span>${secondHalf}`;
        }
        //return `<span style="font-weight:${fw(node)}">${firstHalf}</span>${secondHalf}`;
      })
      .join(' ')
  }
  //removed styles, although more semantic inline styles are more robust

	chrome.storage.sync.get('color', async ({ color }) => {

    //let tags = ['p', 'font', 'span', 'li', 'h1', 'h2', 'h3', 'h4']
    //let tags = ['p', 'font', 'span', 'li']
    let tags = ['p']

    const parser = new DOMParser()
    tags.forEach((tag) => {
      console.log(document.getElementsByTagName(tag).innerText);
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
