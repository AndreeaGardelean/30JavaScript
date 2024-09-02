const triggers = document.querySelectorAll('.cool li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');

  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active')
    }
  }, 150);

  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  background.style.transform = `translate(${dropdownCoords.left - navCoords.left}px, ${dropdownCoords.top - navCoords.top}px)`;

  background.style.height = `${dropdownCoords.height}px`;
  background.style.width = `${dropdownCoords.width}px`;
};

function handleLeave() {
    this.classList.remove('trigger-enter');
  
  setTimeout(() => {
    if (!this.classList.contains('trigger-enter')) {
      this.classList.remove('trigger-enter-active')
    };
  }, 150);
  
  background.classList.remove('open');
};

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', handleEnter);
});

triggers.forEach(trigger => {
  trigger.addEventListener('mouseleave', handleLeave);
});