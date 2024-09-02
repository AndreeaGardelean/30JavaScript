const videos = [...document.querySelectorAll('[data-time')];

const times = videos.map(video => {
  return video.dataset.time;
});

// Given minutes and seconds add them all together into seconds
const seconds = times.map(time => {
  const [minutes, seconds] = time.split(':').map(parseFloat);
  return (minutes * 60) + seconds;
}).reduce((total, seconds) => {
  return total + seconds;
}, 0);

// convert the total seconds to hours, minutes, seconds
let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

document.querySelector('.hours').innerHTML = `${hours} hours,`;
document.querySelector('.mins').innerHTML = `${minutes} minutes,`;
document.querySelector('.secs').innerHTML = `${secondsLeft} seconds`;

console.log(hours, minutes, secondsLeft);

