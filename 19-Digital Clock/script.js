const time = document.getElementById('time');
const timePeriod = document.querySelector('.time-period');
const date = document.querySelector('.date');

let today, hour, min;

setInterval(() => {
  today = new Date();
  hour = today.getHours();
  min = String(today.getMinutes()).padStart(2, '0');
  const sec = String(today.getSeconds()).padStart(2, '0');

  time.textContent = `${hour}:${min}:${sec}`;
}, 1000);

if (hour >= 0 && hour < 12) {
  timePeriod.textContent = 'Morning';
} else if (hour >= 12 && hour < 6) {
  timePeriod.textContent = 'Afternoon';
} else {
  timePeriod.textContent = 'Evening';
}

const options = {
  day: 'numeric',
  month: 'long',   // (or) 'numeric' (or) 'short'
  year: 'numeric',
  weekday: 'short',  // (or) 'short'
}

// We need to get the locale language from the browser
const locale = navigator.language;
const intlDate = new Intl.DateTimeFormat(locale, options).format(today);
date.textContent = intlDate;