const time = document.getElementById('time');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let totalTime = 1500, timer, min, sec;

// hide functionality
const toggleFunction = function () {
  startBtn.classList.toggle('hidden');
  pauseBtn.classList.toggle('hidden');
}

// Reset functionality;
const resetFunction = function () {
  // Setting time to initial value
  totalTime = 1500;
  // clear the interval
  clearInterval(timer);

  // At the time of resetting if the pause buttion contains hidden class
  // then the start button should not toggle
  if (!pauseBtn.classList.contains('hidden')) {
    toggleFunction();
  }
}

// Start the timer 
startBtn.addEventListener('click', function () {

  // hide startBtn and show pauseBtn
  toggleFunction();

  timer = setInterval(() => {
    min = String(Math.trunc(totalTime / 60)).padStart(2, 0);
    sec = String(totalTime % 60).padStart(2, 0);

    time.textContent = `${min}:${sec}`;

    if (totalTime === 0) {
      clearInterval(timer);
    }
  
    totalTime = totalTime - 1;
  }, 1000);
});


// Pause the timer
pauseBtn.addEventListener('click', function () {
  if (totalTime !== -1) {
    clearInterval(timer);
    time.textContent = `${min}:${sec}`;

    toggleFunction();
  }
});

// Reset the timer
resetBtn.addEventListener('click', function () {
  resetFunction();
  time.textContent = `25:00`;
})