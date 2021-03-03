let colors = ['#013460', '#1c7664', '#cb3840'];

let btn = document.getElementById('btn');
let body = document.querySelector('body');

btn.addEventListener('click', () => {
  let index = Math.floor(Math.random() * colors.length);
  console.log(index);
  body.style.background = colors[index];
})