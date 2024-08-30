const pressed = [];
const pattern = 'hello world';
const page = document.querySelector('.page');

function keyUp(e) {
  pressed.push(e.key);
  pressed.splice(-pattern.length - 1, pressed.length - pattern.length);
  
  if (pressed.join('') === pattern) {
    cornify_add();
  }
  
};

window.addEventListener('keyup', keyUp);