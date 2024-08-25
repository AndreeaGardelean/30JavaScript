setMinutes();
setHours();

function setSeconds() {
  const date = new Date();
  const seconds = date.getSeconds();
  
  if (seconds == 0) {
    setMinutes();
  }
  const secondsDegree = ((seconds / 60) * 360) + 90;

  const secondsPointer = document.querySelector('.second-pointer');
  secondsPointer.style.transform = `rotate(${secondsDegree}deg)`;
};

function setMinutes() {
  const date = new Date();
  const minutes = date.getMinutes();
  if (minutes == 0) {
    setHours();
  }

  const minutesDegree = ((minutes / 60) * 360) + 90;
  const minutesPointer = document.querySelector('.minute-pointer');
  minutesPointer.style.transform = `rotate(${minutesDegree}deg)`;
};

function setHours() {
  const date = new Date();
  const hour = date.getHours();

  const hourDegree = ((hour / 60) * 360) + 90;
  const hoursPointer = document.querySelector('.hour-pointer');
  hoursPointer.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setSeconds, 1000);