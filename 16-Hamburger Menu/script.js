const hamBtn = document.querySelector('.ham');
const menu = document.querySelector('.main-menu');

hamBtn.addEventListener('click', function () {
  menu.classList.toggle('hidden');
})