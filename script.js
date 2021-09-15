const FullScreen = document.querySelector('.fullscreen');
const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const btn_cont = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.btn');
const btn_notes = document.querySelector('.btn-notes');
const btn_letters = document.querySelector('.btn-letters');
let mousedown = false;

btn_cont.addEventListener('click', (event) =>{
   if(!event.target.classList.contains('btn-active')){
btns.forEach((el => {
    if(el.classList.contains('btn-active')){
        el.classList.remove('btn-active');
    }
}))
event.target.classList.add('btn-active');
   }
   if(btn_letters.classList.contains('btn-active')){
    pianoКeys.forEach(el => {
    el.classList.add('change');
    })
    } else{
      pianoКeys.forEach(el => {
        el.classList.remove('change');
        })
    }
});

let pianoPlay = (event) => {
  mousedown = true;
    if(event.target.classList.contains('piano-key')) {
        const note = document.getElementById(event.target.dataset.note);
        note.currentTime = 0;
        note.play();
        pianoКeys.forEach((el) => {
            if(el.classList.contains('piano-key-active')) {
              el.classList.remove('piano-key-active');
            }
          });
        event.target.classList.add('piano-key-active');
    }   
  }
piano.addEventListener('mousedown', pianoPlay);
  piano.addEventListener('mouseover',(event) => {
      if(event.target.classList.contains('piano-key') && mousedown === true) {
          const note = document.getElementById(event.target.dataset.note);
          note.currentTime = 0;
          note.play();
          pianoКeys.forEach((el) => {
              if(el.classList.contains('piano-key-active')) {
                el.classList.remove('piano-key-active');
              }
            });
          event.target.classList.add('piano-key-active');
      }   
    });
  window.addEventListener('mouseup', () => {
  mousedown = false;
  pianoКeys.forEach(key => key.classList.remove('piano-key-active'));
  })
  

window.addEventListener('keydown', (event) => {
const audio = document.querySelector(`audio[data-code="${event.code}"]`);
const key = document.querySelector(`.piano-key[data-code="${event.code}"]`);
if(!key.classList.contains('piano-key-active')){
if(!audio) return;
audio.currentTime = 0;
audio.play();
key.classList.add('piano-key-active');
}
  });

  window.addEventListener('keyup', () => {
    pianoКeys.forEach(key => key.classList.remove('piano-key-active'));
  })



FullScreen.addEventListener('click',toggleScreen);
function toggleScreen(){
    if(!document.fullscreenElement){
   document.documentElement.requestFullscreen(); 
} else {
    document.exitFullscreen();
}
}