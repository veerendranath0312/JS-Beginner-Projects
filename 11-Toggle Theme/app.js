const icons = document.getElementById('icons');
const dayIcon = document.getElementById('day');
const nightIcon = document.getElementById('night');

function changeTheme() {

  // if body has an attribute with name data-theme then remove it
  // else set the attribute data-theme to body with  value light
  if (document.body.getAttribute('data-theme') === 'light') {
    document.body.removeAttribute('data-theme');
    dayIcon.style.display = 'block';
    nightIcon.style.display = 'none';

  } else {
    document.body.setAttribute('data-theme', 'light')
    dayIcon.style.display = 'none';
    nightIcon.style.display = 'block';
  }
}

icons.addEventListener('click', changeTheme);