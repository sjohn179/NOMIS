/*alert(window.innerWidth);
alert(window.innerHeight);*/

const nomisBody = document.querySelector('.nomis-body');
const levelTitle = document.getElementById('level-title');
const buttonsNomis = document.querySelectorAll('.btn');
const backFrame = document.querySelector('.back-frame');
const frame = document.querySelector('.frame');
const center = document.querySelector('.center');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const skillLevel = document.querySelector('.skill-level');
const nomis = document.querySelector('.nomis');
const nomisText = document.querySelector('.nomis-text');
const bodyOverlay = document.querySelector('.body-overlay');
const skillButtonButtons = document.querySelectorAll('.skill-btn-btn');
const innerFrame = document.querySelector('.inner-frame');
const btnCtr = document.querySelector('.btn-ctr');
const nomisOverlay = document.querySelector('.nomis-overlay');
const shadowOverlay = document.querySelector('.shadow-overlay');
const noTaunt = new Audio('sounds/no.mp3');
const trying = new Audio('sounds/trying.mp3');
const obstruction = new Audio('sounds/winner/obstruction.mp3');
const ejecting = new Audio('sounds/winner/ejecting-alt.mp3');
const congratulations = new Audio('sounds/winner/congratulations.mp3');
const thanks = new Audio('sounds/winner/thanks.mp3');
const noMore = new Audio('sounds/winner/no-more.mp3');
const peace = new Audio('sounds/winner/peace.mp3');
const topLeftN = document.querySelector('.top-left');
const menuIconN = document.querySelector('.menu-icon');

const container = document.querySelector('.container');

const portraitN = window.matchMedia("(orientation: portrait)");
const landscapeN = window.matchMedia("(orientation: landscape)");

const mobileNP = window.matchMedia("(max-width: 1400px)");
const smallMedMobileNL = window.matchMedia("(max-height: 1068px)");

const taunt0 = new Audio('sounds/rule.mp3');
const taunt1 = new Audio('sounds/loser/bow.mp3');
const taunt2 = new Audio('sounds/nothing.mp3');
const taunt3 = new Audio('sounds/die.mp3');
const taunt4 = new Audio('sounds/loser/dont-make-me-laugh.mp3');
const taunt5 = new Audio('sounds/loser/never.mp3');
const taunt6 = new Audio('sounds/easy.mp3');
const taunt7 = new Audio('sounds/loser/pathetic.mp3');
const taunt8 = new Audio('sounds/loser/u-suck.mp3');


const taunts = [taunt0, taunt1, taunt2, taunt3, taunt4, taunt5, taunt6];

const wrong = new Audio('sounds/wrong.mp3');
const lose = new Audio('sounds/loser/lose.mp3');
const best = new Audio('sounds/loser/your-best.mp3');
const wpf = new Audio('sounds/loser/wpf.mp3');
const loserHaha = new Audio('sounds/loser/haha.mp3');


const loserTaunts = [taunt1, taunt2, taunt4, taunt5, taunt6, taunt7, taunt8, best, wpf];

const greenPress = new Audio('sounds/green.mp3');
const redPress = new Audio('sounds/red.mp3');
const yellowPress = new Audio('sounds/yellow.mp3');
const bluePress = new Audio('sounds/blue.mp3');

// audio3 = new Audio();

const skillLevels = 6;

let moveArr, userMoveArr, randNum, iterations, type, first, audio1, audio2, audio3, startLaugh, eyeInterval, simonMIDI, started, btnKey, levels, cpuSpeed, ticker, taunt, tauntInterval, tauntFreq, losses, myInterval, nomisTextAlign, currTaunt;

let windowHeight, windowWidth, widthCalc, calcMarginH, calcMarginV, borderWidth, shadowWidth, shadowWidthInGame, wideAndShort, extraWideAndShort, extraExtraWideAndShort, tallAndNarrow, tallAndNarrowPortrait, won;



const sounds = [noTaunt, trying, obstruction, ejecting, congratulations, thanks, noMore, peace, taunt0, taunt1, taunt2, taunt3, taunt4, taunt5, taunt6, taunt7, taunt8, wrong, lose, best, wpf, loserHaha, greenPress, redPress, yellowPress, bluePress];





setTimeout(() => {
  topLeftN.style.opacity = '0.10';
  // menuIconN.style.opacity = '0.14';
},1648);



// center.addEventListener('click',preStart);

document.body.addEventListener('click',prePreStart)

/*
menuIconN.addEventListener('mouseover', function() {
  menuIconN.style.opacity = '0.62';
  topLeftN.style.opacity = '0.28';
});


menuIconN.addEventListener('mouseout', function() {
  menuIconN.style.opacity = '0.14';
  topLeftN.style.opacity = '0.10';
});*/

moveArr = [];
userMoveArr = [];
first = true;
initiated = false;
started = false;
losses = 0;
iterations = 0;


if(window.matchMedia("(min-width: 1100px)").matches && landscapeN.matches) {
  borderWidth = '16';
} else if(window.matchMedia("(min-width: 800px)").matches) {
  borderWidth = '14';
} else if((window.matchMedia("(max-width: 499px)").matches) || (portraitN.matches && window.matchMedia("(max-width: 399px)").matches && window.matchMedia("(max-height: 499px)").matches)) {
  // landscapeN.matches && 
  
  borderWidth = '7';
} else {
  borderWidth = '10';
}

shadowWidth = borderWidth * 3.28;
shadowWidthInGame = borderWidth / 2;



window.addEventListener('load', alignNomis);

window.addEventListener('keypress', preStart);

// window.addEventListener('click', prePreStart);

window.addEventListener('orientationchange',function() {
  setTimeout(() => {
    alignNomis();
  },14);
});



function prePreStart(){
  if(initiated === false && started === false) {
    
    preStart(event);
  }
}

function preStart(event) {
  won = false;

  if(initiated === false && started === false) {
    for(let sound of sounds) {
      sound.play();
    
      setTimeout(() => {
        sound.currentTime = 0;
        sound.pause();
      },1);
    }
    
    startUp();
    initiated = true;
    // console.log(`i: ${initiated}`);
    // console.log(`s: ${started}`);
  } else if(initiated === true && started === false) {
    initiated = false;

    key = event.key;

    getReady(key);
  } else {
    // console.log('Ineffective Key Press.');
  }

  alignNomis();
}


/*if (moveArr.length === 0) {

  //skillLevel.style.cssText = `animation: skill-in 1900ms 1 ease-in-out;`;

  frame.style.cssText = `border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20); animation: none;`;

  levelTitle.style.cssText = `background-color: rgb(14,14,14); animation: none;`;
  levelTitle.textContent = `LEVEL 1`;

  center.style.cssText = `background-color: rgb(20,20,20); border: ${borderWidth}px solid rgb(14,14,14); animation: none;`;

  nomis.style.cssText = `background-color: rgb(22,22,22);`;

  nomisText.style.cssText = `font-size: 84px; background: -webkit-linear-gradient(left,green,green,yellow,red,blue,blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent; position: relative; top: 5.4vh; z-index: 103;`;

  green.style.cssText = `background-color: rgb(0,96,0); border-color: rgb(0,112,0);`;
  red.style.cssText = `background-color: rgb(192,0,0); border-color: rgb(224,0,0);`;
  yellow.style.cssText = `background-color: rgb(192,192,0); border-color: rgb(224,224,0);`;
  blue.style.cssText = `background-color: rgb(0,0,192); border-color: rgb(0,0,224);`;

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.cssText = `animation: none; color: black;`;
    buttons[i].classList.remove('loser-text');
    buttons[i].textContent = '';
  }

  iterations = 0;
  moveArr = [];
  userMoveArr = [];

  // put in place so that CPU waits 614 ms to select first click for user to emulate
  if(first) {
    setTimeout(() => {
      // randNum = Math.floor(Math.random() * 4);

      // // console.log(`randNum: ${randNum}`);
      // // console.log(`moveArr: ${moveArr}`);

      // // console.log(`moveArr: ${moveArr}`);

      getCPUInput(moveArr);
    }, 1414);
  } else {
    setTimeout(() => {
      // randNum = Math.floor(Math.random() * 4);

      // // console.log(`randNum: ${randNum}`);
      // // console.log(`moveArr: ${moveArr}`);

      // // console.log(`moveArr: ${moveArr}`);

      getCPUInput(moveArr);
    }, 2828);
  }
}*/

let alNomStartUp;

function startUp() {
  alNomStartUp = alignNomis();

  nomisBody.style.cssText = `text-align: center; background: url(back.jpg); background-size: cover; overflow: hidden;`;

  skillButtonButtons[0].style.cssText = `background-color: rgb(255,128,0)`;
  skillButtonButtons[1].style.cssText = `background-color: rgb(212,188,0);`;
  // skillButtonButtons[2].style.cssText = `background-color: rgb(0,128,0)`;
  skillButtonButtons[2].style.cssText = `background-color: rgb(0,128,0)`;
  skillButtonButtons[3].style.cssText = `background-color: rgb(0,96,212)`;
  // skillButtonButtons[3].style.cssText = `background-color: rgb(0,0,212)`;
  skillButtonButtons[4].style.cssText = `background-color: rgb(128,0,204)`;
  skillButtonButtons[5].style.cssText = `background-color: rgb(196,0,196)`;

  for(let v = 0; v < skillButtonButtons.length; v++) {
    skillButtonButtons[v].style.fontSize = `${alNomStartUp[4]}`;
  }

  if (first === false) {

    if(audio1) {
      audio1.pause();
    }

    if(audio2) {
      audio2.pause();  
    }
    
    if(myInterval) {
      clearInterval(myInterval);
    }

    if(eyeInterval) {
      clearInterval(eyeInterval);
    }
    
  }


  if (initiated === false) {
    initiated = true; // remember to reset to false when game ends
    started = false;

    levelTitle.style.cssText = `color: rgb(241,241,241); animation: none; background-color: rgb(212,0,0);`;
    skillLevel.style.cssText = `visibility: visible; animation: come-in 614ms 1 ease-in;`;
    levelTitle.textContent = `CHOOSE YOUR SKILL`;

    setTimeout(() => {
      startLaugh = new Audio('sounds/haha-start.mp3');

      simonMIDI = new Audio('sounds/simonsays.mp3');
      simonMIDI.loop = true;
      simonMIDI.play();
    }, 614);
  }



  window.addEventListener('click', preGetReady);

/*
  window.addEventListener('keypress', function(event) {
    key = event.key;

    getReady(key);
  });
*/

}


function startUpDark() {
  let darkStartUp = alignNomis();

  nomisBody.style.cssText = `text-align: center; background: url(back.jpg); background-size: cover; overflow: hidden;`;

  skillButtonButtons[0].style.cssText = `background-color: rgb(196,0,196)`;
  skillButtonButtons[1].style.cssText = `background-color: rgb(196,0,196);`;
  // skillButtonButtons[2].style.cssText = `background-color: rgb(0,128,0)`;
  skillButtonButtons[2].style.cssText = `background-color: rgb(196,0,196)`;
  skillButtonButtons[3].style.cssText = `background-color: rgb(196,0,196)`;
  // skillButtonButtons[3].style.cssText = `background-color: rgb(0,0,212)`;
  skillButtonButtons[4].style.cssText = `background-color: rgb(196,0,196)`;
  skillButtonButtons[5].style.cssText = `background-color: rgb(196,0,196)`;

  if (first === false) {

    if(audio1) {
      audio1.pause();
    }

    if(audio2) {
      audio2.pause();  
    }
    
    if(myInterval) {
      clearInterval(myInterval);
    }

    if(eyeInterval) {
      clearInterval(eyeInterval);
    }
    
  }


  if (initiated === false) {
    initiated = true; // remember to reset to false when game ends
    started = false;

    levelTitle.style.cssText = `color: rgb(241,241,241); animation: none; background-color: rgb(196,0,196); font-size: ${darkStartUp[3]};`;
    skillLevel.style.cssText = `visibility: visible; animation: come-in 614ms 1 ease-in;`;
    levelTitle.textContent = `CHOOSE YOUR SKILL`;

    setTimeout(() => {
      startLaugh = new Audio('sounds/haha-start.mp3');

      simonMIDI = new Audio('sounds/simonsays.mp3');
      simonMIDI.loop = true;
      simonMIDI.play();
    }, 614);
  }



  window.addEventListener('click', preGetReady);

/*
  window.addEventListener('keypress', function(event) {
    key = event.key;

    getReady(key);
  });
*/

}



function startUpIllum() {
  let alNomStartIllum = alignNomis();

  nomisBody.style.cssText = `text-align: center; background: url(back.jpg); background-size: cover; overflow: hidden;`;

  skillButtonButtons[0].style.cssText = `background-color: rgb(0,176,176)`;
  skillButtonButtons[1].style.cssText = `background-color: rgb(0,176,176);`;
  // skillButtonButtons[2].style.cssText = `background-color: rgb(0,128,0)`;
  skillButtonButtons[2].style.cssText = `background-color: rgb(0,176,176)`;
  skillButtonButtons[3].style.cssText = `background-color: rgb(0,176,176)`;
  // skillButtonButtons[3].style.cssText = `background-color: rgb(0,0,212)`;
  skillButtonButtons[4].style.cssText = `background-color: rgb(0,176,176)`;
  skillButtonButtons[5].style.cssText = `background-color: rgb(0,176,176)`;

  for(let u = 0; u < skillButtonButtons.length; u++) {
    skillButtonButtons[u].style.fontSize = `${alNomStartIllum[4]}`;
  }

  if (first === false) {

    if(audio1) {
      audio1.pause();
    }

    if(audio2) {
      audio2.pause();  
    }
    
    if(myInterval) {
      clearInterval(myInterval);
    }

    if(eyeInterval) {
      clearInterval(eyeInterval);
    }
    
  }


  if (initiated === false) {
    initiated = true; // remember to reset to false when game ends
    started = false;

    levelTitle.style.cssText = `color: rgb(241,241,241); animation: none; background-color: rgb(0,176,176); font-size: ${alNomStartIllum[3]};`;
    skillLevel.style.cssText = `visibility: visible; animation: come-in 614ms 1 ease-in;`;
    levelTitle.textContent = `CHOOSE YOUR SKILL`;

    setTimeout(() => {
      startLaugh = new Audio('sounds/haha-start.mp3');

      simonMIDI = new Audio('sounds/simonsays.mp3');
      simonMIDI.loop = true;
      simonMIDI.play();
    }, 614);
  }



  window.addEventListener('click', preGetReady);

/*
  window.addEventListener('keypress', function(event) {
    key = event.key;

    getReady(key);
  });
*/

}




function preGetReady(event) {
  key = event.target.id.slice(-1);

  alignNomis();

  getReady(key);
}

function getReady(key) {

  
  
  let alNom = alignNomis();

  if (started === false &&  (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5')) {
    started = true;

    frame.style.cssText = `background-color: rgb(20,20,20); border: ${borderWidth}px solid rgb(14, 14, 14);`;
    
    
    btnCtr.style.opacity = '1';
    innerFrame.style.opacity = '0.4';

    btnKey = document.querySelector(`#btn-${key}`);

    switch (key) {
      case '0':
        fontClr = 'rgb(255,128,0)';
        break;
      case '1':
        fontClr = 'rgb(212,184,0)';
        break;
      case '2':
        // fontClr = 'rgb(0,128,0)';
        fontClr = 'rgb(0,128,0)';
        break;
      case '3':
        // fontClr = 'rgb(0,0,212)';
        fontClr = 'rgb(0,96,212)';
        break;
      case '4':
        fontClr = 'rgb(114,0,192)';
        break;
      case '5':
        fontClr = 'rgb(144,0,144)';
        break;
    }

    btnKey.style.cssText = `background-color: rgb(254,254,254); color: ${fontClr}; font-size: ${alNom[4]};`;

    setTimeout(() => {
      if (key === '0') {
        btnKey.style.cssText = `background-color: rgb(255,128,0); color: rgb(254,254,254);`;
      } else if (key === '1') {
        btnKey.style.cssText = `background-color: rgb(212,188,0); color: rgb(254,254,254);`;
      } else if (key === '2') {
        // btnKey.style.cssText = `background-color: rgb(0,128,0); color: rgb(254,254,254);`;
        btnKey.style.cssText = `background-color: rgb(0,128,0); color: rgb(254,254,254);`;
      } else if (key === '3') {
        // btnKey.style.cssText = `background-color: rgb(0,0,212); color: rgb(254,254,254);`;
        btnKey.style.cssText = `background-color: rgb(0,96,212); color: rgb(254,254,254);`;
      } else if (key === '4') {
        btnKey.style.cssText = `background-color: rgb(128,0,204); color: rgb(254,254,254);`;
      } else if (key === '5') {
        btnKey.style.cssText = `background-color: rgb(196,0,196); color: rgb(254,254,254);`;
      }

    }, 414)

    if(losses > 0) {
      setTimeout(() => {
        trying.play();
      },1614);
    }

    for (let x = 1; x <= 7; x++) {

      for (let y = 0; y < buttonsNomis.length; y++) {
        setTimeout(() => {
          buttonsNomis[y].click();
        }, 116 * (x * (y + 1)));
      }
    }

    if (key === '0') {
      //higher means SLOWER
      cpuSpeed = 184;
      passSpeed = 942;
      levels = 8;
      tauntFreq = 24014;
    } else if (key === '1') {
      cpuSpeed = 172;
      passSpeed = 914;
      levels = 12;
      tauntFreq = 22014;
    } else if (key === '2') {
      cpuSpeed = 144;
      passSpeed = 814;
      levels = 16;
      tauntFreq = 18014;
    } else if (key === '3') {
      cpuSpeed = 107;
      passSpeed = 714;
      levels = 20;
      tauntFreq = 14014;
    } else if (key === '4') {
      cpuSpeed = 84;
      passSpeed = 614;
      levels = 24;
      tauntFreq = 12014;
    } else if (key === '5') {
      cpuSpeed = 84;
      passSpeed = 614;
      levels = 28;
      tauntFreq = 10014;
    }

    

    setTimeout(() => {
      startLaugh.play();
      
      for(let i = 0; i < skillButtonButtons.length; i++) {
        document.getElementById(`btn-${i}`).style.fontSize = `${alNom[4]}`;
      }


      levelTitle.style.cssText = `background-color: rgb(0,176,176); animation: none; font-size: ${alNom[3]};`;
      levelTitle.textContent = '💀 GOOD LUCK 💀';

      document.querySelector(`#btn-${key}`).style.cssText = `background-color: rgb(0,176,176); color: rgb(254,254,254); animation: button-flash-${key} 501ms 4 ease-in-out; font-size: ${alNom[4]};`;

      for (let i = 0; i < skillLevels; i++) {
        if (i != key) {
          document.querySelector(`#btn-${i}`).style.cssText = `background-color: rgb(42,42,42); color: rgb(14,14,14); border-color: rgb(72,0,72); font-size: ${alNom[4]};`;
          // document.querySelector(`#btn-${i}`).textContent = ``;
        }
      }

      setTimeout(() => {
        simonMIDI.pause();
        skillLevel.style.cssText = `visibility: hidden; animation: come-out 614ms 1 ease-out;`;
        levelTitle.style.cssText = `color: rgb(241,241,241); animation: none; background-color: rgb(14,14,14);`;
        levelTitle.textContent = `LEVEL 1`;
        // center.style.cssText = `right: 39.72vw; bottom: 13.4vh;`;
        startGame();
      }, 2004)
    }, 3424)

  }
}

function startGame() {

  nomisBody.style.cssText = `overflow: hidden;`;

  // document.querySelector('.win-center').style.cssText = `visibility: visible;`;

  iterations = 0;

  let nomisWA = alignNomis();


  setTimeout(() => {
    let randTaunt = Math.floor(Math.random() * 4);

    taunts[randTaunt].play();

        /*const rule = new Audio('sounds/rule.mp3');
        rule.play();*/

    tauntInterval = setInterval(() => {
      let randTaunt2 = Math.floor(Math.random() * 7);

      /*
      switch (randTaunt2) {
        case 0:
          taunt2 = new Audio('sounds/rule.mp3');
          break;
        case 1:
          taunt2 = new Audio('sounds/loser/bow.mp3');
          break;
        case 2:
          taunt2 = new Audio('sounds/loser/dont-make-me-laugh.mp3');
          break;
        case 3:
          taunt2 = new Audio('sounds/loser/never.mp3');
          break;
        case 4:
          taunt2 = new Audio('sounds/easy.mp3');
          break;
        case 5:
          taunt2 = new Audio('sounds/nothing.mp3');
          break;
        case 6:
          taunt2 = new Audio('sounds/die.mp3');
          break;
      }

      taunt2.play();*/

      taunts[randTaunt2].play();



      frame.style.cssText = `border: ${borderWidth}px solid rgb(0,176,176); background-color: rgb(20,20,20);`;
      nomis.style.cssText = `background-color: transparent; border-color: transparent;`;
      // nomisText top: ${nomisWA[8]}; 
      /*nomisText.style.cssText = `font-size: ${nomisWA[2]}; animation: nomis-loser 296ms 6 ease-in-out;`;
      nomisOverlay.style.cssText = `animation: nomis-overlay-flash 296ms 6 ease-in-out;`;*/
      
      nomisText.style.cssText = `font-size: ${nomisWA[2]}; animation: nomis-loser 1776ms 1 ease-in-out;`;
      nomisOverlay.style.cssText = `animation: nomis-overlay-flash 1776ms 1 ease-in-out;`;
      levelTitle.style.cssText = `font-size: ${nomisWA[3]}; background-color: rgb(0,176,176); animation: none;`;
      
      if(portraitN.matches) {
        //  left: ${nomisWA[1]}vw;
        center.style.cssText = `background: none; width: ${nomisWA[0]}vw; left: unset; border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20);`;
      } else {
        center.style.cssText = `background: none; top: ${nomisWA[5]}vh; height: ${nomisWA[6]}vh; border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20);`;
      }

      for(let i = 0; i < 1915; i++) {
        setTimeout(() => {
          if(portraitN.matches) {
            // left: ${nomisWA[1]}vw; 
            center.style.cssText = `left: unset; width: ${nomisWA[0]}vw; border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${borderWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover;`;
          } else {
            center.style.cssText = `top: ${nomisWA[5]}vh; height: ${nomisWA[6]}vh; border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${borderWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover;`;
          }
        },i);
      }
      


      /*for(let i = 0; i < 12; i++) {
        setTimeout(() => {
          nomisText.style.cssText = `background: -webkit-linear-gradient(left, rgb(0, 176, 176), rgb(0, 176, 176), rgb(0, 176, 176), rgb(0, 176, 176), rgb(0, 176, 176), rgb(0, 176, 176));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;`;

          setTimeout(() => {
            nomisText.style.cssText = `font-size: 84px; background: -webkit-linear-gradient(rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; position: relative; top: 5.4vh; z-index: 103;`;
          },(296 * i + 148));
        },296 * i);
      }

      setTimeout(() => {
        nomisText.style.cssText = `background: -webkit-linear-gradient(left, green, green, yellow, red, blue, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`;
      },1776);*/


      setTimeout(() => {
        frame.style.cssText = `border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20);`;
        
        if(portraitN.matches) {
          // left: ${nomisWA[1]}vw; 
          center.style.cssText = `left: unset; width: ${nomisWA[0]}vw; border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20); background-position: center; background-size: cover;`;
        } else {
          center.style.cssText = `top: ${nomisWA[5]}vh; height: ${nomisWA[6]}vh; border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20); background-position: center; background-size: cover;`;
        }

        nomis.style.cssText = `background-color: rgb(22,22,22); border-top: 4px solid rgb(14,14,14); border-bottom: 4px solid rgb(14,14,14);`;
        
        // nomisText top: ${nomisWA[8]};
        nomisText.style.cssText = `font-size: ${nomisWA[2]}; background: -webkit-linear-gradient(left, green, green, yellow, red, blue, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`;
        levelTitle.style.cssText = `font-size: ${nomisWA[3]}; background-color: rgb(14,14,14); animation: none;`;
      }, 1914);
    }, tauntFreq);


//    alignNomis();
    
    frame.style.cssText = `border: ${borderWidth}px solid rgb(0,176,176); background-color: rgb(20,20,20);`;
    
    if(portraitN.matches) {
      // left: ${nomisWA[1]}vw; 
      center.style.cssText = `left: unset; width: ${nomisWA[0]}vw; border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${borderWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover;`;
    } else {
      center.style.cssText = `top: ${nomisWA[5]}vh; height: ${nomisWA[6]}vh; border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${borderWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover;`;
    }
    
    nomis.style.cssText = `background-color: transparent; border-color: transparent;`;

    // nomisText top: ${nomisWA[8]};
    /*
     nomisText.style.cssText = `font-size: ${nomisWA[2]}; animation: nomis-loser 296ms 6 ease-in-out;`;
    nomisOverlay.style.cssText = `animation: nomis-overlay-flash 296ms 6 ease-in-out;`;
     */

    nomisText.style.cssText = `font-size: ${nomisWA[2]}; animation: nomis-loser 1776ms 1 ease-in-out;`;
    nomisOverlay.style.cssText = `animation: nomis-overlay-flash 1776ms 1 ease-in-out;`;

    levelTitle.style.cssText = `font-size: ${nomisWA[3]}; background-color: rgb(0,176,176); animation: none;`;
    

    setTimeout(() => {
      frame.style.cssText = `border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20);`;
      
      if(portraitN.matches) {
        // left: ${nomisWA[1]}vw; 
        center.style.cssText = `left: unset; width: ${nomisWA[0]}vw; border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20); background-position: center; background-size: cover;`;
      } else {
        center.style.cssText = `top: ${nomisWA[5]}vh; height: ${nomisWA[6]}vh; border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20); background-position: center; background-size: cover;`;
      }

      nomis.style.cssText = `background-color: rgb(22,22,22); border-top: 4px solid rgb(14,14,14); border-bottom: 4px solid rgb(14,14,14);`;
      
      // nomisText top: ${nomisWA[8]};
      nomisText.style.cssText = `font-size: ${nomisWA[2]}; background: -webkit-linear-gradient(left, green, green, yellow, red, blue, blue);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`;
      levelTitle.style.cssText = `font-size: ${nomisWA[3]}; background-color: rgb(14,14,14); animation: none;`;
      

    }, 1914);

  }, 614);

  if (moveArr.length === 0) {

    //skillLevel.style.cssText = `animation: skill-in 1900ms 1 ease-in-out;`;

    frame.style.cssText = `border: ${borderWidth}px solid rgb(14,14,14); background-color: rgb(20,20,20); animation: none;`;

    levelTitle.style.cssText = `font-size: ${nomisWA[3]}; background-color: rgb(14,14,14); animation: none;`;
    levelTitle.textContent = `LEVEL 1`;

    if(portraitN.matches) {
      // left: ${nomisWA[1]}vw; 
      center.style.cssText = `left: unset; width: ${nomisWA[0]}vw; background-color: rgb(20,20,20); border: ${borderWidth}px solid rgb(14,14,14); animation: none;`;
    } else {
      center.style.cssText = `top: ${nomisWA[5]}vh; height: ${nomisWA[6]}vh; background-color: rgb(20,20,20); border: ${borderWidth}px solid rgb(14,14,14); animation: none;`;
    }

    nomis.style.cssText = `background-color: rgb(22,22,22);`;

    // font-size: 84px; (BELOW)
    // position: relative; top: 5.4vh; 

    // nomisText top: ${nomisWA[8]};
    nomisText.style.cssText = `font-size: ${nomisWA[2]}; background: -webkit-linear-gradient(left,green,green,yellow,red,blue,blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent; z-index: 103;`;

    green.style.cssText = `background-color: rgb(0,96,64); border-color: rgb(0,112,75);`;
    red.style.cssText = `background-color: rgb(192,0,117); border-color: rgb(224,0,149);`;
    yellow.style.cssText = `background-color: rgb(192,192,0); border-color: rgb(224,224,0);`;
    blue.style.cssText = `background-color: rgb(96,0,192); border-color: rgb(112,0,224);`;

    for (let i = 0; i < buttonsNomis.length; i++) {
      buttonsNomis[i].style.cssText = `animation: none; color: black; width: ${nomisWA[7]};`;
      buttonsNomis[i].classList.remove('loser-text');
      buttonsNomis[i].textContent = '';
    }

    moveArr = [];
    userMoveArr = [];

    // put in place so that CPU waits 614 ms to select first click for user to emulate
    if (first) {
      setTimeout(() => {
        // randNum = Math.floor(Math.random() * 4);

        // // console.log(`randNum: ${randNum}`);
        // // console.log(`moveArr: ${moveArr}`);

        // // console.log(`moveArr: ${moveArr}`);

        getCPUInput(moveArr);
      }, 2214);
    } else {
      setTimeout(() => {
        // randNum = Math.floor(Math.random() * 4);

        // // console.log(`randNum: ${randNum}`);
        // // console.log(`moveArr: ${moveArr}`);

        // // console.log(`moveArr: ${moveArr}`);

        getCPUInput(moveArr);
      }, 2214);
    }
  }
}




function pressButton(e) {

  let el, index;

  el = e.target.id;

  document.getElementById(`${el}`).classList.add('pressed');

  // console.log(`el: ${el}`);

  /*if(moveArr.length <= userMoveArr.length) {
    randNum = Math.floor(Math.random() * 3);

    for(let j = 0; j < moveArr.length; j++) {
        buttons[moveArr[j]].click();
        buttons[randNum].click();
        moveArr.push(randNum);
    }
  }*/


  
  if (el === 'green') {
    greenPress.play();
      console.log('green pressed');
  } else if (el === 'red') {
    redPress.play();
      console.log('red pressed');
  } else if (el === 'yellow') {
    yellowPress.play();
      console.log('yellow pressed');
  } else if (el === 'blue') {
    bluePress.play();
      console.log('blue pressed');
  }
  // put into place so that button highlight is removed 614ms after it is clicked
  setTimeout(() => {
    document.getElementById(`${el}`).classList.remove('pressed');
  }, 614);
}


for (let i = 0; i < buttonsNomis.length; i++) {
  buttonsNomis[i].addEventListener('click', pressButton);
}

function verifyCorrect(moveArr, userMoveArr) {
  let result;

  for (let i = 0; i < userMoveArr.length; i++) {
    /*// console.log(`userMoveArr[i]: ${userMoveArr[i]}`);
    // console.log(`moveArr[i]: ${moveArr[i]}`);*/

    if (userMoveArr[i] !== moveArr[i]) {
      result = false;
    } else {
      result = true;
    }
  }

  return result;
}

function getUserInput(moveArr, userMoveArr) {

  if (userMoveArr.length < moveArr.length) {
    let id, el, res;

    for (let i = 0; i < buttonsNomis.length; i++) {
      buttonsNomis[i].addEventListener('click', function(event) {

        id = event.target.id;

        if (id === 'green') {
          el = 0;
        } else if (id === 'red') {
          el = 1;
        } else if (id === 'yellow') {
          el = 2;
        } else if (id === 'blue') {
          el = 3;
        }
      })
    }

    if (el !== undefined) {
      userMoveArr.push(el);

      res = verifyCorrect(moveArr, userMoveArr);

      if (res && moveArr.length === userMoveArr.length) {
        /*setTimeout(() => {
          getCPUInput(moveArr);
        },1414);*/

        getCPUInput(moveArr);
      } else if (res && moveArr.length > userMoveArr.length) {
        getUserInput(moveArr, userMoveArr);
      } else if (!res) {
        alert('INCORRECT');
      }
    } else {

      setTimeout(() => {
        userMoveArr.push(el);

        res = verifyCorrect(moveArr, userMoveArr);
        /*
                // console.log(`moveArr: ${moveArr}`);
                // console.log(`userMoveArr: ${userMoveArr}`);*/

        if (res && moveArr.length === userMoveArr.length && iterations === levels) {
            getCPUInput(moveArr);
        } else if (res && moveArr.length === userMoveArr.length) {
          setTimeout(() => {
            getCPUInput(moveArr);
          }, 1414);
        } else if (res && moveArr.length > userMoveArr.length) {
          getUserInput(moveArr, userMoveArr);
        } else if (!res) {
          youLose();
        }
        // find way to alter these times, based on skill level selected by user
      }, 1616 + (passSpeed * (moveArr.length)));
    }
  }

}

/*function getUserInput(moveArr, userMoveArr) {
  let res;

  type = 'user';

  // console.log(`userMoveArr.length: ${userMoveArr.length}`);
  // console.log(`moveArr.length: ${moveArr.length}`);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      let el, id;

      id = event.target.id;

      if (id === 'green') {
        el = 0;
      } else if (id === 'red') {
        el = 1;
      } else if (id === 'yellow') {
        el = 2;
      } else if (id === 'blue') {
        el = 3;
      }

      if (userMoveArr.length < moveArr.length) {
        userMoveArr.push(el);

        // console.log(`moveArr: ${moveArr}`);
        // console.log(`userMoveArr: ${userMoveArr}`);

        res = verifyCorrect(moveArr, userMoveArr);

        if (res === false) {
          alert('GAME OVER');
        } else {
          getUserInput(moveArr, userMoveArr);
        }

      } else {
        alert('triggered');
        setTimeout(() => {
          getCPUInput(moveArr);
        }, 1414);
      }
    })

    /*if(!res && type === 'user') {
      alert('fail');
    }*/


/*}



}*/

function getCPUInput(moveArr) {
  let freq = 1;

  type = 'cpu';

  iterations++;
  levelTitle.textContent = `LEVEL ${iterations}`;

  first = false;

  if (iterations > levels) {

    youWin();

  } else if (iterations <= levels) {
    // console.log('');
    randNum = Math.floor(Math.random() * 4);
    moveArr.push(randNum);

    for (let i = 0; i < moveArr.length; i++) {

      setTimeout(() => {
        if (moveArr[i] === moveArr[i - 1]) {
          freq++;
        } else {
          freq = 2;
        }

        // put in place so that multiple clicks of same button all light up and play sound
        setTimeout(() => {
          buttonsNomis[moveArr[i]].click();
        }, cpuSpeed * freq);

        /*  if(buttons[moveArr[i]] !== buttons[moveArr[i-1]]) {
              setTimeout(() => {
                buttons[moveArr[i]].click();
              },107);
          } else {
            // fix that it only flashes twice when 3 in a row are the same. Change timeout to make this happen. Needs to be equipt to handle up to 16 in a row. HINT: use counter to start over only when new color is triggered.
            setTimeout(() => {
              buttons[moveArr[i]].click();
            },214);*/




        // console.log(`Iteration ${iterations}, Move ${i}: ${moveArr[i]}`);
        //// console.log(`moveArr: ${moveArr}`);
      }, 614 * i);
    }

    // put in place so that user setTimeouts don't start until after CPU provides pattern to emulate
    setTimeout(() => {
      //userMoveArr = [];
      getUserInput(moveArr, userMoveArr);
    }, passSpeed * moveArr.length);
  }
}




let hahaTimeout, ltTimeout, textTimeout, majorTimeout;

function youLose() {
  clearInterval(tauntInterval);
  losses++;
  initiated = false;
  started = false;
  
  let nAlign, widthValN;

  backFrame.style.visibility = 'visible';
  
  // document.querySelector('.win-center').style.cssText = `visibility: hidden;`;

  // document.querySelector('.outer-frame').style.opacity = '0';
  
  nAlign = alignNomis();

  widthValN = `${nAlign[0]}vw`;


  wrong.play();

  lose.loop = true;
  lose.play();

  // audio3 = new Audio();

  bodyOverlay.style.cssText = `visibility: visible;`;
  nomisBody.style.cssText = `text-align: center; background: url(skulls.jpg); background-size: cover;`;

  if(portraitN.matches && mobileNP.matches) {
    center.style.width = `${widthValN}`;
  }

  setTimeout(() => {
    bodyOverlay.style.cssText = `visibility: hidden;`;
    nomisBody.style.cssText = `text-align: center; background: url(skulls.jpg); background-size: cover; overflow: hidden;`;
  }, 414);



  setTimeout(() => {
    best.play();

    // revert to 1014 if Shao Kahn is used
  }, 815);

  setTimeout(() => {
    wpf.play();
    // revert to 2688 if Shao Kahn
  }, 2088);


  majorTimeout = setTimeout(() => {
    loserHaha.play();

    nomis.style.cssText = `background-color: transparent; border-color: transparent;`;

    // nomisText top: ${nomisWA[8]};
    /*
      nomisText.style.cssText = `font-size: ${nAlign[2]}; animation: nomis-loser 296ms 6 ease-in-out;`;
      nomisOverlay.style.cssText = `animation: nomis-overlay-flash 296ms 6 ease-in-out;`;
    */

      nomisText.style.cssText = `font-size: ${nAlign[2]}; animation: nomis-loser 1776ms 1 ease-in-out;`;
      nomisOverlay.style.cssText = `animation: nomis-overlay-flash 1776ms 1 ease-in-out;`;

    if(portraitN.matches && mobileNP.matches) {
      //  left: 0vw; margin-left: ${nAlign[1]}vw;
      center.style.cssText = `width: ${widthValN}; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${shadowWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover; left: unset;`;
    } else {
      // height: 242px; width: 242px; right: 39.22vw; bottom: 12.4vh;
      center.style.cssText = `width: ${widthValN}; top: ${nAlign[5]}vh; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${shadowWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover;`;
    }

    // line-height: 1.4
    if(portraitN.matches && window.matchMedia("(max-width: 399px)").matches) {
      levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(0,176,176); animation: none; line-height: ${nAlign[11]}; white-space: normal;`;
    } else if(portraitN.matches) {
      levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(0,176,176); animation: none; line-height: ${nAlign[11]};`;
    } else {
      levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(0,176,176); animation: none; line-height: ${nAlign[11]};`;
    }

    // rgb(4,4,4) not transparent bg
    frame.style.cssText = `border: ${borderWidth}px solid rgb(0,176,176); animation: none; opacity: 0.92; background-color: transparent;`;

    for (let i = 0; i < buttonsNomis.length; i++) {

      // rgb(4,4,4) not transparent for both
      if(portraitN.matches) {
        buttonsNomis[i].style.cssText = `border-color: rgb(0,176,176); background-opacity: 0.92; background-color: transparent;`;
      } else {
        buttonsNomis[i].style.cssText = `border-color: rgb(0,176,176); background-opacity: 0.92; background-color: transparent; width: ${nAlign[7]};`;
      }
    }

    textTimeout = setTimeout(() => {
      if(portraitN.matches && mobileNP.matches) {
        //  left: 0vw; margin-left: ${nAlign[1]}vw;
        center.style.cssText = `width: ${widthValN}; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(144,0,144); left: unset;`;
      } else {
        //  height: 228px; width: 228px; right: 39.72vw; bottom: 13.4vh;
        center.style.cssText = `width: ${widthValN}; top: ${nAlign[5]}vh; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(144,0,144);`;
      }

      nomis.style.cssText = `background-color: rgb(22,22,22); border-top: 4px solid rgb(14,14,14); border-bottom: 4px solid rgb(14,14,14);`;

      if(portraitN.matches && window.matchMedia("(max-width: 399px)").matches) {
        levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: none; line-height: ${nAlign[11]}; white-space: normal;`;
      } else if(portraitN.matches) {
        levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: none; line-height: ${nAlign[11]};`;
      } else {
        levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: none; line-height: ${nAlign[11]};`;
      }

      frame.style.cssText = `border: ${borderWidth}px solid rgb(196,0,196); background-color: rgb(4,4,4); animation: none; opacity: 0.92;`;

      for (let i = 0; i < buttonsNomis.length; i++) {
        if(portraitN.matches) {
          buttonsNomis[i].style.cssText = `border-color: rgb(196,0,196); background-color: rgb(4,4,4); opacity: 0.92;`;
        } else {
          buttonsNomis[i].style.cssText = `border-color: rgb(196,0,196); background-color: rgb(4,4,4); opacity: 0.92; width: ${nAlign[7]};`;
        }
      }

      // font-size: 84px; (BELOW)
      // position: relative; top: 5.4vh; 

      // nomisText top: ${nomisWA[8]};
      nomisText.style.cssText = `font-size: ${nAlign[2]}; background: -webkit-linear-gradient(rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; z-index: 103;`;
    }, 1776);


    
    myInterval = setInterval(() => { 
      randSong = Math.floor(Math.random() * 9);

      currTaunt = loserTaunts[randSong];

      currTaunt.play();

      if(portraitN.matches && mobileNP.matches) {
        //  left: 0vw; margin-left: ${nAlign[1]}vw;
        center.style.cssText = `width: ${widthValN}; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${shadowWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover; left: unset;`;
      } else {
        // height: 242px; width: 242px; right: 39.22vw; bottom: 12.4vh; 
        center.style.cssText = `width: ${widthValN}; top: ${nAlign[5]}vh; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(0,176,176); box-shadow: 0 0 ${shadowWidth}px rgb(0,207,212); background: url(eye.jpg); background-position: center; background-size: cover;`;
      }
      

      nomis.style.cssText = `background-color: transparent; border-color: transparent;`;

      if(portraitN.matches && window.matchMedia("(max-width: 399px)").matches) {
        levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(0,176,176); animation: none; line-height: ${nAlign[11]}; white-space: normal;`;
      } else if(portraitN.matches) {
        levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(0,176,176); animation: none; line-height: ${nAlign[11]};`;
      } else {
        levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(0,176,176); animation: none; line-height: ${nAlign[11]};`;
      }


      // rgb(4,4,4) not transparent bg
      frame.style.cssText = `border: ${borderWidth}px solid rgb(0,176,176); background-color: transparent; animation: none; opacity: 0.92;`;

      for (let i = 0; i < buttonsNomis.length; i++) {
        
        // rgb(4,4,4) not transparent  for both
        if(portraitN.matches) {
          buttonsNomis[i].style.cssText = `border-color: rgb(0,176,176); background-color: transparent; opacity: 0.92;`;
        } else {
          buttonsNomis[i].style.cssText = `border-color: rgb(0,176,176); background-color: transparent; opacity: 0.92; width: ${nAlign[7]};`;
        }
        
      }

      ltTimeout = setTimeout(() => {
        if(portraitN.matches && mobileNP.matches) {
          // left: 0vw; margin-left: ${nAlign[1]}vw;
          center.style.cssText = `width: ${widthValN}; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(144,0,144); left: unset;`;
        } else {
          //  height: 228px; width: 228px; right: 39.72vw; bottom: 13.4vh;
          center.style.cssText = `width: ${widthValN}; top: ${nAlign[5]}vh; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(144,0,144);`;
        }

        if(portraitN.matches && window.matchMedia("(max-width: 399px)").matches) {
          levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: none; line-height: ${nAlign[11]}; white-space: normal;`;
        } else if(portraitN.matches) {
          levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: none; line-height: ${nAlign[11]};`;
        } else {
          levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: none; line-height: ${nAlign[11]};`;
        }

        frame.style.cssText = `border: ${borderWidth}px solid rgb(196,0,196); background-color: rgb(4,4,4); animation: none; opacity: 0.92;`;

        for (let i = 0; i < buttonsNomis.length; i++) {
          if(portraitN.matches) {
            buttonsNomis[i].style.cssText = `border-color: rgb(196,0,196); background-color: rgb(4,4,4); opacity: 0.92;`;
          } else {
            buttonsNomis[i].style.cssText = `border-color: rgb(196,0,196); background-color: rgb(4,4,4); opacity: 0.92; width: ${nAlign[7]};`;
          }
          
        }

        nomis.style.cssText = `background-color: rgb(22,22,22); border-top: 4px solid rgb(14,14,14); border-bottom: 4px solid rgb(14,14,14);`;
      }, 4144);

      /*
      nomisText.style.cssText = `font-size: ${nAlign[2]}; top: ${nAlign[8]}; animation: nomis-loser 296ms 14 ease-in-out;`;
      nomisOverlay.style.cssText = `animation: nomis-overlay-flash 296ms 14 ease-in-out;`;
      */

      nomisText.style.cssText = `font-size: ${nAlign[2]}; top: ${nAlign[8]}; animation: nomis-loser 4116ms 1 ease-in-out;`;
      nomisOverlay.style.cssText = `animation: nomis-overlay-flash 4116ms 1 ease-in-out;`;


      currTaunt.play();

      // font-size: 84px; (BELOW)
      setTimeout(() => {
        // position: relative; top: 5.4vh; 

        // nomisText top: ${nomisWA[8]};
        nomisText.style.cssText = `font-size: ${nAlign[2]}; background: -webkit-linear-gradient(rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; z-index: 103;`;
      }, 4141);


      hahaTimeout = setTimeout(() => {
        loserHaha.play();
      }, 2116);

    }, 14019);

    // revert to 5114 if I switch back to Shao Kahn
  }, 4416);


  if(portraitN.matches && window.matchMedia("(max-width: 399px)").matches) {
    levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: blink-end 547ms 6 ease-in-out; animation-delay: 828ms; line-height: ${nAlign[11]}; white-space: normal;`;
  } else if(portraitN.matches) {
    levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: blink-end 547ms 6 ease-in-out; animation-delay: 828ms; line-height: ${nAlign[11]};`;
  } else {
    levelTitle.style.cssText = `font-size: ${nAlign[10]}; background-color: rgb(196,0,196); animation: blink-end 547ms 6 ease-in-out; animation-delay: 828ms; line-height: ${nAlign[11]};`;
  }

  if(portraitN.matches && window.matchMedia("(max-width: 399px)").matches) {
    levelTitle.innerHTML = `GAME OVER. CLICK OR TAP SCREEN TO PLAY AGAIN ...IF YOU DARE.`;
  } else if(portraitN.matches) {
    levelTitle.innerHTML = `GAME OVER. CLICK OR TAP SCREEN TO PLAY AGAIN <br>...IF YOU DARE.`;
  } else {
    levelTitle.innerHTML = `GAME OVER. <br>CLICK OR TAP SCREEN TO PLAY AGAIN <br>...IF YOU DARE.`;
  }
  

  frame.style.cssText = `border: ${borderWidth}px solid rgb(196,0,196); animation: blink-frame-border 547ms 6 ease-in-out; animation-delay: 828ms;`;

  center.style.cssText = `width: ${widthValN}; top: ${nAlign[5]}vh; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(144,0,144); animation: blink-center 547ms 6 ease-in-out; animation-delay: 828ms; left: 0vw;`;

  // font-size: 84px; (BELOW)
  // position: relative; top: 5.4vh; 

  // nomisText top: ${nomisWA[8]};
  nomisText.style.cssText = `font-size: ${nAlign[2]}; background: -webkit-linear-gradient(rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; z-index: 103; animation: blink-nomis 547ms 6 ease-in-out; animation-delay: 828ms;`;

  // initiated = false;



  for (i = 0; i < buttonsNomis.length; i++) {
    if(portraitN.matches) {
      buttonsNomis[i].style.cssText = `background-color: rgb(4,4,4); border-color: rgb(196,0,196); animation: blink-${buttonsNomis[i].id} 547ms 6 ease-in-out; animation-delay: 828ms;`; 
    } else {
      buttonsNomis[i].style.cssText = `background-color: rgb(4,4,4); border-color: rgb(196,0,196); animation: blink-${buttonsNomis[i].id} 547ms 6 ease-in-out; animation-delay: 828ms; width: ${nAlign[7]};`;
    }
  }



  for (i = moveArr.length - 1; i >= 0; i--) {
    moveArr.pop();
  }


  // alert('INCORRECT');


  

  for(let s = 0; s < skillButtonButtons.length; s++) {
    skillButtonButtons[s].style.cssText = 'background-color: rgb(196,0,196);';
  }

  
  window.removeEventListener('keypress', preStart);

  window.removeEventListener('click', prePreStart);




  window.addEventListener('click',pauseAudio);
  window.addEventListener('keypress',pauseAudio);
  
}



function pauseTaunts() {
  

    pauseAudio();
}



function pauseAudio() {


    lose.pause();
    lose.currentTime = 0;

    if(currTaunt) {
      currTaunt.pause();
    }


    loserHaha.pause();  

  
  
  let alNomisNew = alignNomis();

    let levelFontSz = alNomisNew[3]; 

  
  




    clearInterval(myInterval);
  clearTimeout(ltTimeout);
  clearTimeout(hahaTimeout);
  clearTimeout(textTimeout);
  clearTimeout(majorTimeout);



  setTimeout(() => {

    levelTitle.style.fontSize = `${levelFontSz}`;

    

    
    let hahaLoseStart = new Audio('sounds/loser/haha.mp3');
    hahaLoseStart.play();

    levelTitle.style.cssText = `background-color: rgb(0,176,176); color: rgb(254,254,254); font-size: ${levelFontSz}; animation: none; box-shadow: 0 0 ${borderWidth}px rgb(0,207,212);`;

    frame.style.borderColor = 'rgb(0,176,176)';

    startUpIllum();



    /*
    for(let i = 0; i < skillButtonButtons.length; i++) {
      document.getElementById(`btn-${i}`).classList.remove('skill-btn-dark');
      document.getElementById(`btn-${i}`).classList.add('skill-btn-illum');
    }*/

      //document.getElementById(`btn-0`).classList.remove('skill-btn-dark');
      //document.getElementById(`btn-0`).classList.add('skill-btn-illum');
  

    setTimeout(() => {
      


      levelTitle.style.cssText = `background-color: rgb(212,0,0); color: rgb(255,255,255); font-size: ${levelFontSz}; animation: none;`;

      frame.style.borderColor = 'rgb(14,14,14)';

      startUp();
    

      /*
      for(let i = 0; i < skillButtonButtons.length; i++) {
        document.getElementById(`btn-${i}`).classList.remove('skill-btn-illum');
      }*/

      //document.getElementById(`btn-0`).classList.remove('skill-btn-illum');
    },2227);
    
  },27);


  

  window.removeEventListener('click', pauseAudio);
  window.removeEventListener('keypress',pauseAudio);



  /*
  window.addEventListener('keypress', preStart);

  window.addEventListener('click', prePreStart);
*/

  /*
  for(let i = 0; i < 6; i++) {
    document.getElementById(`btn-${i}`).classList.add('skill-btn-dark');
  }*/

  

  
  



  
   
}





function youWin() {
  let aNom, beTimeout, earthquake;

  won = true;
  initiated = true;
  started = true;


  window.removeEventListener('keypress', preStart);

  window.removeEventListener('click', prePreStart);
  
  window.removeEventListener('click', preGetReady);

  
  backFrame.style.visibility = 'hidden';
  

  for (i = moveArr.length - 1; i >= 0; i--) {
    moveArr.pop();
  }

  beTimeout = 8484;
  aNom = alignNomis();

  // alert(`NOMIS FONT SIZE: ${aNom[2]}`);

  if(portraitN.mathches) {
    center.style.width = `${widthCalc}vw`;
  } else if(landscapeN.matches) {
    center.style.height = `${aNom[6]}vh`;
  }
  

  nomisText.style.fontSize = `${aNom[2]}`;
  // nomisText.style.top = `${aNom[8]}`;

  // return [widthCalc, calcMarginH, nomisFontSize, levelFontSize];

  clearInterval(tauntInterval);


  levelTitle.style.cssText = `background-color: rgb(196,0,196); animation: blink-end 472ms 3 ease-in-out; line-height: ${aNom[9]}; font-size: ${aNom[3]};`;

  levelTitle.textContent = `LEVEL ${levels}`;

  frame.style.cssText = `border: ${borderWidth}px solid rgb(196,0,196); animation: blink-frame-border 472ms 3 ease-in-out;`;

  // convert pre-board-destroy to 2 separate animations
  if(portraitN.matches) {
    // left: 0vw; margin-left: ${aNom[1]}vw;
    center.style.cssText = `width: ${aNom[0]}vw; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(144,0,144); animation: blink-center 472ms 3 ease-in-out; width: ${widthCalc}vw; left: unset;`;
  } else if(landscapeN.matches) {
    center.style.cssText = `width: ${aNom[0]}vw; background-color: rgb(196,0,196); border: ${borderWidth}px solid rgb(144,0,144); animation: blink-center 472ms 3 ease-in-out; height: ${aNom[6]}vh; top: ${aNom[5]}vh;`;
  }

  nomisOverlay.style.backgroundColor = 'transparent';

  // nomisText top: ${nomisWA[8]};
  nomisText.style.cssText = `font-size: ${aNom[2]}; color: rgb(0,176,176); animation: blink-nomis 472ms 3 ease-in-out;`;

  for (let i = 0; i < buttonsNomis.length; i++) {
    buttonsNomis[i].style.cssText = `width: ${aNom[7]}; animation: btn-dark 1928ms 1 ease-in-out;`;
  }

setTimeout(() => {
  if(portraitN.matches) {
    // left: 0vw; margin-left: ${aNom[1]}vw;
    center.style.cssText = `border-color: rgb(144,0,144); background-color: rgb(196,0,196); width: ${aNom[0]}vw; left: unset;`;
  } else if(landscapeN.matches) {
    center.style.cssText = `border-color: rgb(144,0,144); background-color: rgb(196,0,196); height: ${aNom[6]}vh; top: ${aNom[5]}vh;`;
  }

  

  for(let j = 0; j < buttonsNomis.length; j++) {
    buttonsNomis[j].classList.add('dark-btn');
  }


  // font-size: 84px; (BELOW)
  // position: relative; top: 5.4vh; 

  // nomisText top: ${nomisWA[8]};
  nomisText.style.cssText = `font-size: ${aNom[2]}; background: -webkit-linear-gradient(rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128), rgb(128,128,128)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; z-index: 103;`;

  levelTitle.style.cssText = `font-size: ${aNom[3]}; background-color: rgb(196,0,196); animation: none;`;

  

  setTimeout(() => {
    obstruction.play();
    levelTitle.textContent = `OBSTRUCTION DETECTED ...`;
  },416);
},1014)


  setTimeout(() => {
    earthquake = new Audio('sounds/earthquake.mp3');
    earthquake.loop = true;
    earthquake.play();

    // left: 0vw; margin-left: ${aNom[1]}vw;
    center.style.cssText = `background: url(eye.jpg); left: unset;`;

    for(let k = 0; k < buttonsNomis.length; k++) {
      buttonsNomis[k].classList.remove('dark-btn');
    }

    // once every 84ms
    frame.style.cssText = `animation: oscillate 128ms 84; animation: pre-board-des-frame 454ms 29;`;
    //center.style.cssText = `width: ${aNom[0]}vw;`;
    nomis.style.cssText = `background-color: transparent; border-color: transparent;`;
    nomisOverlay.style.cssText = `animation: nomis-overlay-winner 454ms 14;`;

    // nomisText top: ${nomisWA[8]};
    nomisText.style.cssText = `background: -webkit-linear-gradient(rgb(0,176,176), rgb(0,176,176), rgb(0,176,176), rgb(0,176,176), rgb(0,176,176), rgb(0,176,176), rgb(0,176,176)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; z-index: 103; animation: nomis-txt-conquer 454ms 14; font-size: ${aNom[2]};`;
    levelTitle.style.cssText = `font-size: ${aNom[3]}; animation: pre-board-destroy-title 454ms 29;`;

    if(portraitN.matches) {
      // left: 0vw; margin-left: ${aNom[1]}vw;
      center.style.cssText = `animation: oscillate-center 128ms 84; animation: pre-board-destroy 454ms 7; background: url(eye.jpg); width: ${aNom[0]}vw; left: unset;`;
    } else if(landscapeN.matches) {
      center.style.cssText = `animation: oscillate-center 128ms 84; animation: pre-board-destroy 454ms 7; background: url(eye.jpg); height: ${aNom[6]}vh; top: ${aNom[5]}vh;`;
    }
  }, 2417);

// 65.69047619047619
// 16.422619047619047

  setTimeout(() => {
    

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < buttonsNomis.length; j++) {
        setTimeout(() => {
          buttonsNomis[j].click();
          
          if(portraitN.matches) {
            // left: 0vw; margin-left: ${aNom[1]}vw;
            center.style.cssText = `animation: oscillate-center 128ms 66; animation: pre-board-destroy 454ms 23; background: url(eye.jpg); width: ${aNom[0]}vw; left: unset;`;
          } else if(landscapeN.matches) {
            center.style.cssText = `animation: oscillate-center 128ms 66; animation: pre-board-destroy 454ms 23; background: url(eye.jpg); height: ${aNom[6]}vh; top: ${aNom[5]}vh;`;
          }
        }, 114 * (i + 1) * (j + 1));
      }
    }

    setTimeout(() => {
      for (let i = 0; i < buttonsNomis.length; i++) {
        buttonsNomis[i].removeEventListener('click', pressButton);
      }
    }, 114*9*5+1);
  }, 4384);

  // oscillate for 4104ms


  setTimeout(() => {
    ejecting.play();
    levelTitle.textContent = `EJECTION COMMENCING ...`;
  },beTimeout - 1416);

  // to fix, remove the statement below, as well as loop statement for earthquake; change center oscillation from 128ms 84 to 84ms 84
  setTimeout(() => {
    earthquake.pause();
  },beTimeout - 16);

  setTimeout(() => {
    frame.style.animation = 'none';
  },beTimeout - 1);

  setTimeout(() => {
    noTaunt.play();

    frame.classList.add('dark-btn-alive');

    for(let l = 0; l < buttonsNomis.length; l++) {
      buttonsNomis[l].classList.add('dark-btn-alive');
    }
    
    setTimeout(() => {
      frame.classList.remove('dark-btn-alive');
      frame.classList.add('dark-btn');

      for(let l = 0; l < buttonsNomis.length; l++) {
        buttonsNomis[l].classList.remove('dark-btn-alive');
        buttonsNomis[l].classList.add('dark-btn');
      }


      if(portraitN.matches && tallAndNarrowPortrait && (window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(min-width: 300px)").matches) || (window.matchMedia("(max-height: 499px)").matches && window.matchMedia("(max-width: 399px)").matches)) {
        center.style.cssText = `width: ${aNom[0]}vw; animation: board-destroy-portrait-24-tn 4014ms 1 ease-in;`;
      } else if(portraitN.matches && tallAndNarrowPortrait) {
        center.style.cssText = `width: ${aNom[0]}vw; animation: board-destroy-portrait-tn 4014ms 1 ease-in;`;
      } else if(portraitN.matches && (window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(min-width: 300px)").matches) || (window.matchMedia("(max-height: 499px)").matches && window.matchMedia("(max-width: 399px)").matches)) {
        center.style.cssText = `width: ${aNom[0]}vw; animation: board-destroy-portrait-24 4014ms 1 ease-in;`;
      } else if(portraitN.matches) {
        center.style.cssText = `width: ${aNom[0]}vw; animation: board-destroy-portrait 4014ms 1 ease-in;`;
      } else if(landscapeN.matches && extraWideAndShort) {
        center.style.cssText = `height: ${aNom[6]}vh; top: ${aNom[5]}vh; animation: board-destroy-xws 4014ms 1 ease-in;`;
      } else if(landscapeN.matches && wideAndShort) {
        center.style.cssText = `height: ${aNom[6]}vh; top: ${aNom[5]}vh; animation: board-destroy-ws 4014ms 1 ease-in;`;
      } else if(landscapeN.matches && extraExtraWideAndShort) {
        center.style.cssText = `height: ${aNom[6]}vh; top: ${aNom[5]}vh; animation: board-destroy-xxws 4014ms 1 ease-in;`;
      } else if(landscapeN.matches && tallAndNarrow) {
        center.style.cssText = `height: ${aNom[6]}vh; top: ${aNom[5]}vh; animation: board-destroy-tn 4014ms 1 ease-in;`;
      }  else if(landscapeN.matches) {
        center.style.cssText = `height: ${aNom[6]}vh; top: ${aNom[5]}vh; animation: board-destroy 4014ms 1 ease-in;`;
      }
      
      const screaming = new Audio('sounds/screaming.mp3');
      screaming.play();
      nomis.style.cssText = `visibility: hidden;`;
      nomisText.style.cssText = `visibility: hidden;`;
      nomisOverlay.style.cssText = `visibility: hidden;`;
    },1014);
  }, beTimeout);


  setTimeout(() => {
    const explosion = new Audio('sounds/explosion.mp3');
    explosion.play();
    shadowOverlay.style.cssText = `animation: explosion-fade-in 1428ms 1 ease-in-out;`;

    setTimeout(() => {
      audio1 = new Audio('sounds/championscut.mp3');
      audio1.loop = true;

      /*const obstruction = new Audio('sounds/winner/obstruction.mp3');
const ejecting = new Audio('sounds/winner/ejecting-alt.mp3');
const congratulations = new Audio('sounds/winner/congratulations.mp3');
const thanks = new Audio('sounds/winner/thanks.mp3');
const noMore = new Audio('sounds/winner/no-more.mp3');*/



      setTimeout(() => {
        congratulations.play();

        setTimeout(() => {
          thanks.play();

          setTimeout(() => {
            noMore.play();

            setTimeout(() => {
              peace.play();
            },1416);
          },2716);
        },2716);
      },1216);

      audio1.play();
      

      // audio1.play();

      let alNomis = alignNomis();

      levelTitle.style.fontSize = `${alNomis[3]}`;

      levelTitle.style.cssText = 'white-space: normal;';
      
      if(portraitN.matches && window.matchMedia("(max-width: 299px)").matches) {
        levelTitle.innerHTML = `CONGRATULATIONS :)`;
      } else {
        levelTitle.innerHTML = `CONGRATULATIONS, YOU WIN! THANKS TO YOU, THE EVIL NOMIS IS NO MORE. PEACE HAS NOW BEEN RESTORED. :)`;
      }
      
      
      /*nomis.style.cssText = `background: none;`;

      nomis.style.cssText = `background: -webkit-linear-gradient(left,white,white,white,white,white,white); -webkit-background-clip: text; -webkit-text-fill-color: linear-gradient(to bottom right, rgb(212,0,0), rgb(255, 128,0), rgb(255,255,0), rgb(0,128,0), rgb(0,0,212), rgb(128,0,204), rgb(196,0,196)); opacity: 1;`;

      nomisText.style.cssText = `opacity: 1;`;*/

      for (let i = 0; i < buttonsNomis.length; i++) {
        buttonsNomis[i].style.cssText = `animation: winner 14000ms infinite ease-in-out; opacity: 0.54; width: ${aNom[7]};`;
      }

      // line-height: 1.4
      // font-size: 0.5em
      if(portraitN.matches) {
        levelTitle.style.cssText = `animation: winner 14000ms infinite ease-in-out; font-size: ${alNomis[12]}; line-height: ${alNomis[9]}; white-space: normal;`;
      } else if(landscapeN.matches) {
        levelTitle.style.cssText = `animation: winner 14000ms infinite ease-in-out; font-size: ${alNomis[12]}; line-height: ${alNomis[9]}; white-space: normal;`;
      }

      if(portraitN.matches && aNom[13]) {
        //  left: 0vw; margin: 26.84vh ${aNom[1]}vw;
        center.style.cssText = `width: ${aNom[0]}vw; animation: winner-frame 14000ms infinite ease-in-out; background-color: rgb(234,234,234); opacity: 0.72; left: unset; margin-top: ${aNom[13]};`;
      } else if(portraitN.matches) {
        //  left: 0vw; margin: 26.84vh ${aNom[1]}vw;
        center.style.cssText = `width: ${aNom[0]}vw; animation: winner-frame 14000ms infinite ease-in-out; background-color: rgb(234,234,234); opacity: 0.72; left: unset; margin-top: 26.84vh;`;
      } else if(landscapeN.matches) {
        center.style.cssText = `height: ${aNom[6]}vh; top: ${aNom[5]}vh; animation: winner-frame 14000ms infinite ease-in-out; background-color: rgb(234,234,234); opacity: 0.72;`;
      }
      

      // center.style.cssText = `animation: winner 6140ms infinite ease-in-out;`;

      frame.style.cssText = `animation: winner-frame 14000ms infinite ease-in-out; background-color: rgb(234,234,234); opacity: 0.54;`;

      innerFrame.style.cssText = `background-color: rgb(192,192,192);`;

      
    }, 1514)
  }, beTimeout + 3642);
  /*
    audio = new Audio('sounds/championscut.mp3');
    audio.loop = true;

    audio.play();

    levelTitle.innerHTML = `CONGRATULATIONS :)`;

    nomis.style.cssText = `background: none;`;

    nomis.style.cssText = `background: -webkit-linear-gradient(left,white,white,white,white,white,white); -webkit-background-clip: text; -webkit-text-fill-color: linear-gradient(to bottom right, rgb(212,0,0), rgb(255, 128,0), rgb(255,255,0), rgb(0,128,0), rgb(0,0,212), rgb(128,0,204), rgb(196,0,196)); opacity: 1;`;

    nomisText.style.cssText = `opacity: 1;`;

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].style.cssText = `animation: winner 14000ms infinite ease-in-out; opacity: 0.54;`;
    }

    levelTitle.style.cssText = `animation: winner 14000ms infinite ease-in-out;`;

    center.style.cssText = `animation: winner-frame 14000ms infinite ease-in-out; background-color: rgb(234,234,234); opacity: 0.72;`;

    // center.style.cssText = `animation: winner 6140ms infinite ease-in-out;`;

    frame.style.cssText = `animation: winner-frame 14000ms infinite ease-in-out; background-color: rgb(234,234,234); opacity: 0.54;`;
.
    innerFrame.style.cssText = `background-color: rgb(192,192,192);`;
    */

}





//////////////////////// FIRST FIX ISSUE WITH BUTTON WIDTH ON PRE-BOARD DESTROY LANDSCAPE!!!!!!!!!!!!!!!!!!!!!!!







function alignNomis() {
  let windowHeight, windowWidth, widthCalc, heightCalc, calcMarginH, calcMarginV, nomisFontSize, levelFontSize, levelChoiceFontSize, btnWidth, winLevelLineHeight, gameOverFontSize, portraitMarginV;

  let maxHeight225, maxHeight250, maxHeight275, maxHeight299, maxHeight325, maxHeight350, maxHeight375, maxHeight399, maxHeight425, maxHeight450, maxHeight475, maxHeight499, maxHeight525, maxHeight550, maxHeight575, maxHeight599, maxHeight625, maxHeight650, maxHeight675, maxHeight699, maxHeight725, maxHeight750, maxHeight775, maxHeight799, maxHeight825, maxHeight850, maxHeight875, maxHeight899, maxHeight925, maxHeight950, maxHeight975, maxHeight999, maxHeight1025, maxHeight1050, maxHeight1075, maxHeight1099, maxHeight1125, maxHeight1150, maxHeight1175, maxHeight1199, maxHeight1225, maxHeight1250, maxHeight1275, maxHeight1299, maxHeight1325, maxHeight1350, maxHeight1375, maxHeight1399, maxHeight1425, maxHeight1450, maxHeight1475, maxHeight1499, maxHeight1525, maxHeight1550, maxHeight1575, maxHeight1599, maxHeight1625, maxHeight1650, maxHeight1675, maxHeight1699, maxHeight1725, maxHeight1750, maxHeight1775, maxHeight1799, maxHeight1825, maxHeight1850, maxHeight1875, maxHeight1899, maxHeight1925, maxHeight1950, maxHeight1975, maxHeight1999, maxHeight2025, maxHeight2050, maxHeight2075, maxHeight2099, maxHeight2125, maxHeight2150, maxHeight2175, maxHeight2199;

  windowHeight = window.innerHeight;
    
  windowWidth = window.innerWidth;

   if(landscapeN.matches) {
     tallAndNarrowPortrait = false;
     
    if(windowHeight <= 399 && windowWidth - windowHeight > 400) {
      extraWideAndShort = true;
    } else if(windowHeight <= 399 && windowWidth - windowHeight >= 225) {
      wideAndShort = true;
      extraWideAndShort = false;
      extraExtraWideAndShort = false;
    } else if(windowWidth - windowHeight >= 600) {
      wideAndShort = false;
      extraWideAndShort = false;
      extraExtraWideAndShort = true;
    } else if(windowWidth - windowHeight < 200) {
      wideAndShort = false;
      extraWideAndShort = false;
      extraExtraWideAndShort = false;
      tallAndNarrow = true;
    } else {
      wideAndShort = false;
      extraWideAndShort = false;
      extraExtraWideAndShort = false;
      tallAndNarrow = false;
    }
   } else if(portraitN.matches) {
    wideAndShort = false;
    extraWideAndShort = false;
    extraExtraWideAndShort = false;
    tallAndNarrow = false;

     if(windowHeight - windowWidth >= 400) {
       tallAndNarrowPortrait = true;
     } else {
       tallAndNarrowPortrait = false;
     }
   }

      maxHeight225 = window.matchMedia("(max-height: 225px)");
      maxHeight250 = window.matchMedia("(max-height: 250px)");
      maxHeight275 = window.matchMedia("(max-height: 275px)");
      maxHeight299 = window.matchMedia("(max-height: 299px)");
      maxHeight325 = window.matchMedia("(max-height: 325px)");
      maxHeight350 = window.matchMedia("(max-height: 350px)");
      maxHeight375 = window.matchMedia("(max-height: 375px)");
      maxHeight399 = window.matchMedia("(max-height: 399px)");
      maxHeight425 = window.matchMedia("(max-height: 425px)");
      maxHeight450 = window.matchMedia("(max-height: 450px)");
      maxHeight475 = window.matchMedia("(max-height: 475px)");
      maxHeight499 = window.matchMedia("(max-height: 499px)");
      maxHeight525 = window.matchMedia("(max-height: 525px)");
      maxHeight550 = window.matchMedia("(max-height: 550px)");
      maxHeight575 = window.matchMedia("(max-height: 575px)");
      maxHeight599 = window.matchMedia("(max-height: 599px)");
      maxHeight625 = window.matchMedia("(max-height: 625px)");
      maxHeight650 = window.matchMedia("(max-height: 650px)");
      maxHeight675 = window.matchMedia("(max-height: 675px)");
      maxHeight699 = window.matchMedia("(max-height: 699px)");
      maxHeight725 = window.matchMedia("(max-height: 725px)");
      maxHeight750 = window.matchMedia("(max-height: 750px)");
      maxHeight775 = window.matchMedia("(max-height: 775px)");
      maxHeight799 = window.matchMedia("(max-height: 799px)");
      maxHeight825 = window.matchMedia("(max-height: 825px)");
      maxHeight850 = window.matchMedia("(max-height: 850px)");
      maxHeight875 = window.matchMedia("(max-height: 875px)");
      maxHeight899 = window.matchMedia("(max-height: 899px)");
      maxHeight925 = window.matchMedia("(max-height: 925px)");
      maxHeight950 = window.matchMedia("(max-height: 950px)");
      maxHeight975 = window.matchMedia("(max-height: 975px)");
      maxHeight999 = window.matchMedia("(max-height: 999px)");
      maxHeight1025 = window.matchMedia("(max-height: 1025px)");
      maxHeight1050 = window.matchMedia("(max-height: 1050px)");
      maxHeight1075 = window.matchMedia("(max-height: 1075px)");
      maxHeight1099 = window.matchMedia("(max-height: 1099px)");
      maxHeight1125 = window.matchMedia("(max-height: 1125px)");
      maxHeight1150 = window.matchMedia("(max-height: 1150px)");
      maxHeight1175 = window.matchMedia("(max-height: 1175px)");
      maxHeight1199 = window.matchMedia("(max-height: 1199px)");
      maxHeight1225 = window.matchMedia("(max-height: 1225px)");
      maxHeight1250 = window.matchMedia("(max-height: 1250px)");
      maxHeight1275 = window.matchMedia("(max-height: 1275px)");
      maxHeight1299 = window.matchMedia("(max-height: 1299px)");
      maxHeight1325 = window.matchMedia("(max-height: 1325px)");
      maxHeight1350 = window.matchMedia("(max-height: 1350px)");
      maxHeight1375 = window.matchMedia("(max-height: 1375px)");
      maxHeight1399 = window.matchMedia("(max-height: 1399px)");
      maxHeight1425 = window.matchMedia("(max-height: 1425px)");
      maxHeight1450 = window.matchMedia("(max-height: 1450px)");
      maxHeight1475 = window.matchMedia("(max-height: 1475px)");
      maxHeight1499 = window.matchMedia("(max-height: 1499px)");
      maxHeight1525 = window.matchMedia("(max-height: 1525px)");
      maxHeight1550 = window.matchMedia("(max-height: 1550px)");
      maxHeight1575 = window.matchMedia("(max-height: 1575px)");
      maxHeight1599 = window.matchMedia("(max-height: 1599px)");
      maxHeight1625 = window.matchMedia("(max-height: 1625px)");
      maxHeight1650 = window.matchMedia("(max-height: 1650px)");
      maxHeight1675 = window.matchMedia("(max-height: 1675px)");
      maxHeight1699 = window.matchMedia("(max-height: 1699px)");
      maxHeight1725 = window.matchMedia("(max-height: 1725px)");
      maxHeight1750 = window.matchMedia("(max-height: 1750px)");
      maxHeight1775 = window.matchMedia("(max-height: 1775px)");
      maxHeight1799 = window.matchMedia("(max-height: 1799px)");
      maxHeight1825 = window.matchMedia("(max-height: 1825px)");
      maxHeight1850 = window.matchMedia("(max-height: 1850px)");
      maxHeight1875 = window.matchMedia("(max-height: 1875px)");
      maxHeight1899 = window.matchMedia("(max-height: 1899px)");
      maxHeight1925 = window.matchMedia("(max-height: 1925px)");
      maxHeight1950 = window.matchMedia("(max-height: 1950px)");
      maxHeight1975 = window.matchMedia("(max-height: 1975px)");
      maxHeight1999 = window.matchMedia("(max-height: 1999px)");
      maxHeight2025 = window.matchMedia("(max-height: 2025px)");
      maxHeight2050 = window.matchMedia("(max-height: 2050px)");
      maxHeight2075 = window.matchMedia("(max-height: 2075px)");
      maxHeight2099 = window.matchMedia("(max-height: 2099px)");
      maxHeight2125 = window.matchMedia("(max-height: 2125px)");
      maxHeight2150 = window.matchMedia("(max-height: 2150px)");
      maxHeight2175 = window.matchMedia("(max-height: 2175px)");
      maxHeight2199 = window.matchMedia("(max-height: 2199px)");

    if(window.matchMedia("(min-width: 1100px)").matches && landscapeN.matches) {
    borderWidth = '16';
    } else if(window.matchMedia("(min-width: 800px)").matches) {
    borderWidth = '14';
    } else if((window.matchMedia("(max-width: 499px)").matches) || (portraitN.matches && window.matchMedia("(max-width: 399px)").matches && window.matchMedia("(max-height: 499px)").matches)) {
      // landscapeN.matches && 
    
      borderWidth = '7';
  } else {
    borderWidth = '10';
  }

  shadowWidth = borderWidth * 2.20;
  shadowWidthInGame = borderWidth / 2;

  center.style.cssText = `border: ${borderWidth}px solid rgb(14,14,14);`;

    if(portraitN.matches) {
      if(topSection) {
        document.querySelector('.top-section').style.cssText = `width: fit-content; background-color: transparent;`;
      }

    
      if(portraitN.matches) {
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-width: 299px)").matches) {
          widthCalc = ((windowHeight * 0.21) / windowWidth) * 100;
        } else if((window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(min-width: 300px)").matches) || (window.matchMedia("(max-height: 499px)").matches)) {
          widthCalc = ((windowHeight * 0.24) / windowWidth) * 100;
        } else {
          widthCalc = ((windowHeight * 0.22) / windowWidth) * 100;
        }
      }
      
    
      calcMarginH = ((84 - widthCalc) / 2);

      if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(min-width: 300px)").matches) {
       // calcMarginH /= 1.05;
      }

      
    
      if(window.matchMedia("(max-height: 499px)").matches) {
        calcMarginV = '25.5vh';
      } else {
        calcMarginV = '26.5vh';
      }
    
    
      // console.log(`alert: ${calcMarginH}`);
  
  
      if(window.matchMedia("(min-width: 1200px)").matches) {
        
        if(window.matchMedia("(max-width: 1225px)").matches) {
          calcMarginH += 3.07;
        } else if(window.matchMedia("(max-width: 1250px)").matches) {
          calcMarginH += 3.07;
        } else if(window.matchMedia("(max-width: 1275px)").matches) {
          calcMarginH += 3.2;
        } else {
          calcMarginH += 3.2;
        }
  
        /*
        for(let skillButtonButton of skillButtonButtons) {
          if(window.matchMedia("(min-width: 1300px)").matches) {
            skillButtonButton.style.fontSize = '0.692em';
  
            levelChoiceFontSize = '0.692em';
          } else {
            skillButtonButton.style.fontSize = '0.692em';
  
            levelChoiceFontSize = '0.692em';
          }
        }
        */

        gameOverLineHeight = '2.64';

        gameOverFontSize = '1.16em';

        winLevelFontSize = '1.16em';

        winLevelLineHeight = '2.5';
  

        nomisText.style.fontSize = '6.17em';
        levelTitle.style.fontSize = '1.84em';
  
        levelFontSize = '1.84em';
  
        nomisFontSize = '6.17em';
        
        if(window.matchMedia("(min-width: 1044px)").matches) {
  
        } else if(window.matchMedia("(min-width: 1019px)").matches) {
  
        } else {
  
        }



        if(window.matchMedia("(max-height: 1299px)").matches) {
          nomisText.style.fontSize = '6.14em';

          nomisFontSize = '6.14em';
        } else if(window.matchMedia("(max-height: 1399px)").matches) {
          nomisText.style.fontSize = '6.6em';

          nomisFontSize = '6.6em';
        } else if(window.matchMedia("(max-height: 1499px)").matches) {
          nomisText.style.fontSize = '7.16em';

          nomisFontSize = '7.16em';
        } else if(window.matchMedia("(max-height: 1599px)").matches) {
          nomisText.style.fontSize = '7.67em';

          nomisFontSize = '7.67em';
        } else if(window.matchMedia("(max-height: 1699px)").matches) {
          nomisText.style.fontSize = '8.16em';

          nomisFontSize = '8.16em';
        } else {
          nomisText.style.fontSize = '8.69em';

          nomisFontSize = '8.69em';
        }

        
      } else if(window.matchMedia("(min-width: 1100px)").matches) {
      
        if(window.matchMedia("(max-width: 1125px)").matches) {
          calcMarginH += 2.80;
        } else if(window.matchMedia("(max-width: 1150px)").matches) {
          calcMarginH += 2.80;
        } else if(window.matchMedia("(max-width: 1175px)").matches) {
          calcMarginH += 2.88;
        } else {
          calcMarginH += 2.88;
        }
  
        for(let skillButtonButton of skillButtonButtons) {
          skillButtonButton.style.fontSize = '0.467em';
  
          levelChoiceFontSize = '0.467em';
        }



        gameOverLineHeight = '2.64';

        gameOverFontSize = '1.16em';

        winLevelFontSize = '1.16em';

        winLevelLineHeight = '2.5';

        
  
        nomisText.style.fontSize = '5.84em';
        levelTitle.style.fontSize = '1.44em';
  
        levelFontSize = '1.44em';
  
        nomisFontSize = '5.84em';
        
        if(window.matchMedia("(min-width: 1044px)").matches) {
  
        } else if(window.matchMedia("(min-width: 1019px)").matches) {
  
        } else {
  
        }



        if(window.matchMedia("(max-height: 1199px)").matches) {
          nomisText.style.fontSize = '5.7em';

          nomisFontSize = '5.7em';
        } else if(window.matchMedia("(max-height: 1299px)").matches) {
          nomisText.style.fontSize = '6.16em';

          nomisFontSize = '6.16em';
        } else if(window.matchMedia("(max-height: 1399px)").matches) {
          nomisText.style.fontSize = '6.66em';

          nomisFontSize = '6.66em';
        } else if(window.matchMedia("(max-height: 1499px)").matches) {
          nomisText.style.fontSize = '7.14em';

          nomisFontSize = '7.14em';
        } else if(window.matchMedia("(max-height: 1599px)").matches) {
          nomisText.style.fontSize = '7.72em';

          nomisFontSize = '7.72em';
        } else {
          nomisText.style.fontSize = '8.24em';

          nomisFontSize = '8.24em';
        }


      } else if(window.matchMedia("(min-width: 1000px)").matches) {
        
        if(window.matchMedia("(max-width: 1025px)").matches) {
          calcMarginH += 2.7;
        } else if(window.matchMedia("(max-width: 1050px)").matches) {
          calcMarginH += 2.7;
        } else if(window.matchMedia("(max-width: 1075px)").matches) {
          calcMarginH += 2.7;
        } else {
          calcMarginH += 2.7;
        }
  
        for(let skillButtonButton of skillButtonButtons) {
          skillButtonButton.style.fontSize = '0.467em';
  
          levelChoiceFontSize = '0.467em';
        }



        levelFontSize = '1.17em';
  
        nomisFontSize = '5.84em';

        gameOverLineHeight = '2.64';

        gameOverFontSize = '1em';

        winLevelFontSize = '1em';

        winLevelLineHeight = '2.5';


  
        nomisText.style.fontSize = '5.84em';
        levelTitle.style.fontSize = '1.44em';
  
        levelFontSize = '1.44em';
  
        nomisFontSize = '5.84em';
        
        if(window.matchMedia("(min-width: 1044px)").matches) {
  
        } else if(window.matchMedia("(min-width: 1019px)").matches) {
  
        } else {
  
        }



        if(window.matchMedia("(max-height: 1099px)").matches) {
          nomisText.style.fontSize = '5.26em';

          nomisFontSize = '5.26em';
        } else if(window.matchMedia("(max-height: 1199px)").matches) {
          nomisText.style.fontSize = '5.72em';

          nomisFontSize = '5.72em';
        } else if(window.matchMedia("(max-height: 1299px)").matches) {
          nomisText.style.fontSize = '6.22em';

          nomisFontSize = '6.22em';
        } else if(window.matchMedia("(max-height: 1399px)").matches) {
          nomisText.style.fontSize = '6.7em';

          nomisFontSize = '6.7em';
        } else if(window.matchMedia("(max-height: 1499px)").matches) {
          nomisText.style.fontSize = '7.28em';

          nomisFontSize = '7.28em';
        } else {
          nomisText.style.fontSize = '7.8em';

          nomisFontSize = '7.8em';
        }


      } else if(window.matchMedia("(min-width: 900px)").matches) {
        
        if(window.matchMedia("(max-width: 925px)").matches) {
          calcMarginH += 2.6;
        } else if(window.matchMedia("(max-width: 950px)").matches) {
          calcMarginH += 2.6;
        } else if(window.matchMedia("(max-width: 975px)").matches) {
          calcMarginH += 2.6;
        } else {
          calcMarginH += 2.6;
        }

        for(let skillButtonButton of skillButtonButtons) {
          skillButtonButton.style.fontSize = '0.417em';
        }
  
        levelChoiceFontSize = '0.417em';
  
        nomisText.style.fontSize = '5.84em';
        levelTitle.style.fontSize = '1.17em';
  
        levelFontSize = '1.17em';
  
        nomisFontSize = '5.84em';

        gameOverLineHeight = '2.5';

        gameOverFontSize = '0.84em';

        winLevelFontSize = '0.84em';

        winLevelLineHeight = '2.5';
        
        if(window.matchMedia("(min-width: 976px)").matches) {
  
        } else if(window.matchMedia("(min-width: 951px)").matches) {
  
        } else if(window.matchMedia("(min-width: 926px)").matches) {
  
        } else {
  
  
          
        }



        if(window.matchMedia("(max-height: 999px)").matches) {
          nomisText.style.fontSize = '4.7em';

          nomisFontSize = '4.7em';
        } else if(window.matchMedia("(max-height: 1099px)").matches) {
          nomisText.style.fontSize = '5.23em';

          nomisFontSize = '5.23em';
        } else if(window.matchMedia("(max-height: 1199px)").matches) {
          nomisText.style.fontSize = '5.66em';

          nomisFontSize = '5.66em';
        } else if(window.matchMedia("(max-height: 1299px)").matches) {
          nomisText.style.fontSize = '6.14em';

          nomisFontSize = '6.14em';
        } else if(window.matchMedia("(max-height: 1399px)").matches) {
          nomisText.style.fontSize = '6.79em';

          nomisFontSize = '6.79em';
        } else {
          nomisText.style.fontSize = '7.24em';

          nomisFontSize = '7.24em';
        }

      } else if(window.matchMedia("(min-width: 800px)").matches) {
        
        if(window.matchMedia("(max-width: 825px)").matches) {
          calcMarginH += 2.6;
        } else if(window.matchMedia("(max-width: 850px)").matches) {
          calcMarginH += 2.6;
        } else if(window.matchMedia("(max-width: 875px)").matches) {
          calcMarginH += 2.6;
        } else {
          calcMarginH += 2.6;
        }
  
        for(let skillButtonButton of skillButtonButtons) {
          skillButtonButton.style.fontSize = '0.367em';
        }
  
        levelChoiceFontSize = '0.367em';
  
        nomisText.style.fontSize = '5.84em';
        levelTitle.style.fontSize = '1.17em';
  
        levelFontSize = '1.17em';
  
        nomisFontSize = '5.84em';

        gameOverLineHeight = '2.5';

        gameOverFontSize = '0.84em';

        winLevelFontSize = '0.84em';

        winLevelLineHeight = '2.5';



        if(window.matchMedia("(max-height: 899px)").matches) {
          nomisText.style.fontSize = '4.16em';

          nomisFontSize = '4.16em';
        } else if(window.matchMedia("(max-height: 999px)").matches) {
          nomisText.style.fontSize = '4.69em';

          nomisFontSize = '4.69em';
        } else if(window.matchMedia("(max-height: 1099px)").matches) {
          nomisText.style.fontSize = '5.12em';

          nomisFontSize = '5.12em';
        } else if(window.matchMedia("(max-height: 1199px)").matches) {
          nomisText.style.fontSize = '5.6em';

          nomisFontSize = '5.6em';
        } else if(window.matchMedia("(max-height: 1299px)").matches) {
          nomisText.style.fontSize = '6.25em';

          nomisFontSize = '6.25em';
        } else {
          nomisText.style.fontSize = '6.7em';

          nomisFontSize = '6.7em';
        }


      } else if(window.matchMedia("(min-width: 700px)").matches) {

        if(window.matchMedia("(max-width: 725px)").matches) {
          calcMarginH += 3;
        } else if(window.matchMedia("(max-width: 750px)").matches) {
          calcMarginH += 3;
        } else if(window.matchMedia("(max-width: 775px)").matches) {
          calcMarginH += 2.75;
        } else {
          calcMarginH += 2.75;
        }
  
        for(let skillButtonButton of skillButtonButtons) {
          skillButtonButton.style.fontSize = '0.367em';
        }
  
        levelChoiceFontSize = '0.367em';
  
        nomisText.style.fontSize = '4.84em';
        levelTitle.style.fontSize = '1em';
  
        levelFontSize = '1em';
  
        nomisFontSize = '4.84em';

        gameOverLineHeight = '2.5';

        gameOverFontSize = '0.63em';

        winLevelFontSize = '0.63em';

        winLevelLineHeight = '2.5';

        if(window.matchMedia("(max-height: 799px)").matches) {
          nomisText.style.fontSize = '3.67em';

          nomisFontSize = '3.67em';
        } else if(window.matchMedia("(max-height: 899px)").matches) {
          nomisText.style.fontSize = '4.19em';

          nomisFontSize = '4.19em';
        } else if(window.matchMedia("(max-height: 999px)").matches) {
          nomisText.style.fontSize = '4.63em';

          nomisFontSize = '4.63em';
        } else if(window.matchMedia("(max-height: 1099px)").matches) {
          nomisText.style.fontSize = '5.08em';

          nomisFontSize = '5.08em';
        } else if(window.matchMedia("(max-height: 1199px)").matches) {
          nomisText.style.fontSize = '5.76em';

          nomisFontSize = '5.76em';
        } else {
          nomisText.style.fontSize = '6.21em';

          nomisFontSize = '6.21em';
        }
      } else if(window.matchMedia("(min-width: 600px)").matches) {
        
        if(window.matchMedia("(max-width: 625px)").matches) {
          calcMarginH += 2.37;
        } else if(window.matchMedia("(max-width: 650px)").matches) {
          calcMarginH += 2.32;
        } else if(window.matchMedia("(max-width: 675px)").matches) {
          calcMarginH += 2.32;
        } else {
          calcMarginH += 2.32;
        }

        nomisText.style.fontSize = '3.84em';
        levelTitle.style.fontSize = '1em';
  
        levelFontSize = '1em';
  
        nomisFontSize = '3.84em';
  
        levelChoiceFontSize = '0.317em';

        gameOverLineHeight = '2.5';

        gameOverFontSize = '0.63em';

        winLevelFontSize = '0.51em';

        winLevelLineHeight = '2.5';

        if(window.matchMedia("(max-height: 699px)").matches) {
          nomisText.style.fontSize = '3.14em';

          nomisFontSize = '3.14em';
        } else if(window.matchMedia("(max-height: 799px)").matches) {
          nomisText.style.fontSize = '3.51em';

          nomisFontSize = '3.51em';
        } else if(window.matchMedia("(max-height: 899px)").matches) {
          nomisText.style.fontSize = '4.04em';

          nomisFontSize = '4.04em';
        } else if(window.matchMedia("(max-height: 999px)").matches) {
          nomisText.style.fontSize = '4.48em';

          nomisFontSize = '4.48em';
        } else if(window.matchMedia("(max-height: 1099px)").matches) {
          nomisText.style.fontSize = '4.92em';

          nomisFontSize = '4.92em';
        } else {
          nomisText.style.fontSize = '5.6em';

          nomisFontSize = '5.6em';
        }
      } else if(window.matchMedia("(max-width: 599px)").matches && window.matchMedia("(min-width: 500px)").matches) {
        if(window.matchMedia("(max-width: 525px)").matches) {
          calcMarginH += 2.67;
        } else if(window.matchMedia("(max-width: 550px)").matches) {
          calcMarginH += 2.58;
        } else if(window.matchMedia("(max-width: 575px)").matches) {
          calcMarginH += 2.42;
        } else {
          calcMarginH += 2.42;
        }
  
        nomisText.style.fontSize = '3.84em';
        levelTitle.style.fontSize = '1em';
  
        levelFontSize = '1em';
  
        nomisFontSize = '3.84em';
  
        levelChoiceFontSize = '0.317em';

        gameOverLineHeight = '2.5';

        gameOverFontSize = '0.63em';

        winLevelFontSize = '0.51em';

        winLevelLineHeight = '2.5';

        if(window.matchMedia("(max-height: 599px)").matches) {
          nomisText.style.fontSize = '2.84em';

          nomisFontSize = '2.84em';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          nomisText.style.fontSize = '3.07em';

          nomisFontSize = '3.07em';
        } else if(window.matchMedia("(max-height: 799px)").matches) {
          nomisText.style.fontSize = '3.6em';

          nomisFontSize = '3.6em';
        } else if(window.matchMedia("(max-height: 899px)").matches) {
          nomisText.style.fontSize = '4.04em';

          nomisFontSize = '4.04em';
        } else if(window.matchMedia("(max-height: 999px)").matches) {
          nomisText.style.fontSize = '4.54em';

          nomisFontSize = '4.54em';
        } else {
          nomisText.style.fontSize = '5.14em';

          nomisFontSize = '5.14em';
        }
      }  else if(window.matchMedia("(max-width: 499px)").matches && window.matchMedia("(min-width: 400px)").matches) {
        if(window.matchMedia("(max-width: 425px)").matches) {
          calcMarginH += 2.45;
        } else {
          calcMarginH += 2.45;
        }
  
        nomisText.style.fontSize = '3.27em';
  
        nomisFontSize = '3.27em';
  
        levelTitle.style.fontSize = '0.75em';
  
        levelFontSize = '0.75em';
  
        levelChoiceFontSize = '0.317em';


        if(window.matchMedia("(min-height: 500px)").matches) {
          winLevelLineHeight = '3';
        } else {
          winLevelLineHeight = '2.5';
        }


        winLevelFontSize = '0.4em';
        

        gameOverFontSize = '0.51em';
        gameOverLineHeight = '2.5em';


        /*if(window.matchMedia("(max-height: 499px)").matches) {
          nomisText.style.fontSize = '2.14em';

          nomisFontSize = '2.14em';
        } else*/ if(window.matchMedia("(max-height: 599px)").matches) {
          nomisText.style.fontSize = '2.62em';

          nomisFontSize = '2.62em';
          
          // nomisText.style.fontSize = '2.45em';

          // nomisFontSize = '2.45em';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          nomisText.style.fontSize = '2.98em';

          nomisFontSize = '2.98em';
        } else if(window.matchMedia("(max-height: 799px)").matches) {
          nomisText.style.fontSize = '3.51em';

          nomisFontSize = '3.51em';
        } else if(window.matchMedia("(max-height: 899px)").matches) {
          nomisText.style.fontSize = '4.2em';

          nomisFontSize = '4.2em';
        } else {
          nomisText.style.fontSize = '4.7em';

          nomisFontSize = '4.7em';
        }
      } else if(window.matchMedia("(max-width: 399px)").matches && window.matchMedia("(min-width: 351px)").matches) {
        calcMarginH += 2.10;
  
        nomisText.style.fontSize = '2.75em';
  
        nomisFontSize = '2.75em';
  
        levelTitle.style.fontSize = '0.75em';
  
        levelFontSize = '0.75em';

        winLevelFontSize = '0.4em';
        winLevelLineHeight = '2.5';

        if(window.matchMedia("(min-height: 600px)") && window.matchMedia("(min-width: 376px)").matches) {
          calcMarginH += 0.25;

          gameOverFontSize = '0.51em';
        }else if(window.matchMedia("(min-height: 600px)").matches) {
          gameOverFontSize = '0.51em';
        }else if(window.matchMedia("(min-width: 376px)").matches) {
          gameOverFontSize = '0.48em';

          calcMarginH += 0.25;
        } else {
          gameOverFontSize = '0.44em';
        }
        
  
        levelChoiceFontSize = '0.317em';

        if(window.matchMedia("(max-height: 399px)").matches) {
          nomisText.style.fontSize = '1.84em';

          nomisFontSize = '1.84em';
        } else if(window.matchMedia("(max-height: 499px)").matches) {
          nomisText.style.fontSize = '2em';

          nomisFontSize = '2em';
        } else if(window.matchMedia("(max-height: 599px)").matches) {
          nomisText.style.fontSize = '2.45em';

          nomisFontSize = '2.45em';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          nomisText.style.fontSize = '2.98em';

          nomisFontSize = '2.98em';
        } else if(window.matchMedia("(max-height: 799px)").matches) {
          nomisText.style.fontSize = '3.51em';

          nomisFontSize = '3.51em';
        } else {
          nomisText.style.fontSize = '4.2em';

          nomisFontSize = '4.2em';
        }
      } else if(window.matchMedia("(max-width: 350px)").matches && window.matchMedia("(min-width: 300px)").matches) {
        if(window.matchMedia("(max-width: 325px)").matches) {
          calcMarginH += 2.75;
        } else {
          calcMarginH += 2.25;
        }
  
        nomisText.style.fontSize = '2.25em';
  
        nomisFontSize = '2.25em';
  
        levelTitle.style.fontSize = '0.75em';
  
        levelFontSize = '0.75em';
  
        levelChoiceFontSize = '0.317em';


        winLevelFontSize = '0.31em';
        winLevelLineHeight = '2';

        gameOverFontSize = '0.42em';

        


        if(window.matchMedia("(max-height: 399px)").matches) {
          nomisText.style.fontSize = '1.84em';

          nomisFontSize = '1.84em';
        } else if(window.matchMedia("(max-height: 499px)").matches) {
          nomisText.style.fontSize = '2em';

          nomisFontSize = '2em';
        } else if(window.matchMedia("(max-height: 599px)").matches) {
          nomisText.style.fontSize = '2.45em';

          nomisFontSize = '2.45em';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          nomisText.style.fontSize = '2.98em';

          nomisFontSize = '2.98em';
        } else if(window.matchMedia("(max-height: 799px)").matches) {
          nomisText.style.fontSize = '3.51em';

          nomisFontSize = '3.51em';
        } else {
          nomisText.style.fontSize = '4.2em';

          nomisFontSize = '4.2em';
        }


      } else if(window.matchMedia("(max-width: 299px)").matches) {
        
        if(window.matchMedia("(min-height: 500px)").matches) {
          if(window.matchMedia("(max-width: 225px)").matches) {
            calcMarginH -= 0.4;
          } else if(window.matchMedia("(max-width: 250px)").matches) {
            calcMarginH += 0.25;
          } else if(window.matchMedia("(max-width: 275px)").matches) {
            calcMarginH += 0.50;
          } else {
            calcMarginH += 0.70;
    
          }
            
        } else if(window.matchMedia("(min-height: 326px)").matches) {
          if(window.matchMedia("(max-width: 225px)").matches) {
            calcMarginH += 0.75;
          } else if(window.matchMedia("(max-width: 250px)").matches) {
            calcMarginH += 1.25;
          } else if(window.matchMedia("(max-width: 275px)").matches) {
            calcMarginH += 1.50;
          } else {
            calcMarginH += 1.70;
    
          }
            
        } else if(window.matchMedia("(min-height: 300px)").matches) {
          if(window.matchMedia("(max-width: 225px)").matches) {
            calcMarginH += 0.75;
          } else if(window.matchMedia("(max-width: 250px)").matches) {
            calcMarginH += 1.25;
          } else if(window.matchMedia("(max-width: 275px)").matches) {
            calcMarginH += 1.50;
          } else {
            calcMarginH += 1.70;
    
          }
        } else {
          if(window.matchMedia("(max-width: 250px)").matches) {
            calcMarginH += 0.75;
          } else {
            calcMarginH += 1.25;
          }
        }
  
        
  
        //if(window.matchMedia("(max-width: 250px)").matches) {
          let buttons = document.querySelectorAll('.btn');
  
          for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.width = '86.5%';
          }
  
          // calcMarginH -= 0.1;
          
          
  
          for(let skillButtonButton of skillButtonButtons) {
              skillButtonButton.style.fontSize = '0.27em';
  
              levelChoiceFontSize = '0.27em';
            }

            if(window.matchMedia("(max-height: 250px)").matches) {
              nomisText.style.fontSize = '1.44em';
  
              nomisFontSize = '1.44em';
            } else if(window.matchMedia("(max-height: 299px)").matches) {
              nomisText.style.fontSize = '1.72em';
  
              nomisFontSize = '1.72em';
            } else if(window.matchMedia("(max-height: 399px)").matches) {
              nomisText.style.fontSize = '1.84em';
  
              nomisFontSize = '1.77em';
            } else if(window.matchMedia("(max-height: 499px)").matches) {
              nomisText.style.fontSize = '2.24em';
  
              nomisFontSize = '2.24em';
            } else if(window.matchMedia("(max-height: 599px)").matches) {
              nomisText.style.fontSize = '2.58em';
  
              nomisFontSize = '2.58em';
            } else if(window.matchMedia("(max-height: 699px)").matches) {
              nomisText.style.fontSize = '2.96em';
  
              nomisFontSize = '2.96em';
            } else {
              nomisText.style.fontSize = '2.98em';
  
              nomisFontSize = '2.98em';
            }
            
 
          
          if(window.matchMedia("(min-width: 226px)").matches) {
            levelChoiceFontSize = '0.317em';
          }


          if(window.matchMedia("(max-width: 250px)").matches) {
            document.getElementById('level-title').style.cssText = `font-size: 0.51em;`;
  
            levelFontSize = '0.51em';

            winLevelFontSize = '0.51em';
            gameOverFontSize = '0.25em';
          } else if(window.matchMedia("(min-height: 600px)").matches) {
            if(won) {
              document.getElementById('level-title').style.cssText = `font-size: 0.62em;`;
  
              levelFontSize = '0.62em';
            } else if(initiated) {
              document.getElementById('level-title').style.cssText = `font-size: 0.72em;`;
  
              levelFontSize = '0.72em';
            } else {
              document.getElementById('level-title').style.cssText = `font-size: 0.62em;`;
  
              levelFontSize = '0.62em';
            }

            winLevelFontSize = '0.77em';
            gameOverFontSize = '0.51em';
          } else if(window.matchMedia("(min-height: 500px)").matches) {
            if(won) {
              document.getElementById('level-title').style.cssText = `font-size: 0.62em;`;
  
              levelFontSize = '0.62em';
            } else if(initiated) {
              document.getElementById('level-title').style.cssText = `font-size: 0.72em;`;
  
              levelFontSize = '0.72em';
            } else {
              document.getElementById('level-title').style.cssText = `font-size: 0.62em;`;
  
              levelFontSize = '0.62em';
            }

            winLevelFontSize = '0.77em';
            gameOverFontSize = '0.51em';
          } else if(window.matchMedia("(min-height: 400px)").matches) {
            if(won) {
              document.getElementById('level-title').style.cssText = `font-size: 0.62em;`;
  
              levelFontSize = '0.62em';
            } else if(initiated) {
              document.getElementById('level-title').style.cssText = `font-size: 0.72em;`;
  
              levelFontSize = '0.72em';
            } else {
              document.getElementById('level-title').style.cssText = `font-size: 0.62em;`;
  
              levelFontSize = '0.62em';
            }

            winLevelFontSize = '0.77em';
            gameOverFontSize = '0.51em';
          } else {
            document.getElementById('level-title').style.cssText = `font-size: 0.51em;`;
  
            levelFontSize = '0.51em';

            winLevelFontSize = '0.51em';
            gameOverFontSize = '0.25em';
          }
  
          
        /*} else {
          nomisText.style.fontSize = '1.88em';
  
          nomisFontSize = '1.88em';
  
          document.getElementById('level-title').style.cssText = `font-size: 0.6em;`;
  
        levelFontSize = '0.6em';
  
        levelChoiceFontSize = '0.317em';
        }*/
        
      } else {
        calcMarginH += 3;
        
        levelChoiceFontSize = '0.317em';
      }


      if(window.matchMedia("(min-width: 300px)").matches) {
        let btns = document.querySelectorAll('.btn');
  
          for(let i = 0; i < btns.length; i++) {
            btns[i].style.width = '92%';
          }
      }
      

/*
      if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(min-width: 300px)").matches) {
          widthCalc = ((windowHeight * 0.24) / windowWidth) * 100;

          let altWidthCalc = ((windowHeight * 0.2) / windowWidth) * 100;

          // console.log(`widthCalc: ${widthCalc}, altWidthCalc: ${altWidthCalc}`);


          

        }
*/

        if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(min-width: 300px)").matches) {
          //calcMarginH += 1;
        }



        if(maxHeight299.matches) {

          gameOverLineHeight = '2.64';

          nomisFontSize = '1.44em';
          nomisText.style.fontSize = '1.44em';
          
          if(window.matchMedia("(min-height: 276px)").matches) {
            portraitMarginV = '28.34vh';
          } else if(window.matchMedia("(min-height: 251px)").matches) {
            portraitMarginV = '27.84vh';
          } else {
            portraitMarginV = '26.84vh';
          }

          winLevelFontSize = levelFontSize;
        
        } else if(maxHeight399.matches) {

          gameOverLineHeight = '2.64';

          if(window.matchMedia("(min-height: 376px)").matches) {
            portraitMarginV = '28.12vh';
          } else if(window.matchMedia("(min-height: 351px)").matches) {
            portraitMarginV = '28.12vh';
          } else {
            portraitMarginV = '28.04vh';
          }



          if(window.matchMedia("(max-width: 299px)").matches) {
            levelTitle.style.fontSize = '0.51em';
            levelFontSize = '0.51em';
          } else if(window.matchMedia("(max-width: 350px)").matches) {
            levelTitle.style.fontSize = '0.77em';
            levelFontSize = '0.77em';
          } else if(window.matchMedia("(max-width: 399px)").matches) {
            levelTitle.style.fontSize = '0.9em';
            levelFontSize = '0.9em';
          }



          if(window.matchMedia("(max-width: 299px)").matches) {
            nomisFontSize = '1.77em';
            nomisText.style.fontSize = '1.77em';

            winLevelFontSize = levelFontSize;
          } else if(window.matchMedia("(min-width: 300px)").matches) {
            if(window.matchMedia("(max-width: 325px)").matches) {
              nomisFontSize = '1.88em';
              nomisText.style.fontSize = '1.88em';

              winLevelFontSize = '0.31em';
            } else if(window.matchMedia("(max-width: 350px)").matches) {
              nomisFontSize = '2.08em';
              nomisText.style.fontSize = '2.08em';

              winLevelFontSize = '0.4em';
            } else if(window.matchMedia("(max-width: 375px)").matches) {
              nomisFontSize = '2.28em';
              nomisText.style.fontSize = '2.28em';

              winLevelFontSize = '0.4em';
            } else {
              nomisFontSize = '2.48em';
              nomisText.style.fontSize = '2.48em';

              winLevelFontSize = '0.4em';
            }

          }

        } else if(maxHeight499.matches) {

          gameOverLineHeight = '2.64';
          winLevelLineHeight = '2.35';

          if(maxHeight425.matches){
            portraitMarginV = '28.47vh';
          } else if(maxHeight450.matches){
            portraitMarginV = '28.51vh';
          } else if(maxHeight475.matches){
            portraitMarginV = '28.6vh';
          } else {
            portraitMarginV = '29.2vh';
          }



          if(window.matchMedia("(max-width: 299px)").matches) {
            levelTitle.style.fontSize = '0.51em';
            levelFontSize = '0.51em';
          } else if(window.matchMedia("(max-width: 350px)").matches) {
            levelTitle.style.fontSize = '0.77em';
            levelFontSize = '0.77em';
          } else if(window.matchMedia("(max-width: 399px)").matches) {
            levelTitle.style.fontSize = '0.9em';
            levelFontSize = '0.9em';
          } else if(window.matchMedia("(max-width: 450px)").matches) {
            levelTitle.style.fontSize = '1.04em';
            levelFontSize = '1.04em';
          } else if(window.matchMedia("(max-width: 499px)").matches) {
            levelTitle.style.fontSize = '1.12em';
            levelFontSize = '1.12em';
          }



          if(window.matchMedia("(max-width: 299px)").matches) {
            nomisFontSize = '2.51em';
            nomisText.style.fontSize = '2.51em';

            if(window.matchMedia("(max-width: 250px)").matches) {
              gameOverFontSize = '0.36em';
            } else {
              gameOverFontSize = '0.4em';
            }
            

            winLevelFontSize = levelFontSize;

            
          } else if(window.matchMedia("(max-width: 399px)").matches) {

            gameOverFontSize = '0.48em';

            if(window.matchMedia("(max-width: 325px)").matches) {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';

              winLevelFontSize = '0.31em';
            } else if(window.matchMedia("(max-width: 350px)").matches) {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';

              winLevelFontSize = '0.31em';
            } else if(window.matchMedia("(max-width: 375px)").matches) {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';

              winLevelFontSize = '0.4em';
            } else {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';

              winLevelFontSize = '0.4em';

              if(window.matchMedia("(min-height: 476px)").matches) {
                gameOverFontSize = '0.56em';
              }
            }
          } else if(window.matchMedia("(max-width: 499px)").matches) {

            gameOverFontSize = '0.51em';
            winLevelFontSize = '0.48em';
            
            if(window.matchMedia("(max-width: 425px)").matches) {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';
            } else if(window.matchMedia("(max-width: 450px)").matches) {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';
            } else if(window.matchMedia("(max-width: 475px)").matches) {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';
            } else {
              nomisFontSize = '2.51em';
              nomisText.style.fontSize = '2.51em';
            }
          }

          

        } else if(maxHeight599.matches) {

          gameOverLineHeight = '2.64';
          winLevelLineHeight = '2.64';

          nomisFontSize = '2.72em';
          nomisText.style.fontSize = '2.72em';

          if(window.matchMedia("(max-width: 299px)").matches) {
            portraitMarginV = '27.62vh';
          } else {
            portraitMarginV = '27.56vh';
          }



          if(window.matchMedia("(max-width: 299px)").matches) {
            levelTitle.style.fontSize = '0.51em';
            levelFontSize = '0.51em';
          } else if(window.matchMedia("(max-width: 350px)").matches) {
            levelTitle.style.fontSize = '0.77em';
            levelFontSize = '0.77em';
          } else if(window.matchMedia("(max-width: 399px)").matches) {
            levelTitle.style.fontSize = '0.9em';
            levelFontSize = '0.9em';
          } else if(window.matchMedia("(max-width: 450px)").matches) {
            levelTitle.style.fontSize = '1.04em';
            levelFontSize = '1.04em';
          } else if(window.matchMedia("(max-width: 499px)").matches) {
            levelTitle.style.fontSize = '1.12em';
            levelFontSize = '1.12em';
          } else if(window.matchMedia("(max-width: 599px)").matches) {
            levelTitle.style.fontSize = '1.24em';
            levelFontSize = '1.24em';
          } else {
            levelTitle.style.fontSize = '1.39em';
            levelFontSize = '1.39em';
          }


          if(window.matchMedia("(max-width: 299px)").matches) {
            if(window.matchMedia("(max-width: 250px)").matches) {
              gameOverFontSize = '0.4em';
            } else {
              gameOverFontSize = '0.48em';
            }
            

            winLevelFontSize = levelFontSize;

            
          } else if(window.matchMedia("(max-width: 399px)").matches) {

            gameOverFontSize = '0.51em';
            winLevelFontSize = '0.31em';

            if(window.matchMedia("(max-width: 325px)").matches) {

            } else if(window.matchMedia("(max-width: 350px)").matches) {
              
            } else if(window.matchMedia("(max-width: 375px)").matches) {
              
              winLevelFontSize = '0.42em';
            
            } else {
              
              winLevelFontSize = '0.42em';

              if(window.matchMedia("(min-height: 576px)").matches) {
                gameOverFontSize = '0.56em';
              }
            }
          } else if(window.matchMedia("(max-width: 499px)").matches) {

            gameOverFontSize = '0.54em';
            winLevelFontSize = '0.46em';
            
            if(window.matchMedia("(max-width: 425px)").matches) {
              
            } else if(window.matchMedia("(max-width: 450px)").matches) {
              
            } else if(window.matchMedia("(max-width: 475px)").matches) {
              
            } else {
              
            }
          } else if(window.matchMedia("(max-width: 599px)").matches) {

            gameOverFontSize = '0.54em';
            
            if(window.matchMedia("(max-width: 525px)").matches) {
              winLevelFontSize = '0.48em';
            } else if(window.matchMedia("(max-width: 550px)").matches) {
              winLevelFontSize = '0.48em';
            } else if(window.matchMedia("(max-width: 575px)").matches) {
              winLevelFontSize = '0.54em';
            } else {
              winLevelFontSize = '0.54em';
            }
          }

          
        } else if(maxHeight699.matches) {

          gameOverLineHeight = '2.64';
          winLevelLineHeight = '2.84';

          if(window.matchMedia("(min-width: 400px)").matches && initiated) {
            levelTitle.style.fontSize = '1em';
            levelFontSize = '1em';
          } else if(window.matchMedia("(min-width: 300px)").matches && initiated) {
            levelTitle.style.fontSize = '0.78em';
            levelFontSize = '0.78em';
          } else {
            levelTitle.style.fontSize = '0.75em';
            levelFontSize = '0.75em';
          }

          if(window.matchMedia("(max-width: 299px)").matches) {
            portraitMarginV = '27.4vh';

            nomisFontSize = '3.20em';
            nomisText.style.fontSize = '3.20em';
          } else {
            

            nomisFontSize = '3.62em';
            nomisText.style.fontSize = '3.62em';
          }

          if(window.matchMedia("(min-width: 300px)").matches && window.matchMedia("(max-width: 399px)").matches) {
            
          }


          if(maxHeight625.matches) {
            portraitMarginV = '26.34vh';
          } else {
            portraitMarginV = '25.84vh';
          }

          
          if(window.matchMedia("(min-width: 300px)").matches) {
            nomisFontSize = '3.7em';
            nomisText.style.fontSize = '3.7em';
          } else {
            nomisFontSize = '3.20em';
            nomisText.style.fontSize = '3.20em';
          }



          if(window.matchMedia("(max-width: 299px)").matches) {
            levelTitle.style.fontSize = '0.51em';
            levelFontSize = '0.51em';
          } else if(window.matchMedia("(max-width: 350px)").matches) {
            levelTitle.style.fontSize = '0.77em';
            levelFontSize = '0.77em';
          } else if(window.matchMedia("(max-width: 399px)").matches) {
            levelTitle.style.fontSize = '0.9em';
            levelFontSize = '0.9em';
          } else if(window.matchMedia("(max-width: 450px)").matches) {
            levelTitle.style.fontSize = '1.04em';
            levelFontSize = '1.04em';
          } else if(window.matchMedia("(max-width: 499px)").matches) {
            levelTitle.style.fontSize = '1.12em';
            levelFontSize = '1.12em';
          } else if(window.matchMedia("(max-width: 599px)").matches) {
            levelTitle.style.fontSize = '1.24em';
            levelFontSize = '1.24em';
          } else {
            levelTitle.style.fontSize = '1.39em';
            levelFontSize = '1.39em';
          }



          


          if(window.matchMedia("(max-width: 299px)").matches) {
            portraitMarginV = '27.4vh';

            

            if(window.matchMedia("(max-width: 250px)").matches) {
              gameOverFontSize = '0.4em';
            } else {
              gameOverFontSize = '0.48em';
            }
            

            winLevelFontSize = levelFontSize;

            
          } else if(window.matchMedia("(max-width: 399px)").matches) {

            gameOverFontSize = '0.51em';
            winLevelFontSize = '0.51em';

            if(window.matchMedia("(max-width: 325px)").matches) {
           
            } else if(window.matchMedia("(max-width: 350px)").matches) {
              
            } else if(window.matchMedia("(max-width: 375px)").matches) {
              
            } else {
              
            }

          } else if(window.matchMedia("(max-width: 499px)").matches) {

            gameOverFontSize = '0.55em';
            winLevelFontSize = '0.5em';
            
            if(window.matchMedia("(max-width: 425px)").matches) {
              
            } else if(window.matchMedia("(max-width: 450px)").matches) {
              
            } else if(window.matchMedia("(max-width: 475px)").matches) {
              
            } else {
             
            }
          } else if(window.matchMedia("(max-width: 599px)").matches) {

            gameOverFontSize = '0.64em';
            winLevelFontSize = '0.62em';

            if(window.matchMedia("(max-width: 525px)").matches) {
              
            } else if(window.matchMedia("(max-width: 550px)").matches) {
              
            } else if(window.matchMedia("(max-width: 575px)").matches) {
              
            } else {
              
            }
          } else if(window.matchMedia("(max-width: 699px)").matches) {

            gameOverFontSize = '0.72em';
            winLevelFontSize = '0.72em';
          
          }

          

        } else if(maxHeight799.matches) {

          gameOverLineHeight = '2.64';
          winLevelLineHeight = '2.72';

          

          if(window.matchMedia("(max-width: 299px)").matches) {
            portraitMarginV = '27.6vh';
        
            nomisFontSize = '3.84em';
            nomisText.style.fontSize = '3.84em';
          } else if(window.matchMedia("(max-width: 375px)").matches) {
              levelFontSize = '0.75em';
              levelTitle.style.fontSize = '0.75em';
     
              if(maxHeight725.matches) {
                portraitMarginV = '26.10vh';
              } else {
                portraitMarginV = '25.84vh';
              }
              

              nomisFontSize = '4.28em';
              nomisText.style.fontSize = '4.28em';
          } else {
              levelFontSize = '0.92em';
              levelTitle.style.fontSize = '0.92em';
     
              if(maxHeight725.matches) {
                portraitMarginV = '26.10vh';
              } else {
                portraitMarginV = '25.84vh';
              }
              

              nomisFontSize = '4.28em';
              nomisText.style.fontSize = '4.28em';
              
            }



            if(window.matchMedia("(max-width: 299px)").matches) {
              levelTitle.style.fontSize = '0.51em';
              levelFontSize = '0.51em';
            } else if(window.matchMedia("(max-width: 350px)").matches) {
              levelTitle.style.fontSize = '0.77em';
              levelFontSize = '0.77em';
            } else if(window.matchMedia("(max-width: 399px)").matches) {
              levelTitle.style.fontSize = '0.9em';
              levelFontSize = '0.9em';
            } else if(window.matchMedia("(max-width: 450px)").matches) {
              levelTitle.style.fontSize = '1.04em';
              levelFontSize = '1.04em';
            } else if(window.matchMedia("(max-width: 499px)").matches) {
              levelTitle.style.fontSize = '1.12em';
              levelFontSize = '1.12em';
            } else if(window.matchMedia("(max-width: 599px)").matches) {
              levelTitle.style.fontSize = '1.24em';
              levelFontSize = '1.24em';
            } else {
              levelTitle.style.fontSize = '1.39em';
              levelFontSize = '1.39em';
            }



            if(window.matchMedia("(max-width: 299px)").matches) {
              
  
              if(window.matchMedia("(max-width: 250px)").matches) {
                gameOverFontSize = '0.51em';
              } else {
                gameOverFontSize = '0.51em';
              }
              
              if(initiated) {
                levelFontSize = '0.72em';
              } else {
                levelFontSize = '0.51em';
              }
  
              winLevelFontSize = levelFontSize;
  
              
            } else if(window.matchMedia("(max-width: 399px)").matches) {
  
              gameOverFontSize = '0.58em';
              winLevelFontSize = '0.54em';
  
              if(window.matchMedia("(max-width: 325px)").matches) {
             
              } else if(window.matchMedia("(max-width: 350px)").matches) {
                
              } else if(window.matchMedia("(max-width: 375px)").matches) {
                
              } else {
                
              }
  
            } else if(window.matchMedia("(max-width: 499px)").matches) {
  
              if(window.matchMedia("(max-width: 475px)").matches) {
                gameOverFontSize = '0.55em';
                winLevelFontSize = '0.5em';
              } else {
                gameOverFontSize = '0.66em';
                winLevelFontSize = '0.58em';
              }
              
              if(window.matchMedia("(max-width: 425px)").matches) {
                
              } else if(window.matchMedia("(max-width: 450px)").matches) {
                
              } else if(window.matchMedia("(max-width: 475px)").matches) {
                
              } else {
               
              }
            } else if(window.matchMedia("(max-width: 599px)").matches) {
  
              gameOverFontSize = '0.67em';
              winLevelFontSize = '0.62em';
  
              if(window.matchMedia("(max-width: 525px)").matches) {
                
              } else if(window.matchMedia("(max-width: 550px)").matches) {
                
              } else if(window.matchMedia("(max-width: 575px)").matches) {
                
              } else {
                
              }
            } else if(window.matchMedia("(max-width: 699px)").matches) {
  
              gameOverFontSize = '0.77em';
              winLevelFontSize = '0.72em';
            
            } else if(window.matchMedia("(max-width: 799px)").matches) {
  
              gameOverFontSize = '0.84em';
              winLevelFontSize = '0.84em';
            
            }


        } else if(maxHeight899.matches) {

            gameOverLineHeight = '2.82';
            
            if(window.matchMedia("(max-width: 499px)").matches) {
              winLevelLineHeight = '2.84';
            } else {
              winLevelLineHeight = '2.72';
            }

            if(maxHeight825.matches) {
              portraitMarginV = '26.2vh';
            } else {
              portraitMarginV = '26vh';
            }
            
            nomisFontSize = '4.84em';
            nomisText.style.fontSize = '4.84em';



            if(window.matchMedia("(max-width: 350px)").matches) {
              levelTitle.style.fontSize = '0.77em';
              levelFontSize = '0.77em';
            } else if(window.matchMedia("(max-width: 399px)").matches) {
              levelTitle.style.fontSize = '0.9em';
              levelFontSize = '0.9em';
            } else if(window.matchMedia("(max-width: 450px)").matches) {
              levelTitle.style.fontSize = '1.04em';
              levelFontSize = '1.04em';
            } else if(window.matchMedia("(max-width: 499px)").matches) {
              levelTitle.style.fontSize = '1.12em';
              levelFontSize = '1.12em';
            } else if(window.matchMedia("(max-width: 599px)").matches) {
              levelTitle.style.fontSize = '1.24em';
              levelFontSize = '1.24em';
            } else {
              levelTitle.style.fontSize = '1.39em';
              levelFontSize = '1.39em';
            }


            if(window.matchMedia("(max-width: 399px)").matches) {
  
              if(window.matchMedia("(min-width: 376px)").matches) {
                gameOverFontSize = '0.69em';
                winLevelFontSize = '0.61em';
              } else {
                gameOverFontSize = '0.60em';
                winLevelFontSize = '0.54em';
              }
  
              if(window.matchMedia("(max-width: 325px)").matches) {
             
              } else if(window.matchMedia("(max-width: 350px)").matches) {
                
              } else if(window.matchMedia("(max-width: 375px)").matches) {
                
              } else {
                
              }
  
            } else if(window.matchMedia("(max-width: 499px)").matches) {
  
              if(window.matchMedia("(max-width: 450px)").matches) {
                gameOverFontSize = '0.56em';
                winLevelFontSize = '0.5em';
              } else {
                gameOverFontSize = '0.62em';
                winLevelFontSize = '0.62em';
              }
              
              if(window.matchMedia("(max-width: 425px)").matches) {
                
              } else if(window.matchMedia("(max-width: 450px)").matches) {
                
              } else if(window.matchMedia("(max-width: 475px)").matches) {
                
              } else {
               
              }
            } else if(window.matchMedia("(max-width: 599px)").matches) {
  
              gameOverFontSize = '0.7em';
              winLevelFontSize = '0.62em';
  
              if(window.matchMedia("(max-width: 525px)").matches) {
                
              } else if(window.matchMedia("(max-width: 550px)").matches) {
                
              } else if(window.matchMedia("(max-width: 575px)").matches) {
                
              } else {
                
              }
            } else if(window.matchMedia("(max-width: 699px)").matches) {
  
              gameOverFontSize = '0.80em';
              winLevelFontSize = '0.72em';
            
            } else if(window.matchMedia("(max-width: 799px)").matches) {
  
              gameOverFontSize = '0.84em';
              winLevelFontSize = '0.84em';
            
            } else if(window.matchMedia("(max-width: 899px)").matches) {
  
              gameOverFontSize = '0.9em';
              winLevelFontSize = '0.84em';
            
            }
        
        } else if(maxHeight999.matches) {
            
          if(window.matchMedia("(max-width: 450px)").matches) {
            levelTitle.style.fontSize = '1.04em';
            levelFontSize = '1.04em';
          } else if(window.matchMedia("(max-width: 499px)").matches) {
            levelTitle.style.fontSize = '1.12em';
            levelFontSize = '1.12em';
          } else if(window.matchMedia("(max-width: 599px)").matches) {
            levelTitle.style.fontSize = '1.24em';
            levelFontSize = '1.24em';
          } else {
            levelTitle.style.fontSize = '1.39em';
            levelFontSize = '1.39em';
          }


            gameOverLineHeight = '3.20'; 
            winLevelLineHeight = '3';
            portraitMarginV = '25.84vh';

            nomisFontSize = '5.6em';
            nomisText.style.fontSize = '5.6em';


            if(window.matchMedia("(max-width: 499px)").matches) {
  
              gameOverFontSize = '0.62em';
              winLevelFontSize = '0.62em';

              if(window.matchMedia("(max-width: 425px)").matches) {
                gameOverFontSize = '0.56em';
                winLevelFontSize = '0.6em';
              } else if(window.matchMedia("(max-width: 450px)").matches) {
                gameOverFontSize = '0.6em';
                winLevelFontSize = '0.62em';
              } else if(window.matchMedia("(max-width: 475px)").matches) {
                gameOverFontSize = '0.62em';
                winLevelFontSize = '0.68em';
              } else {
                gameOverFontSize = '0.66em';
                winLevelFontSize = '0.72em';
              }
              
              if(window.matchMedia("(max-width: 425px)").matches) {
                
              } else if(window.matchMedia("(max-width: 450px)").matches) {
                
              } else if(window.matchMedia("(max-width: 475px)").matches) {
                
              } else {
               
              }
            } else if(window.matchMedia("(max-width: 599px)").matches) {
  
              
  
              if(window.matchMedia("(max-width: 525px)").matches) {
                gameOverFontSize = '0.7em';
                winLevelFontSize = '0.62em';  
              } else if(window.matchMedia("(max-width: 550px)").matches) {
                gameOverFontSize = '0.72em';
                winLevelFontSize = '0.62em';
              } else if(window.matchMedia("(max-width: 575px)").matches) {
                gameOverFontSize = '0.76em';
                winLevelFontSize = '0.68em';
              } else {
                gameOverFontSize = '0.78em';
                winLevelFontSize = '0.7em';
              }
            } else if(window.matchMedia("(max-width: 699px)").matches) {
  
              gameOverFontSize = '0.80em';
              winLevelFontSize = '0.72em';
            
            } else if(window.matchMedia("(max-width: 799px)").matches) {
  
              gameOverFontSize = '0.88em';
              winLevelFontSize = '0.84em';
            
            } else if(window.matchMedia("(max-width: 899px)").matches) {
  
              gameOverFontSize = '0.92em';
              winLevelFontSize = '0.84em';
            
            } else if(window.matchMedia("(max-width: 999px)").matches) {
  
              gameOverFontSize = '0.99em';
              winLevelFontSize = '0.88em';
            
            }
        
          } else if(maxHeight1099.matches) {

              levelTitle.style.fontSize = '1.24em';
              levelFontSize = '1.24em';

              if(window.matchMedia("(max-width: 599px)").matches) {
                levelTitle.style.fontSize = '1.29em';
                levelFontSize = '1.29em';
              } else {
                levelTitle.style.fontSize = '1.44em';
                levelFontSize = '1.44em';
              }
  
  
              gameOverLineHeight = '3.20'; 
              winLevelLineHeight = '3.14';
              portraitMarginV = '26.62vh';
  
              nomisFontSize = '6.2em';
              nomisText.style.fontSize = '6.2em';
  
  
              if(window.matchMedia("(max-width: 599px)").matches) {
    
                
    
                if(window.matchMedia("(max-width: 550px)").matches) {
                  gameOverFontSize = '0.72em';
                  winLevelFontSize = '0.64em';
                } else {
                  gameOverFontSize = '0.78em';
                  winLevelFontSize = '0.7em';
                }

              } else if(window.matchMedia("(max-width: 699px)").matches) {
    
                gameOverFontSize = '0.82em';
                winLevelFontSize = '0.72em';
              
              } else if(window.matchMedia("(max-width: 799px)").matches) {
    
                gameOverFontSize = '0.92em';
                winLevelFontSize = '0.84em';
              
              } else if(window.matchMedia("(max-width: 899px)").matches) {
    
                gameOverFontSize = '0.92em';
                winLevelFontSize = '0.84em';
              
              } else if(window.matchMedia("(max-width: 999px)").matches) {
    
                gameOverFontSize = '0.99em';
                winLevelFontSize = '0.88em';
              
              } else if(window.matchMedia("(max-width: 1099px)").matches) {
    
                gameOverFontSize = '1.07em';
                winLevelFontSize = '0.88em';
              
              }

        } else if(maxHeight1199.matches) {
              
              gameOverLineHeight = '3.20';
              
              if(window.matchMedia("(max-width: 599px)").matches) {
                winLevelLineHeight = '2.72';

                levelTitle.style.fontSize = '1.29em';
                levelFontSize = '1.29em';
              } else {
                winLevelLineHeight = '3';

                levelTitle.style.fontSize = '1.44em';
                levelFontSize = '1.44em';
              }


              gameOverLineHeight = winLevelLineHeight;
              
              
              portraitMarginV = '26.7vh';
  
              nomisFontSize = '6.7em';
              nomisText.style.fontSize = '6.7em';
  
  
              if(window.matchMedia("(max-width: 599px)").matches) {
    
                
    
                if(window.matchMedia("(max-width: 525px)").matches) {
                  gameOverFontSize = '0.68em';
                  winLevelFontSize = '0.72em';
                } else if(window.matchMedia("(max-width: 550px)").matches) {
                  gameOverFontSize = '0.72em';
                  winLevelFontSize = '0.72em';
                } else if(window.matchMedia("(max-width: 575px)").matches) {
                  gameOverFontSize = '0.76em';
                  winLevelFontSize = '0.84em';
                } else {
                  gameOverFontSize = '0.80em';
                  winLevelFontSize = '0.84em';
                }

              } else if(window.matchMedia("(max-width: 699px)").matches) {
    
                if(window.matchMedia("(max-width: 650px)").matches) {
                  gameOverFontSize = '0.82em';
                  winLevelFontSize = '0.72em';
                } else {
                  gameOverFontSize = '0.88em';
                  winLevelFontSize = '0.80em';
                }
              
              } else if(window.matchMedia("(max-width: 799px)").matches) {
    
                if(window.matchMedia("(max-width: 750px)").matches) {
                  gameOverFontSize = '0.92em';
                  winLevelFontSize = '0.86em';
                } else {
                  gameOverFontSize = '0.94em';
                  winLevelFontSize = '0.88em';
                }
              
              } else if(window.matchMedia("(max-width: 899px)").matches) {
    
                gameOverFontSize = '0.96em';
                winLevelFontSize = '0.88em';
              
              } else if(window.matchMedia("(max-width: 999px)").matches) {
    
                gameOverFontSize = '0.99em';
                winLevelFontSize = '1.04em';
              
              } else if(window.matchMedia("(max-width: 1099px)").matches) {
    
                gameOverFontSize = '1.09em';
                winLevelFontSize = '1.04em';
              
              } else if(window.matchMedia("(max-width: 1199px)").matches) {
    
                gameOverFontSize = '1.11em';
                winLevelFontSize = '1.14em';
              
              }



        } else if(maxHeight1299.matches) {
              levelTitle.style.fontSize = '1.54em';
              levelFontSize = '1.54em';
  
  
              gameOverLineHeight = '3.20';
              
              if(window.matchMedia("(max-width: 599px)").matches) {
                winLevelLineHeight = '2.72';
              } else {
                winLevelLineHeight = '3';
              }


              gameOverLineHeight = winLevelLineHeight;
              
              
              portraitMarginV = '26.42vh';
  
              nomisFontSize = '7.2em';
              nomisText.style.fontSize = '7.2em';
  
  
              if(window.matchMedia("(max-width: 699px)").matches) {
    
                if(window.matchMedia("(max-width: 650px)").matches) {
                  gameOverFontSize = '0.82em';
                  winLevelFontSize = '0.75em';
                } else {
                  gameOverFontSize = '0.88em';
                  winLevelFontSize = '0.80em';
                }
              
              } else if(window.matchMedia("(max-width: 799px)").matches) {
    
                if(window.matchMedia("(max-width: 750px)").matches) {
                  gameOverFontSize = '0.92em';
                  winLevelFontSize = '0.86em';
                } else {
                  gameOverFontSize = '0.94em';
                  winLevelFontSize = '0.92em';
                }
              
              } else if(window.matchMedia("(max-width: 899px)").matches) {
    
                gameOverFontSize = '1.02em';
                winLevelFontSize = '0.98em';
              
              } else if(window.matchMedia("(max-width: 999px)").matches) {
    
                gameOverFontSize = '1.07em';
                winLevelFontSize = '1.10em';
              
              } else if(window.matchMedia("(max-width: 1099px)").matches) {
    
                gameOverFontSize = '1.11em';
                winLevelFontSize = '1.2em';
              
              } else if(window.matchMedia("(max-width: 1199px)").matches) {
    
                gameOverFontSize = '1.14em';
                
                if(window.matchMedia("(min-width: 1176px)").matches) {
                  winLevelFontSize = '1.37em';
                } else {
                  winLevelFontSize = '1.27em';
                }
              
              } else if(window.matchMedia("(max-width: 1299px)").matches) {
    
                gameOverFontSize = '1.2em';
                

                if(window.matchMedia("(min-width: 1276px)").matches) {
                  winLevelFontSize = '1.48em';
                } else {
                  winLevelFontSize = '1.37em';
                }
              
              }



        } else if(maxHeight1399.matches) {
              if(window.matchMedia("(max-width: 699px)").matches) {
                levelTitle.style.fontSize = '1.54em';
                levelFontSize = '1.54em';
              } else {
                levelTitle.style.fontSize = '1.60em';
                levelFontSize = '1.60em';
              }
  
  
              gameOverLineHeight = '3.20';
              
              if(window.matchMedia("(max-width: 699px)").matches) {
                winLevelLineHeight = '2.72';
              } else if(window.matchMedia("(max-width: 799px)").matches) {
                winLevelLineHeight = '3.07';
              } else {
                winLevelLineHeight = '2.96';
              }


              gameOverLineHeight = winLevelLineHeight;
              
              
              portraitMarginV = '26.51vh';
  
              nomisFontSize = '7.77em';
              nomisText.style.fontSize = '7.77em';
  
  
              if(window.matchMedia("(max-width: 699px)").matches) {
    
                if(window.matchMedia("(max-width: 650px)").matches) {
                  gameOverFontSize = '0.82em';
                  winLevelFontSize = '0.88em';
                } else {
                  gameOverFontSize = '0.88em';
                  winLevelFontSize = '1.02em';
                }
              
              } else if(window.matchMedia("(max-width: 799px)").matches) {
    
                if(window.matchMedia("(max-width: 750px)").matches) {
                  gameOverFontSize = '0.94em';
                  winLevelFontSize = '0.88em';
                } else {
                  gameOverFontSize = '0.98em';
                  winLevelFontSize = '0.92em';
                }
              
              } else if(window.matchMedia("(max-width: 899px)").matches) {
    
                gameOverFontSize = '1.07em';
                
                if(window.matchMedia("(max-width: 850px)").matches) {
                  winLevelFontSize = '1.00em';
                } else {
                  winLevelFontSize = '1.04em';
                }
              
              } else if(window.matchMedia("(max-width: 999px)").matches) {
    
                gameOverFontSize = '1.11em';
                

                if(window.matchMedia("(max-width: 950px)").matches) {
                  winLevelFontSize = '1.10em';
                } else {
                  winLevelFontSize = '1.14em';
                }
              
              } else if(window.matchMedia("(max-width: 1099px)").matches) {
    
                gameOverFontSize = '1.22em';
                winLevelFontSize = '1.26em';
              
              } else if(window.matchMedia("(max-width: 1199px)").matches) {
    
                gameOverFontSize = '1.28em';
                winLevelFontSize = '1.37em';
              
              } else if(window.matchMedia("(max-width: 1299px)").matches) {
    
                gameOverFontSize = '1.44em';
                winLevelFontSize = '1.48em';
              
              } else if(window.matchMedia("(max-width: 1399px)").matches) {
    
                gameOverFontSize = '1.48em';
                
                if(window.matchMedia("(max-width: 1350px)").matches) {
                  winLevelFontSize = '1.54em';
                } else {
                  winLevelFontSize = '1.60em';
                }
              
              }


        } else if(maxHeight1499.matches) {
          
          levelTitle.style.fontSize = '1.72em';
          levelFontSize = '1.72em';
            
          gameOverLineHeight = '3.20';
          
          
          if(window.matchMedia("(max-width: 799px)").matches) {
            winLevelLineHeight = '2.82';
          } else if(window.matchMedia("(max-width: 899px)").matches) {
            winLevelLineHeight = '2.96';
          } else {
            winLevelLineHeight = '2.96';
          }


          gameOverLineHeight = winLevelLineHeight;
          
          
          portraitMarginV = '26.4vh';

          nomisFontSize = '8.32em';
          nomisText.style.fontSize = '8.32em';


          if(window.matchMedia("(max-width: 799px)").matches) {

            gameOverFontSize = '0.97em';
            winLevelFontSize = '1em';
          
          } else if(window.matchMedia("(max-width: 899px)").matches) {

            gameOverFontSize = '1.11em';
            
            if(window.matchMedia("(max-width: 850px)").matches) {
              winLevelFontSize = '1em';
            } else {
              winLevelFontSize = '1.054em';
            }
          
          } else if(window.matchMedia("(max-width: 999px)").matches) {

            gameOverFontSize = '1.16em';
            

            if(window.matchMedia("(max-width: 950px)").matches) {
              winLevelFontSize = '1.12em';
            } else {
              winLevelFontSize = '1.18em';
            }
          
          } else if(window.matchMedia("(max-width: 1099px)").matches) {

            gameOverFontSize = '1.28em';
            winLevelFontSize = '1.25em';
          
          } else if(window.matchMedia("(max-width: 1199px)").matches) {

            gameOverFontSize = '1.34em';
            winLevelFontSize = '1.37em';
          
          } else if(window.matchMedia("(max-width: 1299px)").matches) {

            gameOverFontSize = '1.47em';
            winLevelFontSize = '1.48em';
          
          } else if(window.matchMedia("(max-width: 1399px)").matches) {

            gameOverFontSize = '1.51em';
            
            if(window.matchMedia("(max-width: 1350px)").matches) {
              winLevelFontSize = '1.54em';
            } else {
              winLevelFontSize = '1.60em';
            }
          
          } else if(window.matchMedia("(max-width: 1499px)").matches) {

            gameOverFontSize = '1.56em';
            
            if(window.matchMedia("(max-width: 1450px)").matches) {
              winLevelFontSize = '1.66em';
            } else {
              winLevelFontSize = '1.72em';
            }
            
          }



        } else if(maxHeight1599.matches) {
          levelTitle.style.fontSize = '1.77em';
          levelFontSize = '1.77em';
            
          gameOverLineHeight = '3.20';
          
          
          if(window.matchMedia("(max-width: 899px)").matches) {
            winLevelLineHeight = '3.27';
          } else if(window.matchMedia("(max-width: 999px)").matches) {
            winLevelLineHeight = '3.2';
          } else if(window.matchMedia("(max-width: 1199px)").matches) {
            winLevelLineHeight = '3';
          } else {
            winLevelLineHeight = '2.72';
          }


          gameOverLineHeight = winLevelLineHeight;
          
          
          portraitMarginV = '26.51vh';

          nomisFontSize = '8.88em';
          nomisText.style.fontSize = '8.88em';


          if(window.matchMedia("(max-width: 799px)").matches) {

            gameOverFontSize = '0.98em';
            
            if(window.matchMedia("(max-width: 750px)").matches) {
              winLevelFontSize = '0.88em';
            } else {
              winLevelFontSize = '0.93em';
            }
          
          } else if(window.matchMedia("(max-width: 899px)").matches) {

            gameOverFontSize = '1.11em';
            
            if(window.matchMedia("(max-width: 850px)").matches) {
              winLevelFontSize = '1em';
            } else {
              winLevelFontSize = '1.054em';
            }
          
          } else if(window.matchMedia("(max-width: 999px)").matches) {

            gameOverFontSize = '1.25em';
            

            if(window.matchMedia("(max-width: 950px)").matches) {
              winLevelFontSize = '1.12em';
            } else {
              winLevelFontSize = '1.18em';
            }
          
          } else if(window.matchMedia("(max-width: 1099px)").matches) {

            gameOverFontSize = '1.28em';
            winLevelFontSize = '1.25em';
          
          } else if(window.matchMedia("(max-width: 1199px)").matches) {

            gameOverFontSize = '1.39em';
            winLevelFontSize = '1.39em';
          
          } else if(window.matchMedia("(max-width: 1299px)").matches) {

            gameOverFontSize = '1.54em';
            winLevelFontSize = '1.51em';
          
          } else if(window.matchMedia("(max-width: 1399px)").matches) {

            gameOverFontSize = '1.62em';
            
            if(window.matchMedia("(max-width: 1350px)").matches) {
              winLevelFontSize = '1.62em';
            } else {
              winLevelFontSize = '1.62em';
            }
          
          } else if(window.matchMedia("(max-width: 1499px)").matches) {

            gameOverFontSize = '1.72em';
            
            if(window.matchMedia("(max-width: 1450px)").matches) {
              winLevelFontSize = '1.72em';
            } else {
              winLevelFontSize = '1.72em';
            }
            
          }


        } else if(maxHeight1699.matches) {

          levelTitle.style.fontSize = '1.84em';
          levelFontSize = '1.84em';
            
          gameOverLineHeight = '3.20';
          
          
          if(window.matchMedia("(max-width: 899px)").matches) {
            winLevelLineHeight = '3.27';
          } else if(window.matchMedia("(max-width: 999px)").matches) {
            winLevelLineHeight = '3.2';
          } else if(window.matchMedia("(max-width: 1199px)").matches) {
            winLevelLineHeight = '3';
          } else {
            winLevelLineHeight = '2.72';
          }


          gameOverLineHeight = winLevelLineHeight;
          
          
          portraitMarginV = '26.51vh';

          nomisFontSize = '9.62em';
          nomisText.style.fontSize = '9.62em';


          if(window.matchMedia("(max-width: 899px)").matches) {
            
            if(window.matchMedia("(max-width: 850px)").matches) {
              winLevelFontSize = '1.01em';

              gameOverFontSize = '1.12em';
            } else {
              winLevelFontSize = '1.07em';

              gameOverFontSize = '1.17em';
            }
          
          } else if(window.matchMedia("(max-width: 999px)").matches) {

            gameOverFontSize = '1.27em';
            

            if(window.matchMedia("(max-width: 950px)").matches) {
              winLevelFontSize = '1.14em';
            } else {
              winLevelFontSize = '1.2em';
            }
          
          } else if(window.matchMedia("(max-width: 1099px)").matches) {

            gameOverFontSize = '1.3em';
            winLevelFontSize = '1.26em';
          
          } else if(window.matchMedia("(max-width: 1199px)").matches) {

            gameOverFontSize = '1.42em';
            winLevelFontSize = '1.39em';
          
          } else if(window.matchMedia("(max-width: 1299px)").matches) {

            gameOverFontSize = '1.58em';
            winLevelFontSize = '1.51em';
          
          } else if(window.matchMedia("(max-width: 1399px)").matches) {

            gameOverFontSize = '1.66em';
            winLevelFontSize = '1.64em';
          
          } else if(window.matchMedia("(max-width: 1499px)").matches) {

            gameOverFontSize = '1.77em';
            
            if(window.matchMedia("(max-width: 1450px)").matches) {
              winLevelFontSize = '1.77em';
            } else {
              winLevelFontSize = '1.77em';
            }
            
          }

        } else {
          levelTitle.style.fontSize = '2.04em';
          levelFontSize = '2.04em';
            
          gameOverLineHeight = '2.96';
          
          
          if(window.matchMedia("(max-width: 899px)").matches) {
            winLevelLineHeight = '3.27';
          } else if(window.matchMedia("(max-width: 999px)").matches) {
            winLevelLineHeight = '3.2';
          } else if(window.matchMedia("(max-width: 1199px)").matches) {
            winLevelLineHeight = '3';
          } else {
            winLevelLineHeight = '2.72';
          }


          gameOverLineHeight = winLevelLineHeight;
          
          
          portraitMarginV = '26.51vh';

          nomisFontSize = '10.44em';
          nomisText.style.fontSize = '10.44em';


          if(window.matchMedia("(max-width: 899px)").matches) {
            
            if(window.matchMedia("(max-width: 850px)").matches) {
              winLevelFontSize = '1.02em';

              gameOverFontSize = '1.14em';
            } else {
              winLevelFontSize = '1.084em';

              gameOverFontSize = '1.21em';
            }
          
          } else if(window.matchMedia("(max-width: 999px)").matches) {

            gameOverFontSize = '1.28em';
            

            if(window.matchMedia("(max-width: 950px)").matches) {
              winLevelFontSize = '1.147em';
            } else {
              winLevelFontSize = '1.212em';
            }
          
          } else if(window.matchMedia("(max-width: 1099px)").matches) {

            gameOverFontSize = '1.41em';
            winLevelFontSize = '1.26em';
          
          } else if(window.matchMedia("(max-width: 1199px)").matches) {

            gameOverFontSize = '1.54em';
            winLevelFontSize = '1.402em';
          
          } else if(window.matchMedia("(max-width: 1299px)").matches) {

            gameOverFontSize = '1.64em';
            winLevelFontSize = '1.522em';
          
          } else if(window.matchMedia("(max-width: 1399px)").matches) {

            gameOverFontSize = '1.80em';
            winLevelFontSize = '1.65em';
          
          } else if(window.matchMedia("(max-width: 1499px)").matches) {

            gameOverFontSize = '1.92em';
            
            if(window.matchMedia("(max-width: 1450px)").matches) {
              winLevelFontSize = '1.7707em';
            } else {
              winLevelFontSize = '1.7707em';
            }
            
          }
        }



        for(let skillButtonButton of skillButtonButtons) {
          if(window.matchMedia("(min-height: 1700px)").matches) {
            levelChoiceFontSize = '0.692em';
            skillButtonButton.style.fontSize = '0.692em';
          } else if(window.matchMedia("(min-height: 1600px)").matches) {
            levelChoiceFontSize = '0.667em';
            skillButtonButton.style.fontSize = '0.667em';
          } else if(window.matchMedia("(min-height: 1400px)").matches) {
            levelChoiceFontSize = '0.617em';
            skillButtonButton.style.fontSize = '0.617em';
          } else if(window.matchMedia("(min-height: 1300px)").matches) {
            levelChoiceFontSize = '0.567em';
            skillButtonButton.style.fontSize = '0.567em'; 
          } else if(window.matchMedia("(min-height: 1200px)").matches) {
            levelChoiceFontSize = '0.542em';
            skillButtonButton.style.fontSize = '0.542em';
          } else if(window.matchMedia("(min-height: 1000px)").matches) {
            levelChoiceFontSize = '0.492em';
            skillButtonButton.style.fontSize = '0.492em';
          } else if(window.matchMedia("(min-height: 900px)").matches) {
            if(window.matchMedia("(max-width: 499px)").matches) {
              levelChoiceFontSize = '0.417em';
              skillButtonButton.style.fontSize = '0.417em';
            } else {
              levelChoiceFontSize = '0.467em';
              skillButtonButton.style.fontSize = '0.467em';
            }
          } else if(window.matchMedia("(min-height: 800px)").matches) {
            if(window.matchMedia("(max-width: 499px)").matches) {
              levelChoiceFontSize = '0.342em';
              skillButtonButton.style.fontSize = '0.342em';
            } else {
              levelChoiceFontSize = '0.442em';
              skillButtonButton.style.fontSize = '0.442em';
            }
          } else if(window.matchMedia("(min-height: 700px)").matches) {
            //1.04em search
            //does 600 apply here or just 700?

            if(window.matchMedia("(max-width: 299px)").matches) {
              levelChoiceFontSize = '0.267em';
              skillButtonButton.style.fontSize = '0.267em';
            } else if(window.matchMedia("(max-width: 499px)").matches) {
              levelChoiceFontSize = '0.317em';
              skillButtonButton.style.fontSize = '0.317em';
            } else {
              levelChoiceFontSize = '0.417em';
              skillButtonButton.style.fontSize = '0.417em';
            }
          } else if(window.matchMedia("(min-height: 200px)").matches) {
            //1.04em search
            //does 600 apply here or just 700?

            if(window.matchMedia("(max-width: 299px)").matches) {
              levelChoiceFontSize = '0.267em';
              skillButtonButton.style.fontSize = '0.267em';
            } else if(window.matchMedia("(max-width: 399px)").matches) {
              levelChoiceFontSize = '0.292em';
              skillButtonButton.style.fontSize = '0.292em';
            } else if(window.matchMedia("(max-width: 499px)").matches) {
              levelChoiceFontSize = '0.342em';
              skillButtonButton.style.fontSize = '0.342em';
            } else {
              levelChoiceFontSize = '0.392em';
              skillButtonButton.style.fontSize = '0.392em';
            }
          }
        }



        // switch back to margin-left
        // left: 0; margin-left:  ${calcMarginH}vw;
      document.querySelector('.center').style.cssText = `width: ${widthCalc}vw; left: unset;`;
  
    } else if(landscapeN.matches) {

      let btns = document.querySelectorAll('.btn');


      levelFontSize = '0.56em';

      winLevelLineHeight = '1.28';
      

      for(btn of btns) {
        if(window.matchMedia("(max-width: 299px)").matches && window.matchMedia("(min-width: 288px)").matches) {
          btn.style.width = '18.56vw';

          btnWidth = '18.56vw';
        } else if(window.matchMedia("(max-width: 287px)").matches && window.matchMedia("(min-width: 276px)").matches) {
          btn.style.width = '18.09vw';

          btnWidth = '18.09vw';
        } else if(window.matchMedia("(max-width: 275px)").matches && window.matchMedia("(min-width: 263px)").matches) {
          btn.style.width = '17.89vw';

          btnWidth = '17.89vw';
        } else if(window.matchMedia("(max-width: 262px)").matches && window.matchMedia("(min-width: 251px)").matches) {
          btn.style.width = '17.39vw';

          btnWidth = '17.39vw';
        } else if(window.matchMedia("(min-width: 238px)").matches && window.matchMedia("(max-width: 250px)").matches) {
          btn.style.width = '17.24vw';

          btnWidth = '17.24vw';
        } else if(window.matchMedia("(max-width: 237px)").matches) {
          btn.style.width = '16.62vw';

          btnWidth = '16.62vw';
        } else if(window.matchMedia("(min-width: 2035px)").matches) {
          btn.style.width = '22.927vw';

          btnWidth = '22.927vw';
        } else if(window.matchMedia("(min-width: 1925px)").matches) {
          btn.style.width = '22.877vw';

          btnWidth = '22.877vw';
        } else if(window.matchMedia("(min-width: 1853px)").matches) {
          btn.style.width = '22.827vw';

          btnWidth = '22.827vw';
        } else if(window.matchMedia("(min-width: 1764px)").matches) {
          btn.style.width = '22.777vw';

          btnWidth = '22.777vw';
        } else if(window.matchMedia("(min-width: 1702px)").matches) {
          btn.style.width = '22.72vw';

          btnWidth = '22.72vw';
        } else if(window.matchMedia("(min-width: 1632px)").matches) {
          btn.style.width = '22.67vw';

          btnWidth = '22.67vw';
        } else if(window.matchMedia("(min-width: 1540px)").matches) {
          btn.style.width = '22.61vw';

          btnWidth = '22.61vw';
        } else if(window.matchMedia("(min-width: 1496px)").matches) {
          btn.style.width = '22.56vw';

          btnWidth = '22.56vw';
        } else if(window.matchMedia("(min-width: 1428px)").matches) {
          btn.style.width = '22.51vw';

          btnWidth = '22.51vw';
        } else if(window.matchMedia("(min-width: 1386px)").matches) {
          btn.style.width = '22.46vw';

          btnWidth = '22.46vw';
        } else if(window.matchMedia("(min-width: 1317px)").matches) {
          btn.style.width = '22.40vw';

          btnWidth = '22.40vw';
        } else if(window.matchMedia("(min-width: 1251px)").matches) {
          btn.style.width = '22.32vw';

          btnWidth = '22.32vw';
        } else if(window.matchMedia("(min-width: 1196px)").matches) {
          btn.style.width = '22.24vw';

          btnWidth = '22.24vw';
        } else if(window.matchMedia("(min-width: 1122px)").matches) {
          btn.style.width = '22.17vw';

          btnWidth = '22.17vw';
        } else if(window.matchMedia("(min-width: 1067px)").matches) {
          btn.style.width = '22.07vw';

          btnWidth = '22.07vw';
        } else if(window.matchMedia("(min-width: 1032px)").matches) {
          btn.style.width = '21.98vw';

          btnWidth = '21.98vw';
        } else if(window.matchMedia("(min-width: 996px)").matches) {
          btn.style.width = '21.9vw';

          btnWidth = '21.9vw';
        } else if(window.matchMedia("(min-width: 930px)").matches) {
          btn.style.width = '21.84vw';

          btnWidth = '21.84vw';
        } else if(window.matchMedia("(min-width: 860px)").matches) {
          btn.style.width = '21.7vw';

          btnWidth = '21.7vw';
        } else if(window.matchMedia("(min-width: 822px)").matches) {
          btn.style.width = '21.54vw';

          btnWidth = '21.54vw';
        } else if(window.matchMedia("(min-width: 777px)").matches) {
          btn.style.width = '21.40vw';

          btnWidth = '21.40vw';
        } else if(window.matchMedia("(min-width: 740px)").matches) {
          btn.style.width = '21.28vw';

          btnWidth = '21.28vw';
        } else if(window.matchMedia("(min-width: 717px)").matches) {
          btn.style.width = '21.16vw';

          btnWidth = '21.16vw';
        } else if(window.matchMedia("(min-width: 691px)").matches) {
          btn.style.width = '21.07vw';

          btnWidth = '21.07vw';
        } else if(window.matchMedia("(min-width: 673px)").matches) {
          btn.style.width = '20.96vw';

          btnWidth = '20.96vw';
        } else if(window.matchMedia("(min-width: 651px)").matches) {
          btn.style.width = '20.89vw';

          btnWidth = '20.89vw';
        } else if(window.matchMedia("(min-width: 629px)").matches) {
          btn.style.width = '20.79vw';

          btnWidth = '20.79vw';
        } else if(window.matchMedia("(min-width: 606px)").matches) {
          btn.style.width = '20.69vw';

          btnWidth = '20.69vw';
        } else if(window.matchMedia("(min-width: 580px)").matches) {
          btn.style.width = '20.54vw';

          btnWidth = '20.54vw';
        } else if(window.matchMedia("(min-width: 558px)").matches) {
          btn.style.width = '20.4vw';

          btnWidth = '20.4vw';
        } else if(window.matchMedia("(min-width: 535px)").matches) {
          btn.style.width = '20.26vw';

          btnWidth = '20.26vw';
        } else if(window.matchMedia("(min-width: 509px)").matches) {
          btn.style.width = '20.07vw';

          btnWidth = '20.07vw';
        } else if(window.matchMedia("(min-width: 497px)").matches) {
          btn.style.width = '19.91vw';

          btnWidth = '19.91vw';
        } else if(window.matchMedia("(min-width: 484px)").matches) {
          btn.style.width = '19.84vw';

          btnWidth = '19.84vw';
        } else if(window.matchMedia("(min-width: 456px)").matches) {
          btn.style.width = '19.66vw';

          btnWidth = '19.66vw';
        } else if(window.matchMedia("(min-width: 442px)").matches) {
          btn.style.width = '19.44vw';

          btnWidth = '19.44vw';
        } else if(window.matchMedia("(min-width: 434px)").matches) {
          btn.style.width = '19.32vw';

          btnWidth = '19.32vw';
        } else if(window.matchMedia("(min-width: 405px)").matches) {
          btn.style.width = '19.2vw';

          btnWidth = '19.2vw';
        } else if(window.matchMedia("(min-width: 387px)").matches) {
          btn.style.width = '18.91vw';

          btnWidth = '18.91vw';
        } else if(window.matchMedia("(min-width: 363px)").matches) {
          btn.style.width = '18.51vw';

          btnWidth = '18.51vw';
        } else if(window.matchMedia("(min-width: 337px)").matches) {
          btn.style.width = '18.22vw';

          btnWidth = '18.22vw';
        } else if(window.matchMedia("(min-width: 313px)").matches) {
          btn.style.width = '17.72vw';

          btnWidth = '17.72vw';
        } else if(window.matchMedia("(min-width: 300px)").matches) {
          btn.style.width = '17.25vw';

          btnWidth = '17.25vw';
        } else {
          btn.style.width = '16.96vw';

          btnWidth = '16.96vw';
        }
      }

      if(window.matchMedia("(max-width: 225px)").matches) {
        nomisText.style.fontSize = '1.2em';

        nomisFontSize = '1.2em';
      } else if(window.matchMedia("(max-width: 250px)").matches) {
        nomisText.style.fontSize = '1.22em';

        nomisFontSize = '1.22em';
      } else if(window.matchMedia("(max-width: 275px)").matches) {
        nomisText.style.fontSize = '1.3em';

        nomisFontSize = '1.3em';
      } else if(window.matchMedia("(max-width: 299px)").matches) {
        nomisText.style.fontSize = '1.48em';

        nomisFontSize = '1.48em';
      } else if(window.matchMedia("(max-width: 325px)").matches) {
        nomisText.style.fontSize = '1.6em';

        nomisFontSize = '1.6em';
      } else if(window.matchMedia("(max-width: 350px)").matches) {
        nomisText.style.fontSize = '1.8em';

        nomisFontSize = '1.8em';
      } else if(window.matchMedia("(max-width: 375px)").matches) {
        nomisText.style.fontSize = '1.9em';

        nomisFontSize = '1.9em';
      } else if(window.matchMedia("(max-width: 399px)").matches) {
        nomisText.style.fontSize = '2em';

        nomisFontSize = '2em';
      } else if(window.matchMedia("(max-width: 499px)").matches) {
        nomisText.style.fontSize = '2.28em';

        nomisFontSize = '2.28em';
      } else if(window.matchMedia("(max-width: 599px)").matches) {
        nomisText.style.fontSize = '2.82em';

        nomisFontSize = '2.82em';
      } else if(window.matchMedia("(max-width: 699px)").matches) {
        nomisText.style.fontSize = '3.1em';

        nomisFontSize = '3.1em';
      } else if(window.matchMedia("(max-width: 799px)").matches) {
        nomisText.style.fontSize = '3.48em';

        nomisFontSize = '3.48em';
      } else if(window.matchMedia("(max-width: 899px)").matches) {
        nomisText.style.fontSize = '3.84em';

        nomisFontSize = '3.84em';
      } else if(window.matchMedia("(max-width: 999px)").matches) {
        nomisText.style.fontSize = '4.35em';

        nomisFontSize = '4.35em';
      } else if(window.matchMedia("(max-width: 1099px)").matches) {
        nomisText.style.fontSize = '5.27em';

        nomisFontSize = '5.27em';
      } else if(window.matchMedia("(max-width: 1199px)").matches) {
        nomisText.style.fontSize = '5.97em';

        nomisFontSize = '5.97em';
      } else if(window.matchMedia("(max-width: 1299px)").matches) {
        nomisText.style.fontSize = '6.48em';

        nomisFontSize = '6.48em';
      } else if(window.matchMedia("(max-width: 1399px)").matches) {
        nomisText.style.fontSize = '6.84em';

        nomisFontSize = '6.84em';
      } else if(window.matchMedia("(max-width: 1499px)").matches) {
        nomisText.style.fontSize = '7.40em';

        nomisFontSize = '7.40em';
      } else if(window.matchMedia("(max-width: 1599px)").matches) {
        nomisText.style.fontSize = '7.77em';

        nomisFontSize = '7.77em';
      } else if(window.matchMedia("(max-width: 1699px)").matches) {
        nomisText.style.fontSize = '8.14em';

        nomisFontSize = '8.14em';
      } else if(window.matchMedia("(max-width: 1799px)").matches) {
        nomisText.style.fontSize = '8.51em';

        nomisFontSize = '8.51em';
      } else if(window.matchMedia("(max-width: 1899px)").matches) {
        nomisText.style.fontSize = '9.16em';

        nomisFontSize = '9.16em';
      } else if(window.matchMedia("(max-width: 1999px)").matches) {
        nomisText.style.fontSize = '9.62em';

        nomisFontSize = '9.62em';
      } else if(window.matchMedia("(max-width: 2099px)").matches) {
        nomisText.style.fontSize = '10.10em';

        nomisFontSize = '10.10em';
      } else if(window.matchMedia("(max-width: 2199px)").matches) {
        nomisText.style.fontSize = '10.61em';

        nomisFontSize = '10.61em';
      } else {
        nomisText.style.fontSize = '9.16em';

        nomisFontSize = '9.16em';
      }
      

      if(window.matchMedia("(min-width: 1300px)").matches) {
        heightCalc = ((windowWidth * 0.2) / windowHeight) * 100;
      } else if(window.matchMedia("(min-width: 1000px)").matches) {
        heightCalc = ((windowWidth * 0.21) / windowHeight) * 100;
      } else if(window.matchMedia("(min-width: 700px)").matches) {
        heightCalc = ((windowWidth * 0.19) / windowHeight) * 100;
      } else if(window.matchMedia("(min-width: 600px)").matches) {
        heightCalc = ((windowWidth * 0.2) / windowHeight) * 100;
      } else {
        heightCalc = ((windowWidth * 0.22) / windowHeight) * 100;
      }

      calcMarginV = ((96 - heightCalc) / 4);

    



      if(window.matchMedia("(max-width: 299px)").matches) {

        gameOverFontSize = '0.41em';

      if(maxHeight250.matches) {
        calcMarginV += 6.75;
      } else if(maxHeight299.matches) {
        calcMarginV += 7.5;
      }
        
      /*
        if(window.matchMedia("(max-width: 250px)").matches) {
          nomisText.style.top = '-2vh';

          nomisTextAlign = '-2vh';
        } else if(window.matchMedia("(max-width: 275px)").matches) {
          
          if(window.matchMedia("(max-height: 225px)").matches) {
            //nomisText.style.fontSize = '1.21em';
            nomisText.style.top = '-2vh';

            //nomisFontSize = '1.21em';
            nomisTextAlign = '-2vh';
          } else if(window.matchMedia("(max-height: 250px)").matches) {
            //nomisText.style.fontSize = '1.22em';
            nomisText.style.top = '-1.75vh';

            //nomisFontSize = '1.22em';
            nomisTextAlign = '-1.75vh';
          } else if(window.matchMedia("(max-height: 275px)").matches) {
            //nomisText.style.fontSize = '1.25em';
            nomisText.style.top = '-1.75vh';

            //nomisFontSize = '1.25em';
            nomisTextAlign = '-1.75vh';
          }


        } else {

          if(window.matchMedia("(max-height: 225px)").matches) {
            //nomisText.style.fontSize = '1.35em';
            nomisText.style.top = '-2.5vh';

            //nomisFontSize = '1.35em';
            nomisTextAlign = '-2.5vh';
          } else if(window.matchMedia("(max-height: 250px)").matches) {
            //nomisText.style.fontSize = '1.35em';
            nomisText.style.top = '-1.75vh';

            //nomisFontSize = '1.35em';
            nomisTextAlign = '-1.75vh';
          } else if(window.matchMedia("(max-height: 275px)").matches) {
            //nomisText.style.fontSize = '1.35em';
            nomisText.style.top = '-1.7vh';

            //nomisFontSize = '1.35em';
            nomisTextAlign = '-1.7vh';
          } else if(window.matchMedia("(max-height: 299px)").matches) {
            //nomisText.style.fontSize = '1.37em';
            nomisText.style.top = '-1.7vh';

            //nomisFontSize = '1.37em';
            nomisTextAlign = '-1.7vh';
          }

        }*/

      } else if(window.matchMedia("(min-width: 300px)").matches && window.matchMedia("(max-width: 399px)").matches) {
        
        levelTitle.style.fontSize = '0.67em';
        levelFontSize = '0.67em';

        if(window.matchMedia("(min-width: 332px)").matches) {
          gameOverFontSize = '0.56em';
        } else {
          gameOverFontSize = '0.5em';
        }
        

        if(maxHeight225.matches) {
          if(window.matchMedia("(max-width: 325px)").matches) {
            calcMarginV -= 2.16;
          } else if(window.matchMedia("(max-width: 350px)").matches) {
            calcMarginV -= 2.75;
          } else if(window.matchMedia("(max-width: 375px)").matches) {
            calcMarginV -= 3.5;
          } else {
            calcMarginV -= 4;
          }
          
        } else if(maxHeight250.matches) {
          calcMarginV -= 1.7;
        } else if(maxHeight275.matches) {
          calcMarginV -= 0.75;
        } else if(maxHeight299.matches) {
          calcMarginV += 1;
        } else if(maxHeight325.matches) {
          calcMarginV += 1;
        } else if(maxHeight350.matches) {
          calcMarginV += 1;
        } else if(maxHeight375.matches) {
          calcMarginV += 1;
        } else if(maxHeight399.matches) {
          calcMarginV += 1;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 400px)").matches && window.matchMedia("(max-width: 499px)").matches) {
        
        levelTitle.style.fontSize = '0.75em';
        levelFontSize = '0.75em';

        gameOverFontSize = '0.56em';

        if(maxHeight225.matches) {
          if(window.matchMedia("(max-width: 425px)").matches) {
            calcMarginV -= 5.75
          } else if(window.matchMedia("(max-width: 450px)").matches) {
            calcMarginV -= 6.67
          } else if(window.matchMedia("(max-width: 475px)").matches) {
            calcMarginV -= 7.2
          } else {
            calcMarginV -= 8.75
          }
          
        } else if(maxHeight250.matches) {
          calcMarginV -= 5.716;
        } else if(maxHeight275.matches) {
          calcMarginV -= 3.96;
        } else if(maxHeight299.matches) {
          calcMarginV -= 3;
        } else if(maxHeight325.matches) {
          calcMarginV -= 2;
        } else if(maxHeight350.matches) {
          calcMarginV -= 0.76;
        } else if(maxHeight375.matches) {
          calcMarginV -= 0.37;
        } else if(maxHeight399.matches) {
          calcMarginV -= 1.28;
        } else if(maxHeight425.matches) {
          calcMarginV -= 0.64;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 500px)").matches && window.matchMedia("(max-width: 599px)").matches) {
        
        levelTitle.style.fontSize = '0.84em';
        levelFontSize = '0.84em';

        gameOverFontSize = '0.56em';

        if(maxHeight225.matches) {
          if(window.matchMedia("(max-width: 525px)").matches) {
            calcMarginV -= 10.85
          } else if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 10.85
          } else if(window.matchMedia("(max-width: 575px)").matches) {
            calcMarginV = - 2.75
          } else {
            calcMarginV = - 4.25
          }
          
        } else if(maxHeight250.matches) {
          calcMarginV -= 9.516;
        } else if(maxHeight275.matches) {
          if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 6.66;
          } else {
            calcMarginV -= 7.46;
          }
        } else if(maxHeight299.matches) {
          if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 6.26;
          } else {
            calcMarginV -= 7.06;
          }
        } else if(maxHeight325.matches) {
          calcMarginV -= 4.76;
        } else if(maxHeight350.matches) {
          if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 3.27;
          } else {
            calcMarginV -= 3.77;
          }
        } else if(maxHeight375.matches) {
          if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 2.45;
          } else {
            calcMarginV -= 2.96;
          }
        } else if(maxHeight399.matches) {
          
          if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 1.88;
          } else {
            calcMarginV -= 2.2;
          }
        } else if(maxHeight425.matches) {
          if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 1.44;
          } else {
            calcMarginV -= 1.58;
          }
        } else if(maxHeight450.matches) {
          calcMarginV -= 1.28;
        } else if(maxHeight475.matches) {

          if(window.matchMedia("(max-width: 550px)").matches) {
            calcMarginV -= 0.58;
          } else {
            calcMarginV -= 0.84;
          }
        } else if(maxHeight499.matches) {
          calcMarginV -= 0.29;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 600px)").matches && window.matchMedia("(max-width: 699px)").matches) {
        
        levelTitle.style.fontSize = '0.96em';
        levelFontSize = '0.96em';

        gameOverFontSize = '0.56em';

        if(maxHeight225.matches) {
          if(window.matchMedia("(max-width: 625px)").matches) {
            calcMarginV = - 2
          } else if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV = - 3.4
          } else if(window.matchMedia("(max-width: 675px)").matches) {
            calcMarginV = - 4.8
          } else {
            calcMarginV = - 7.2
          }
          
        } else if(maxHeight250.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 9.967;
          } else {
            calcMarginV -= 10.967;
          }
        } else if(maxHeight275.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 7.66;
          } else {
            calcMarginV -= 9.28;
          }
        } else if(maxHeight299.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 6.96;
          } else {
            calcMarginV -= 7.46;
          }
        } else if(maxHeight325.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 4.76;
          } else {
            calcMarginV -= 5.76;
          }
        } else if(maxHeight350.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 3.84;
          } else {
            calcMarginV -= 4.17;
          }
        } else if(maxHeight375.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 2.84;
          } else {
            calcMarginV -= 3.14;
          }
        } else if(maxHeight399.matches) {
          
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 2.35;
          } else {
            calcMarginV -= 2.5;
          }
        } else if(maxHeight425.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 1.67;
          } else {
            calcMarginV -= 2.45;
          }
        } else if(maxHeight450.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 1.44;
          } else {
            calcMarginV -= 1.96;
          }
        } else if(maxHeight475.matches) {

          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 1.09;
          } else {
            calcMarginV -= 1.44;
          }
        } else if(maxHeight499.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 0.39;
          } else {
            calcMarginV -= 0.54;
          }
        } else if(maxHeight525.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 0.39;
          } else {
            calcMarginV -= 1.39;
          }
        } else if(maxHeight550.matches) {
          if(window.matchMedia("(max-width: 650px)").matches) {
            calcMarginV -= 0.16;
          } else {
            calcMarginV -= 0.48;
          }
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 700px)").matches && window.matchMedia("(max-width: 799px)").matches) {
        
        levelTitle.style.fontSize = '1.07em';
        levelFontSize = '1.07em';

        gameOverFontSize = '0.56em';

        if(maxHeight225.matches) {
          if(window.matchMedia("(max-width: 725px)").matches) {
            calcMarginV = - 6.2
          } else if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV = - 7.7
          } else if(window.matchMedia("(max-width: 775px)").matches) {
            calcMarginV = - 8.8
          } else {
            calcMarginV = - 9.9
          }
          
        } else if(maxHeight250.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 11.417;
          } else {
            calcMarginV -= 12.617;
          }
        } else if(maxHeight275.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 8.88;
          } else {
            calcMarginV -= 10.28;
          }
        } else if(maxHeight299.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 7.84;
          } else {
            calcMarginV -= 8.96;
          }
        } else if(maxHeight325.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 5.91;
          } else {
            calcMarginV -= 7.07;
          }
        } else if(maxHeight350.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 5.16;
          } else {
            calcMarginV -= 6.16;
          }
        } else if(maxHeight375.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 4.16;
          } else {
            calcMarginV -= 5.46;
          }
        } else if(maxHeight399.matches) {
          
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 3.75;
          } else {
            calcMarginV -= 4.54;
          }
        } else if(maxHeight425.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 2.72;
          } else {
            calcMarginV -= 3.51;
          }
        } else if(maxHeight450.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 2.51;
          } else {
            calcMarginV -= 3.07;
          }
        } else if(maxHeight475.matches) {

          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 1.96;
          } else {
            calcMarginV -= 2.84;
          }
        } else if(maxHeight499.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 1.54;
          } else {
            calcMarginV -= 2.39;
          }
        } else if(maxHeight525.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 1.64;
          } else {
            calcMarginV -= 2.20;
          }
        } else if(maxHeight550.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 0.72;
          } else {
            calcMarginV -= 1.28;
          }
        } else if(maxHeight575.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 0.48;
          } else {
            calcMarginV -= 1.28;
          }
        } else if(maxHeight599.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV -= 0.37;
          } else {
            calcMarginV -= 1.20;
          }
        } else if(maxHeight650.matches) {
          if(window.matchMedia("(max-width: 750px)").matches) {
            calcMarginV += 0;
          } else {
            calcMarginV -= 0.62;
          }
        } else if(maxHeight699.matches) {
          calcMarginV += 0.48;
        } else if(maxHeight799.matches) {
          calcMarginV += 0.48;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 800px)").matches && window.matchMedia("(max-width: 899px)").matches) {
        
        levelTitle.style.fontSize = '1.17em';
        levelFontSize = '1.17em';

        gameOverFontSize = '0.56em';

        if(maxHeight325.matches && window.matchMedia("(min-height: 300px)").matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 8.91;
          } else {
            calcMarginV -= 9.99;
          }
        } else if(maxHeight350.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 7.94;
          } else {
            calcMarginV -= 8.64;
          }
        } else if(maxHeight375.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 7.06;
          } else {
            calcMarginV -= 8.06;
          }
        } else if(maxHeight399.matches) {
          
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 6.48;
          } else {
            calcMarginV -= 7.16;
          }
        } else if(maxHeight425.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 5.16;
          } else {
            calcMarginV -= 6.16;
          }
        } else if(maxHeight450.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 4.84;
          } else {
            calcMarginV -= 5.25;
          }
        } else if(maxHeight475.matches) {

          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 3.96;
          } else {
            calcMarginV -= 4.34;
          }
        } else if(maxHeight499.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 3.84;
          } else {
            calcMarginV -= 4.39;
          }
        } else if(maxHeight525.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 2.64;
          } else {
            calcMarginV -= 3.07;
          }
        } else if(maxHeight550.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 2.24;
          } else {
            calcMarginV -= 3.28;
          }
        } else if(maxHeight575.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 1.98;
          } else {
            calcMarginV -= 2.78;
          }
        } else if(maxHeight599.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 1.88;
          } else {
            calcMarginV -= 2.72;
          }
        } else if(maxHeight650.matches) {
          if(window.matchMedia("(max-width: 850px)").matches) {
            calcMarginV -= 1;
          } else {
            calcMarginV -= 1.62;
          }
        } else if(maxHeight699.matches) {
          calcMarginV -= 0.84;
        } else if(maxHeight799.matches) {
          calcMarginV -= 0.54;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 900px)").matches && window.matchMedia("(max-width: 999px)").matches) {
        
        levelTitle.style.fontSize = '1.17em';
        levelFontSize = '1.17em';

        gameOverFontSize = '0.56em';

        if(maxHeight425.matches && window.matchMedia("(min-height: 400px)").matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 6.40;
          } else {
            calcMarginV -= 7.16;
          }
        } else if(maxHeight450.matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 5.34;
          } else {
            calcMarginV -= 6.20;
          }
        } else if(maxHeight475.matches) {

          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 4.96;
          } else {
            calcMarginV -= 5.34;
          }
        } else if(maxHeight499.matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 4.84;
          } else {
            calcMarginV -= 4.96;
          }
        } else if(maxHeight525.matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 3.64;
          } else {
            calcMarginV -= 4.44;
          }
        } else if(maxHeight550.matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 3.62;
          } else {
            calcMarginV -= 3.72;
          }
        } else if(maxHeight575.matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 2.98;
          } else {
            calcMarginV -= 3.28;
          }
        } else if(maxHeight599.matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 2.88;
          } else {
            calcMarginV -= 2.92;
          }
        } else if(maxHeight650.matches) {
          if(window.matchMedia("(max-width: 950px)").matches) {
            calcMarginV -= 1.67;
          } else {
            calcMarginV -= 2.12;
          }
        } else if(maxHeight699.matches) {
          calcMarginV -= 2.12;
        } else if(maxHeight799.matches) {
          calcMarginV -= 1.07;
        } else if(maxHeight899.matches) {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1000px)").matches && window.matchMedia("(max-width: 1099px)").matches) {
        
        levelTitle.style.fontSize = '1.35em';
        levelFontSize = '1.35em';

        gameOverFontSize = '0.56em';

        if(maxHeight525.matches && window.matchMedia("(min-height: 500px)").matches) {
          if(window.matchMedia("(max-width: 1050px)").matches) {
            calcMarginV -= 5.31;
          } else {
            calcMarginV -= 5.55;
          }
        } else if(maxHeight550.matches) {
          if(window.matchMedia("(max-width: 1050px)").matches) {
            calcMarginV -= 5.32;
          } else {
            calcMarginV -= 5.82;
          }
        } else if(maxHeight575.matches) {
          if(window.matchMedia("(max-width: 1050px)").matches) {
            calcMarginV -= 4.28;
          } else {
            calcMarginV -= 4.77;
          }
        } else if(maxHeight599.matches) {
          if(window.matchMedia("(max-width: 1050px)").matches) {
            calcMarginV -= 3.92;
          } else {
            calcMarginV -= 3.96;
          }
        } else if(maxHeight650.matches) {
          if(window.matchMedia("(max-width: 1050px)").matches) {
            calcMarginV -= 3.12;
          } else {
            calcMarginV -= 3.67;
          }
        } else if(maxHeight699.matches) {
          if(window.matchMedia("(max-width: 1050px)").matches) {
            calcMarginV -= 2.62;
          } else {
            calcMarginV -= 3.34;
          }
        } else if(maxHeight799.matches) {
          calcMarginV -= 1.77;
        } else if(maxHeight899.matches) {
          calcMarginV -= 0.54;
        } else if(maxHeight999.matches) {
          calcMarginV -= 0.27;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1100px)").matches && window.matchMedia("(max-width: 1199px)").matches) {
        
        levelTitle.style.fontSize = '1.40em';
        levelFontSize = '1.40em';

        gameOverFontSize = '0.56em';

        if(maxHeight525.matches && window.matchMedia("(min-height: 500px)").matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 6.51;
          } else {
            calcMarginV -= 7.07;
          }
        } else if(maxHeight550.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 6.16;
          } else {
            calcMarginV -= 6.62;
          }
        } else if(maxHeight575.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 5.28;
          } else {
            calcMarginV -= 5.84;
          }
        } else if(maxHeight599.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 4.56;
          } else {
            calcMarginV -= 4.84;
          }
        } else if(maxHeight650.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 4.12;
          } else {
            calcMarginV -= 4.54;
          }
        } else if(maxHeight699.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 2.62;
          } else {
            calcMarginV -= 3.34;
          }
        } else if(maxHeight799.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 1.92;
          } else {
            calcMarginV -= 2.45;
          }
        } else if(maxHeight899.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 1.72;
          } else {
            calcMarginV -= 2.37;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 0.92;
          } else {
            calcMarginV -= 1.37;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 0.35;
          } else {
            calcMarginV -= 0.35;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1150px)").matches) {
            calcMarginV -= 0.25;
          } else {
            calcMarginV -= 0;
          }
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      }  else if(window.matchMedia("(min-width: 1200px)").matches && window.matchMedia("(max-width: 1299px)").matches) {
        
        levelTitle.style.fontSize = '1.54em';
        levelFontSize = '1.54em';

        gameOverFontSize = '0.56em';

        if(maxHeight650.matches && window.matchMedia("(min-height: 600px)").matches) {
          if(window.matchMedia("(max-width: 1250px)").matches) {
            calcMarginV -= 4.96;
          } else {
            calcMarginV -= 5.20;
          }
        } else if(maxHeight699.matches) {
          if(window.matchMedia("(max-width: 1250px)").matches) {
            calcMarginV -= 3.72;
          } else {
            calcMarginV -= 4.09;
          }
        } else if(maxHeight799.matches) {
          if(window.matchMedia("(max-width: 1250px)").matches) {
            calcMarginV -= 2.62;
          } else {
            calcMarginV -= 2.98;
          }
        } else if(maxHeight899.matches) {
          if(window.matchMedia("(max-width: 1250px)").matches) {
            calcMarginV -= 1.98;
          } else {
            calcMarginV -= 2.62;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1250px)").matches) {
            calcMarginV -= 1.28;
          } else {
            calcMarginV -= 1.84;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1250px)").matches) {
            calcMarginV -= 0.35;
          } else {
            calcMarginV -= 0.35;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1250px)").matches) {
            calcMarginV -= 0.25;
          } else {
            calcMarginV -= 0;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1300px)").matches && window.matchMedia("(max-width: 1399px)").matches) {
        
        levelTitle.style.fontSize = '1.62em';
        levelFontSize = '1.62em';

        gameOverFontSize = '0.56em';

        if(maxHeight625.matches && window.matchMedia("(min-height: 600px)").matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 9.28;
          } else {
            calcMarginV -= 9.76;
          }
        } else if(maxHeight650.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 9.12;
          } else {
            calcMarginV -= 9.24;
          }
        } else if(maxHeight675.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 8.486;
          } else {
            calcMarginV -= 8.486;
          }
        } else if(maxHeight699.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 8.259;
          } else {
            calcMarginV -= 8.359;
          }
        } else if(maxHeight750.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 6.62;
          } else {
            calcMarginV -= 7.24;
          }
        } else if(maxHeight799.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 6.30;
          } else {
            calcMarginV -= 6.9;
          }
        } else if(maxHeight875.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 7.40;
          } else {
            calcMarginV -= 7.7;
          }
        } else if(maxHeight899.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 7.40;
          } else {
            calcMarginV -= 7.28;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 6.62;
          } else {
            calcMarginV -= 7.07;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 5.89;
          } else {
            calcMarginV -= 6.02;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 5.25;
          } else {
            calcMarginV -= 5;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 4.75;
          } else {
            calcMarginV -= 4.75;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 1350px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1400px)").matches && window.matchMedia("(max-width: 1499px)").matches) {
        
        levelTitle.style.fontSize = '1.84em';
        levelFontSize = '1.84em';

        gameOverFontSize = '0.56em';

        if(maxHeight750.matches && window.matchMedia("(min-height: 700px)").matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 7.77;
          } else {
            calcMarginV -= 8.08;
          }
        } else if(maxHeight799.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 7.16;
          } else {
            calcMarginV -= 7.28;
          }
        } else if(maxHeight875.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 7.77;
          } else {
            calcMarginV -= 7.84;
          }
        } else if(maxHeight899.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 7.51;
          } else {
            calcMarginV -= 7.58;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 6.40;
          } else {
            calcMarginV -= 7.28;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 5.89;
          } else {
            calcMarginV -= 6.02;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 5.75;
          } else {
            calcMarginV -= 5.5;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 4.75;
          } else {
            calcMarginV -= 4.75;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 1450px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1500px)").matches && window.matchMedia("(max-width: 1599px)").matches) {
        
        levelTitle.style.fontSize = '1.76em';
        levelFontSize = '1.76em';

        gameOverFontSize = '0.56em';

        if(maxHeight725.matches && window.matchMedia("(min-height: 700px)").matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 8.29;
          } else {
            calcMarginV -= 8.60;
          }
        } else if(maxHeight750.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 8.18;
          } else {
            calcMarginV -= 8.44;
          }
        } else if(maxHeight799.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 7.7;
          } else {
            calcMarginV -= 7.96;
          }
        } else if(maxHeight850.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 8.40;
          } else {
            calcMarginV -= 8.64;
          }
        } else if(maxHeight875.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 8.10;
          } else {
            calcMarginV -= 8.24;
          }
        } else if(maxHeight899.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 7.777;
          } else {
            calcMarginV -= 7.91;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 7.25;
          } else {
            calcMarginV -= 7.82;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 6.59;
          } else {
            calcMarginV -= 6.92;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 6.07;
          } else {
            calcMarginV -= 5.76;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 4.75;
          } else {
            calcMarginV -= 4.75;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else if(maxHeight1599.matches) {
          if(window.matchMedia("(max-width: 1550px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1600px)").matches && window.matchMedia("(max-width: 1699px)").matches) {
        
        levelTitle.style.fontSize = '1.88em';
        levelFontSize = '1.88em';

        gameOverFontSize = '0.56em';

        if(maxHeight825.matches && window.matchMedia("(min-height: 700px)").matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 9;
          } else {
            calcMarginV -= 9.46;
          }
        } else if(maxHeight850.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 8.96;
          } else {
            calcMarginV -= 9.32;
          }
        } else if(maxHeight875.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 8.54;
          } else {
            calcMarginV -= 8.91;
          }
        } else if(maxHeight899.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 8.35;
          } else {
            calcMarginV -= 8.507;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 7.7;
          } else {
            calcMarginV -= 7.77;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 6.59;
          } else {
            calcMarginV -= 6.92;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 6.07;
          } else {
            calcMarginV -= 5.76;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 4.75;
          } else {
            calcMarginV -= 5.75;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 4.72;
          } else {
            calcMarginV -= 5.32;
          }
        } else if(maxHeight1599.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else if(maxHeight1699.matches) {
          if(window.matchMedia("(max-width: 1650px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.72;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1700px)").matches && window.matchMedia("(max-width: 1799px)").matches) {
        
        levelTitle.style.fontSize = '1.96em';
        levelFontSize = '1.96em';

        gameOverFontSize = '0.56em';

        if(maxHeight825.matches && window.matchMedia("(min-height: 700px)").matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 9.62;
          } else {
            calcMarginV -= 10.09;
          }
        } else if(maxHeight850.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 9.58;
          } else {
            calcMarginV -= 9.79;
          }
        } else if(maxHeight875.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 9.16;
          } else {
            calcMarginV -= 9.397;
          }
        } else if(maxHeight899.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 8.867;
          } else {
            calcMarginV -= 9.097;
          }
        } else if(maxHeight950.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 8.4;
          } else {
            calcMarginV -= 8.76;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 7.98;
          } else {
            calcMarginV -= 8.24;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 7.07;
          } else {
            calcMarginV -= 7.62;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 6.47;
          } else {
            calcMarginV -= 6.32;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 5.55;
          } else {
            calcMarginV -= 6.16;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 5.39;
          } else {
            calcMarginV -= 5.44;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 5.28;
          } else {
            calcMarginV -= 5.34;
          }
        } else if(maxHeight1599.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 4.92;
          } else {
            calcMarginV -= 5.12;
          }
        } else if(maxHeight1699.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 4.04;
          } else {
            calcMarginV -= 4.32;
          }
        } else if(maxHeight1799.matches) {
          if(window.matchMedia("(max-width: 1750px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.51;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1800px)").matches && window.matchMedia("(max-width: 1899px)").matches) {
        
        levelTitle.style.fontSize = '2em';
        levelFontSize = '2em';

        gameOverFontSize = '0.56em';

        if(maxHeight925.matches && window.matchMedia("(min-height: 800px)").matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 8.96;
          } else {
            calcMarginV -= 9.334;
          }
        } else if(maxHeight950.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 8.96;
          } else {
            calcMarginV -= 9.16;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 8.424;
          } else {
            calcMarginV -= 8.734;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 7.66;
          } else {
            calcMarginV -= 8.014;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 6.97;
          } else {
            calcMarginV -= 6.92;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 5.75;
          } else {
            calcMarginV -= 6.20;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 5.39;
          } else {
            calcMarginV -= 5.44;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 5.16;
          } else {
            calcMarginV -= 5.44;
          }
        } else if(maxHeight1599.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 5.04;
          } else {
            calcMarginV -= 5.12;
          }
        } else if(maxHeight1699.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 4.28;
          } else {
            calcMarginV -= 4.54;
          }
        } else if(maxHeight1799.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.62;
          }
        } else if(maxHeight1899.matches) {
          if(window.matchMedia("(max-width: 1850px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.51;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 1900px)").matches && window.matchMedia("(max-width: 1999px)").matches) {
        
        levelTitle.style.fontSize = '2.04em';
        levelFontSize = '2.04em';

        gameOverFontSize = '0.56em';

        if(maxHeight925.matches && window.matchMedia("(min-height: 800px)").matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 9.84;
          } else {
            calcMarginV -= 9.91;
          }
        } else if(maxHeight950.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 9.66;
          } else {
            calcMarginV -= 9.80;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 9.0135;
          } else {
            calcMarginV -= 9.3040;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 8.04;
          } else {
            calcMarginV -= 8.294;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 7.044;
          } else {
            calcMarginV -= 7.07;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 6.55;
          } else {
            calcMarginV -= 6.67;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 6.14;
          } else {
            calcMarginV -= 6.19;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 5.62;
          } else {
            calcMarginV -= 5.67;
          }
        } else if(maxHeight1599.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 4.76;
          } else {
            calcMarginV -= 4.84;
          }
        } else if(maxHeight1699.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 4.28;
          } else {
            calcMarginV -= 4.54;
          }
        } else if(maxHeight1799.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.62;
          }
        } else if(maxHeight1899.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 3.84;
          } else {
            calcMarginV -= 3.91;
          }
        } else if(maxHeight1999.matches) {
          if(window.matchMedia("(max-width: 1950px)").matches) {
            calcMarginV -= 3.84;
          } else {
            calcMarginV -= 3.91;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 2000px)").matches && window.matchMedia("(max-width: 2099px)").matches) {
        
        levelTitle.style.fontSize = '2.12em';
        levelFontSize = '2.12em';

        gameOverFontSize = '0.56em';

        if(maxHeight925.matches && window.matchMedia("(min-height: 800px)").matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 10.127;
          } else {
            calcMarginV -= 10.407;
          }
        } else if(maxHeight950.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 9.827;
          } else {
            calcMarginV -= 10.636;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 9.4305;
          } else {
            calcMarginV -= 9.6210;
          }
        } else if(maxHeight1050.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 8.64;
          } else {
            calcMarginV -= 8.96;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 8.21;
          } else {
            calcMarginV -= 8.365;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 7.444;
          } else {
            calcMarginV -= 7.920;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 6.96;
          } else {
            calcMarginV -= 6.99;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 6.14;
          } else {
            calcMarginV -= 6.19;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 5.62;
          } else {
            calcMarginV -= 5.67;
          }
        } else if(maxHeight1599.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 4.86;
          } else {
            calcMarginV -= 5.04;
          }
        } else if(maxHeight1699.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 4.39;
          } else {
            calcMarginV -= 4.65;
          }
        } else if(maxHeight1799.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 4.44;
          } else {
            calcMarginV -= 4.62;
          }
        } else if(maxHeight1899.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 4.34;
          } else {
            calcMarginV -= 4.41;
          }
        } else if(maxHeight1999.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 3.84;
          } else {
            calcMarginV -= 4.41;
          }
        } else if(maxHeight2099.matches) {
          if(window.matchMedia("(max-width: 2050px)").matches) {
            calcMarginV -= 4;
          } else {
            calcMarginV -= 4.48;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } else if(window.matchMedia("(min-width: 2100px)").matches && window.matchMedia("(max-width: 2199px)").matches) {
        
        levelTitle.style.fontSize = '2.12em';
        levelFontSize = '2.12em';

        gameOverFontSize = '0.56em';

        if(maxHeight925.matches && window.matchMedia("(min-height: 800px)").matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 10.527;
          } else {
            calcMarginV -= 10.752;
          }
        } else if(maxHeight950.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 10.427;
          } else {
            calcMarginV -= 10.536;
          }
        } else if(maxHeight999.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 9.877;
          } else {
            calcMarginV -= 9.8750;
          }
        } else if(maxHeight1050.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 8.96;
          } else {
            calcMarginV -= 9.01;
          }
        } else if(maxHeight1099.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 8.27;
          } else {
            calcMarginV -= 8.486;
          }
        } else if(maxHeight1199.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 7.555;
          } else {
            calcMarginV -= 8.16;
          }
        } else if(maxHeight1299.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 7.07;
          } else {
            calcMarginV -= 7.10;
          }
        } else if(maxHeight1399.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 6.14;
          } else {
            calcMarginV -= 6.19;
          }
        } else if(maxHeight1499.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 5.72;
          } else {
            calcMarginV -= 5.77;
          }
        } else if(maxHeight1599.matches) {
          if(window.matchMedia("(max-width: 2250px)").matches) {
            calcMarginV -= 4.96;
          } else {
            calcMarginV -= 5.19;
          }
        } else if(maxHeight1699.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 4.89;
          } else {
            calcMarginV -= 5.10;
          }
        } else if(maxHeight1799.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 4.64;
          } else {
            calcMarginV -= 4.72;
          }
        } else if(maxHeight1899.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 4.54;
          } else {
            calcMarginV -= 4.58;
          }
        } else if(maxHeight1999.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 4.24;
          } else {
            calcMarginV -= 4.80;
          }
        } else if(maxHeight2099.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 4.2;
          } else {
            calcMarginV -= 4.68;
          }
        } else if(maxHeight2199.matches) {
          if(window.matchMedia("(max-width: 2150px)").matches) {
            calcMarginV -= 4.16;
          } else {
            calcMarginV -= 4.62;
          }
        } else {
          calcMarginV += 0;
        }

        if(window.matchMedia("(max-height: 225px)").matches) {
          // nomisText.style.fontSize = '1.6em';
          // nomisText.style.top = '0vh';

          //nomisFontSize = '1.6em';
          // nomisTextAlign = '0vh';
        } else if(window.matchMedia("(max-height: 250px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.75vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.75vh';
        } else if(window.matchMedia("(max-height: 275px)").matches) {
          // nomisText.style.fontSize = '1.35em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.35em';
          // nomisTextAlign = '-1.7vh';
        } else if(window.matchMedia("(max-height: 299px)").matches) {
          // nomisText.style.fontSize = '1.37em';
          // nomisText.style.top = '-1.7vh';

          // nomisFontSize = '1.37em';
          // nomisTextAlign = '-1.7vh';
        }
      } 

      document.querySelector('.center').style.cssText = `height: ${heightCalc}vh; top: ${calcMarginV}vh;`;
    }
    

    /*
    if(window.matchMedia("(max-width: 399px)").matches) {
      if(maxHeight250.matches) {
        winLevelLineHeight = '1.37';
      } else if(maxHeight275.matches) {
        winLevelLineHeight = '1.5';
      } else if(maxHeight299.matches) {
        winLevelLineHeight = '1.7';
      } else if(maxHeight325.matches) {
        winLevelLineHeight = '1.9';
      } else {
        winLevelLineHeight = '2.1';
      }
    } else if(window.matchMedia("(min-height: 400px)").matches) {
      winLevelLineHeight = '3';
    } else {
      winLevelLineHeight = '2.75';
    }
    */


   if(window.matchMedia("(max-height: 299px)").matches) {
    

    if(landscapeN.matches) {
      gameOverLineHeight = '2';
      winLevelLineHeight = '1.72';
      winLevelFontSize = '0.34em';
    } else {
      gameOverLineHeight = '2';
      winLevelLineHeight = '1.62';
      winLevelFontSize = '0.51em';
    }

    if(window.matchMedia("(min-width: 600px)").matches && landscapeN.matches) {
      winLevelLineHeight = '2.16';
      winLevelFontSize = '0.56em';
    } else if(window.matchMedia("(min-width: 500px)").matches && landscapeN.matches) {
      winLevelLineHeight = '2.16';
      winLevelFontSize = '0.4em';
    }

  } else if(window.matchMedia("(max-height: 399px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.14';
    winLevelLineHeight = '2.32';
    winLevelFontSize = '0.48em';
  } else if(window.matchMedia("(max-height: 499px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.32';
    winLevelLineHeight = '2.32';
    winLevelFontSize = '0.6em';
  } else if(window.matchMedia("(max-height: 599px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.32';
    winLevelLineHeight = '2.32';
    
    if(window.matchMedia("(min-width: 1000px)").matches && landscapeN.matches) {
      winLevelFontSize = '0.9em';
    } else {
      winLevelFontSize = '0.72em';
    }

    gameOverFontSize = winLevelFontSize;
  } else if(window.matchMedia("(max-height: 699px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.32';
    winLevelLineHeight = '2.32';
    
    if(window.matchMedia("(min-width: 1300px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.12em';
    } else if(window.matchMedia("(min-width: 1000px)").matches && landscapeN.matches) {
      winLevelFontSize = '0.9em';
    } else {
      winLevelFontSize = '0.72em';
    }

    gameOverFontSize = winLevelFontSize;
  } else if(window.matchMedia("(max-height: 799px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.62';
    winLevelLineHeight = '2.62';

    if(window.matchMedia("(min-width: 1300px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.20em';
    } else if(window.matchMedia("(min-width: 1100px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.07em';
    } else if(window.matchMedia("(min-width: 1000px)").matches && landscapeN.matches) {
      winLevelFontSize = '0.96em';
    } else {
      winLevelFontSize = '0.84em';
    }

    gameOverFontSize = winLevelFontSize;
  } else if(window.matchMedia("(max-height: 899px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.62';
    winLevelLineHeight = '2.62';
    
    
    if(window.matchMedia("(min-width: 1300px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.20em';
    } else if(window.matchMedia("(min-width: 1100px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.14em';
    } else if(window.matchMedia("(min-width: 1000px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.02em';
    } else {
      winLevelFontSize = '0.9em';
    }

    gameOverFontSize = winLevelFontSize;
  } else if(window.matchMedia("(max-height: 999px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.62';
    winLevelLineHeight = '2.62';
    
    if(window.matchMedia("(min-width: 1900px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.44em';
    } else if(window.matchMedia("(min-width: 1600px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.35em';
    } else if(window.matchMedia("(min-width: 1300px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.20em';
    } else if(window.matchMedia("(min-width: 1000px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.07em';
    } else {
      winLevelFontSize = '0.96em';
    }
    
    gameOverFontSize = winLevelFontSize;
  } else if(window.matchMedia("(max-height: 1099px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.84';
    winLevelLineHeight = '2.84';
    winLevelFontSize = '1.07em';

    if(window.matchMedia("(min-width: 1900px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.44em';
    } else if(window.matchMedia("(min-width: 1600px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.35em';
    } else if(window.matchMedia("(min-width: 1300px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.20em';
    } else {
      winLevelFontSize = '1.14em';
    }

    gameOverFontSize = winLevelFontSize;
  } else if(window.matchMedia("(max-height: 1199px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.84';
    winLevelLineHeight = '2.84';

    if(window.matchMedia("(min-width: 1900px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.44em';
    } else if(window.matchMedia("(min-width: 1600px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.35em';
    } else if(window.matchMedia("(min-width: 1300px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.20em';
    } else {
    winLevelFontSize = '1.17em';
    }

    gameOverFontSize = winLevelFontSize;
  } else if(window.matchMedia("(max-height: 1299px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.96';
    winLevelLineHeight = '2.96';
    
    if(window.matchMedia("(min-width: 1900px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.44em';
      gameOverFontSize = '1.44em';
    } else if(window.matchMedia("(min-width: 1600px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.35em';
      gameOverFontSize = '1.35em';
    } else {
      winLevelFontSize = '1.20em';
      gameOverFontSize = '1.27em';
    }

    
  } else if(window.matchMedia("(max-height: 1399px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.96';
    winLevelLineHeight = '2.96';
    
    if(window.matchMedia("(min-width: 1900px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.44em';
      gameOverFontSize = '1.44em';
    } else if(window.matchMedia("(min-width: 1600px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.35em';
      gameOverFontSize = '1.35em';
    } else {
      winLevelFontSize = '1.25em';
      gameOverFontSize = '1.34em';
    }
  } else if(window.matchMedia("(max-height: 1499px)").matches && landscapeN.matches) {
    gameOverLineHeight = '2.96';
    winLevelLineHeight = '2.96';
    
    if(window.matchMedia("(min-width: 1900px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.44em';
      gameOverFontSize = '1.44em';
    } else if(window.matchMedia("(min-width: 1600)").matches && landscapeN.matches) {
      winLevelFontSize = '1.35em';
      gameOverFontSize = '1.40em';
    } else {
      winLevelFontSize = '1.31em';
      gameOverFontSize = '1.40em';
    }

    
  } else if(window.matchMedia("(max-height: 1599px)").matches && landscapeN.matches) {
    gameOverLineHeight = '3';
    winLevelLineHeight = '2.96';

    if(window.matchMedia("(min-width: 1900px)").matches && landscapeN.matches) {
      winLevelFontSize = '1.44em';
    } else {
      winLevelFontSize = '1.39em';
    }
    
    gameOverFontSize = '1.44em';
  } else if(window.matchMedia("(max-height: 1699px)").matches && landscapeN.matches) {
    gameOverLineHeight = '3';
    winLevelLineHeight = '2.96';
    winLevelFontSize = '1.44em';
    gameOverFontSize = '1.51em';
  } else if(window.matchMedia("(max-height: 1799px)").matches && landscapeN.matches) {
    gameOverLineHeight = '3';
    winLevelLineHeight = '2.96';
    winLevelFontSize = '1.48em';
    gameOverFontSize = '1.54em';
  } else if(window.matchMedia("(max-height: 1899px)").matches && landscapeN.matches) {
    gameOverLineHeight = '3';
    winLevelLineHeight = '2.96';
    winLevelFontSize = '1.51em';
    gameOverFontSize = '1.58em';
  } else if(window.matchMedia("(max-height: 1999px)").matches && landscapeN.matches) {
    gameOverLineHeight = '3';
    winLevelLineHeight = '2.96';
    winLevelFontSize = '1.55em';
    gameOverFontSize = '1.62em';
  } else if(window.matchMedia("(max-height: 2099px)").matches && landscapeN.matches) {
    gameOverLineHeight = '3';
    winLevelLineHeight = '2.96';
    winLevelFontSize = '1.67em';
    gameOverFontSize = '1.75em';
  } else if(window.matchMedia("(max-height: 2199px)").matches && landscapeN.matches) {
    gameOverLineHeight = '3';
    winLevelLineHeight = '2.96';
    winLevelFontSize = '1.67em';
    gameOverFontSize = '1.75em';
  } else if(landscapeN.matches) {
    gameOverLineHeight = '2.64';
  }


    

    
    
      
  
      // document.querySelector('.win-center').style.cssText = `width: ${widthCalc}vw; left: ${calcMarginH}vw;`;

      // console.log(`HEIGHT CALC: ${heightCalc}`);
      // console.log(`CALC MARGIN V: ${calcMarginV}`);
 
      return [widthCalc, calcMarginH, nomisFontSize, levelFontSize, levelChoiceFontSize, calcMarginV, heightCalc, btnWidth, nomisTextAlign, winLevelLineHeight, gameOverFontSize, gameOverLineHeight, winLevelFontSize, portraitMarginV];
    
  }

// nomisBody.style.cssText = 'overflow-x: visible;';