const subscribebtn = document.getElementById('subscribe');
const overlayEl = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

// Show modal function
const showModal = function () {
  modal.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
}

// hide modal
const hideModal = function () {
  modal.classList.add('hidden');
  overlayEl.classList.add('hidden');
}

subscribebtn.addEventListener('click', showModal);

// onClicking anywhere on the overlay close the modal
overlayEl.addEventListener('click', hideModal);

// onClicking the cross mark close the modal
closeBtn.addEventListener('click', hideModal);

// on keydown of escape key close the modal
document.addEventListener('keydown', function (e) {
  if(e.key === 'Escape'){
    if (!modal.classList.contains('hidden')) {
      hideModal();
    }
  }
})