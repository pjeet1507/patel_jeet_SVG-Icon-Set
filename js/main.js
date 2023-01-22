const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const next = document.querySelector('#next');
const last = document.querySelector('#last');
const headsets = document.querySelector('#headsets');
const drum = document.querySelector('#drum');
const guitar = document.querySelector('#guitar');
const volume = document.querySelector('#volume');
const mute = document.querySelector('#mute');
const save = document.querySelector('#save');

function logID() {
  console.log("you clicked " + this.id);
}

play.addEventListener('click', logID);
pause.addEventListener('click', logID) 
next.addEventListener('click', logID) 
last.addEventListener('click', logID) 
headsets.addEventListener('click', logID) 
drum.addEventListener('click', logID) 
guitar.addEventListener('click', logID) 
volume.addEventListener('click', logID) 
mute.addEventListener('click', logID) 
save.addEventListener('click', logID) 


//i tried to combine it but it did not work so this is my finall solution


