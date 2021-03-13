const imageContainer = document.querySelector('#image-container');
const password = document.querySelector('#password');

let letterCount = 0;
password.addEventListener('input', () => {
  let str = password.value;
  let letterCount = str.length;

  if (letterCount > 12) {
    imageContainer.style.filter = 'blur(0)';
  } else {
    imageContainer.style.filter = `blur(${12 - letterCount}px)`
  }
})