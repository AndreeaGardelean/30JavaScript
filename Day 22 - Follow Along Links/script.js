// get all the triggers, in this case all links
const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function addHighlight(e) {
  const coords = this.getBoundingClientRect();
  highlight.style.height = `${coords.height}px`;
  highlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.x}px, ${coords.y + window.scrollY}px)`;
  console.log(coords)
};

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', addHighlight);
});