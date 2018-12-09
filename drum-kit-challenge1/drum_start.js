function playSound(evt){
   var audio = document.querySelector('audio[data-key="'+ evt.keyCode +'"]');
   var key = document.querySelector('.key[data-key="'+ evt.keyCode +'"]');
   if(!audio) return;
   audio.currentTime = 0; // rewind
   audio.play();
   key.classList.add('playing');
    
}
 
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform')return;
    this.classList.remove('playing');
} 

window.addEventListener('keydown',playSound);