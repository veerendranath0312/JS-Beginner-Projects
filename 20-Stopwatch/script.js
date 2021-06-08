const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');
const milliEl = document.querySelector('.milli');

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let hour = (min = sec = milli = 0);
let timer;

start.addEventListener('click', function () {
  timer = setInterval(() => {
    milli = milli + 10;

    if (milli <= 999) {
      milliEl.textContent = String(milli).padStart(3, 0);
    }

    if (milli === 1000) {
      milli = 0;
      sec = sec + 1;
      secEl.textContent = String(sec).padStart(2, 0);
      if (sec === 59) {
        sec = 0;
        min = min + 1;
        minEl.textContent = String(min).padStart(2, 0);
        if (min === 59) {
          min = 0;
          hour = hour + 1;
          hourEl.textContent = String(hour).padStart(2, 0);
        }
      }
    }
  }, 10);
});

// Pause function
pause.addEventListener('click', function () {
  clearInterval(timer);
  hourEl.textContent = String(hour).padStart(2, 0);
  minEl.textContent = String(min).padStart(2, 0);
  secEl.textContent = String(sec).padStart(2, 0);
  milliEl.textContent = String(milli).padStart(3, 0);
});

reset.addEventListener('click', function () {
  clearInterval(timer);
  hour = min = sec = milli = 0;

  hourEl.textContent = '00';
  minEl.textContent = '00';
  secEl.textContent = '00';
  milliEl.textContent = '000';
});
