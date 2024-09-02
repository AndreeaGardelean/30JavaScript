const container = document.querySelector('.container');
const text = container.querySelector('p');
const walk = 50;

function addShadow(e) {
  const [width, height] = [container.offsetWidth, container.offsetHeight];

  let x = e.offsetX;
  let y = e.offsetY;

  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - walk / 2);
  const yWalk = Math.round((y / height * walk) - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 15px orange`;
};

container.addEventListener('mousemove', addShadow);