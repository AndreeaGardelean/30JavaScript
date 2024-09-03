const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

function updateData(data) {
  speed.textContent = data.coords.speed || 0;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
};

navigator.geolocation.watchPosition(data => { updateData(data) }, (err) => {
  console.err('Geolocation position not allowed in your browser')
});