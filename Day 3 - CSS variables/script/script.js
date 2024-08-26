const input = document.querySelectorAll(`input`);


function updateVariable() {
  const suffix = this.dataset.sizing || '';
  
  document.documentElement.style.setProperty(`--${this.dataset.type}`, this.value + suffix);
};


input.forEach(element => {
  element.addEventListener('change', updateVariable);
});


