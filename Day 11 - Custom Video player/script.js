const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenBtn = player.querySelector('.full-screen');

// -----------------------------------------------------------

function togglePlay() {
  video.paused ? video.play() : video.pause();
};

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
};

function skip() {
  const time = this.dataset.skip;
  video.currentTime += parseFloat(time);
  updateProgressBar();
};

function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
};

function handleRangeUpdate() {
  video[this.name] = this.value;
};

function scrub(e) {
  const position = e.offsetX;
  const newTime = (position / progress.offsetWidth ) * video.duration;
  progressBar.style.flexBasis = `${position}px`;
  video.currentTime = newTime;
};

function fullScreen() {
  const icon = player.requestFullscreen ? '🡦🡧' : '🡤🡥';
  if (document.fullscreenElement === player) {
    document.exitFullscreen();
  } else {
    player.requestFullscreen();
  }
  fullScreenBtn.textContent = icon;
};

// -----------------------------------------------------------

// event listener to play video
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

// event listener to change button when playing or paused
video.addEventListener('play', updateButton);
video.addEventListener('play', updateProgressBar);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', updateButton);

// event listener for skip buttons
skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});

// event listener for sound and playback speed range
// updated on mousemove and on click
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// event listener for progress bar click and dragging
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// adding full screen functionality
fullScreenBtn.addEventListener('click', fullScreen);

// update progress bar every second
setInterval(() => {
  updateProgressBar();
}, 1000);