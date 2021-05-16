// Selecting elements
const questions = document.querySelectorAll('.question');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const answers = document.querySelectorAll('.answer');

function showAnswer(i) {
  //1. Hide the border & background of the question
  questions[i].classList.toggle('hide-border');

  //2. toggle the hidden class for the answers whether it have or not !
  answers[i].classList.toggle('hidden');

  //3. Toggle the plus and minus buttons
  plus[i].classList.toggle('hidden');
  minus[i].classList.toggle('hidden');
}


for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    showAnswer(i);
  })
}