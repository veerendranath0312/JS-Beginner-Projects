let result= '';

let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let calculate = document.querySelector('#calculate');
let message = document.getElementById('message');

calculate.addEventListener('click', () => {
  // read height from input
  let h = Number(height.value);
  
  // read weight from input
  let w = Number(weight.value);

  // calculate BMI
  let bmi = w / (h * h);

  result = 'Hey! Your BMI is: ' + bmi.toFixed(2) + ' 💕';
  // Print message on the screen
  message.textContent = result;

})