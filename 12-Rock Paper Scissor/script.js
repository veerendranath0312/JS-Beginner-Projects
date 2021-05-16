// Selecting Elements
const computerScoreEl = document.getElementById('computer-score');
const playerScoreEl = document.getElementById('player-score');

const rockEl = document.querySelector('.rock');
const paperEl = document.querySelector('.paper')
const scissorEl = document.querySelector('.scissor');

const show = document.querySelector('.description');
const playerOptionEl = document.getElementById('player-option');
const computerOptionEl = document.getElementById('computer-option');
const titleEl = document.getElementById('title');

const resetEl = document.getElementById('reset');

// startting conditions
const computerOptions = ['rock', 'paper', 'scissor'];
let computerScore = 0;
let playerScore = 0;

// Computer choice generator
const getComputerChoice = function () {
  show.classList.remove('hidden');
  let index = Math.trunc(Math.random() * computerOptions.length);
  return computerOptions[index];
}

// Win functionality
const winFunction = function () {
  titleEl.textContent = 'you win';
  titleEl.classList.remove('gray');
  titleEl.classList.add('green');
  titleEl.classList.remove('red');
  playerScore += 1;
  playerScoreEl.textContent = playerScore;
}

// Lose functionality
const loseFunction = function () {
  titleEl.textContent = 'you loose';
  titleEl.classList.remove('gray');
  titleEl.classList.remove('green');
  titleEl.classList.add('red');
  computerScore += 1;
  computerScoreEl.textContent = computerScore;
}

const drawFunction = function () {
  titleEl.textContent = 'draw';
  titleEl.classList.add('gray');
  titleEl.classList.remove('green');
  titleEl.classList.remove('red');
}

// selection options functionality

rockEl.addEventListener('click', function () {
  // generate random choice
  let computerChoice = getComputerChoice();

  playerOptionEl.textContent = 'rock';
  computerOptionEl.textContent = computerChoice;

  // Choose options;
  if (computerChoice === 'rock') {
    drawFunction();
  } else if (computerChoice === 'paper') {
    loseFunction();
  } else if (computerChoice === 'scissor') {
    winFunction();
  }
})

paperEl.addEventListener('click', function () {
  let computerChoice = getComputerChoice();

  playerOptionEl.textContent = 'paper';
  computerOptionEl.textContent = computerChoice;

  // choose options
  if (computerChoice === 'rock') {
    winFunction();
  } else if (computerChoice === 'paper') {
    drawFunction();
  } else if (computerChoice === 'scissor') {
    loseFunction();
  }
})

scissorEl.addEventListener('click', function () {
  let computerChoice = getComputerChoice();

  playerOptionEl.textContent = 'scissor';
  computerOptionEl.textContent = computerChoice;

  //Choose options
  if (computerChoice === 'rock') {
    loseFunction();
  } else if (computerChoice === 'paper') {
    winFunction();
  } else if (computerChoice === 'scissor') {
    drawFunction();
  }
})


// reset Functionality
resetEl.addEventListener('click', function () {
  computerScore = 0;
  playerScore = 0;
  computerScoreEl.textContent = 0;
  playerScoreEl.textContent = 0;
  show.classList.add('hidden');
})