const panels = Array.from(document.querySelectorAll('.panel'));

panels.forEach(panel => {
  panel.addEventListener('click', openPanel);
  panel.addEventListener('transitionend', showText)
})

function openPanel() {
  this.classList.toggle('open');
}

function showText(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}