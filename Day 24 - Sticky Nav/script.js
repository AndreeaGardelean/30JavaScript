const nav = document.querySelector('#main');
const logo = nav.querySelector('.logo');
const navPos = nav.offsetTop;

function stick() {
  const scroll = this.scrollY;
  if (scroll >= navPos) {
    nav.classList.add('fixed-pos');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    nav.classList.remove('fixed-pos');
    document.body.style.paddingTop = '0';
  }
};

window.addEventListener('scroll', stick);