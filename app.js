function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops function from running all together
    audio.currentTime = 0; // rewinds track to start to defeat lag
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip if its not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);


function tr909(){
  const bd01 = new Tone.Player('./assets/bd01.wav').toMaster();
  const hh01 = new Tone.Player('./assets/hh01.wav').toMaster();
  const cp01 = new Tone.Player('./assets/cp01.wav').toMaster();
  const ht01 = new Tone.Player('./assets/ht01.wav').toMaster();
  const rs01 = new Tone.Player('./assets/rs01.wav').toMaster();
  const sd01 = new Tone.Player('./assets/sd01.wav').toMaster();
  const rd01 = new Tone.Player('./assets/rd01.wav').toMaster();
  const oh01 = new Tone.Player('./assets/oh01.wav').toMaster();
  const lt01 = new Tone.Player('./assets/lt01.wav').toMaster();
  const techno = new Tone.Player('./assets/techno.mp3').toMaster();
  let index = 0;
  Tone.Transport.bpm.value = 136
  Tone.Transport.scheduleRepeat(repeat,'16n')

  Tone.Transport.start();

  function repeat(){
    let step = index % 16;
    let bd01Inputs = document.querySelector(`.bd01 input:nth-child(${step + 1})`);
    let hh01Inputs = document.querySelector(`.hh01 input:nth-child(${step + 1})`);
    let cp01Inputs = document.querySelector(`.cp01 input:nth-child(${step + 1})`);
    let ht01Inputs = document.querySelector(`.ht01 input:nth-child(${step + 1})`);
    let rs01Inputs = document.querySelector(`.rs01 input:nth-child(${step + 1})`);
    let sd01Inputs = document.querySelector(`.sd01 input:nth-child(${step + 1})`);
    let rd01Inputs = document.querySelector(`.rd01 input:nth-child(${step + 1})`);
    let oh01Inputs = document.querySelector(`.oh01 input:nth-child(${step + 1})`);
    let lt01Inputs = document.querySelector(`.lt01 input:nth-child(${step + 1})`);
    let technoInputs = document.querySelector(`.techno input:nth-child(${step + 1})`);

    if(bd01Inputs.checked){
      bd01.start();
    }
    if(hh01Inputs.checked){
      hh01.start();
    }
    if(cp01Inputs.checked){
      cp01.start();
    }
    if(ht01Inputs.checked){
      ht01.start();
    }
    if(rs01Inputs.checked){
      rs01.start();
    }
    if(sd01Inputs.checked){
      sd01.start();
    }
    if(rd01Inputs.checked){
      rd01.start();
    }
    if(oh01Inputs.checked){
      oh01.start();
    }
    if(lt01Inputs.checked){
      lt01.start();
    }
    if(technoInputs.checked){
      techno.start();
    }
    index++;
  }
}

tr909();