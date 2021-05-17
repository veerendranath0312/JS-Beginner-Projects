// selecting references
const titleEl = document.querySelector('.title');
const eventContainerEl = document.querySelector('.event-container');

const keyEl = document.getElementById('key');
const keyCodeEl = document.getElementById('key-code');
const codeEl = document.getElementById('code');

// on key pressed the function is executed and which key is clicked is shown on the screen
document.addEventListener('keydown', function (event) {
  titleEl.classList.add('hidden');
  eventContainerEl.classList.remove('hidden');

  keyEl.textContent = event.key;
  keyCodeEl.textContent = event.keyCode;
  codeEl.textContent = event.code;
});