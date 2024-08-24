window.addEventListener('keydown', higlight);

function removeTransition(event) {
  if (event.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('highlited');
};

function higlight(event) {
  const keyAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  
  if (!keyAudio) {
    return;
  }

  keyAudio.currentTime = 0;
  keyAudio.play()

  const keyElement = document.querySelector(`div[data-key="${event.keyCode}"]`);
  keyElement.classList.add('highlited');

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
};