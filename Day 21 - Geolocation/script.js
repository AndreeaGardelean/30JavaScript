const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

function updateData(data) {
  speed.innerHTML = data.coords.speed || 0;
  const [x, y] = [data.longitude, data.latitude];
  arrow.style.transform = `rotate(${data.coords.heading})deg`;
  console.log(data.coords.heading)
};

navigator.geolocation.watchPosition(data => { updateData(data) }, (err) => {
  console.err('Geolocation position not allowed in your browser')
});