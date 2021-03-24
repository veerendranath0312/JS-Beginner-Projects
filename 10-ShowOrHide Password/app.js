const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn');
const show = document.getElementById('show');
const hide = document.getElementById('hide');

btn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    show.style.display = 'none';
    hide.style.display = 'block';
  } else {
    passwordInput.type = 'password';
    show.style.display = 'block';
    hide.style.display = 'none';
  }
}, false);
