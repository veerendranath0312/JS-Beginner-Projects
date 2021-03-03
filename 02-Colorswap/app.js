// Chnage the background color of the container by choosing
// one of the other colors. You can either set the colors using
// CSS classes or add them with JavaScript

let container = document.querySelector('.container');

let button1 = document.getElementById('btn-1');
let button2 = document.getElementById('btn-2');
let button3 = document.getElementById('btn-3');

button1.addEventListener('click', () => {
  container.style.backgroundColor = 'orange';
})

button2.addEventListener('click', () => {
  container.style.backgroundColor = 'darkslateblue';
})

button3.addEventListener('click', () => {
  container.style.backgroundColor = 'green';
})