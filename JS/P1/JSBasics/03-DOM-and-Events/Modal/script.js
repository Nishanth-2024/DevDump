'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closemodal = document.querySelector('.close-modal');
let showModals = document.querySelectorAll('.show-modal');

function clickEventListener(e) {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

for (let index = 0; index < showModals.length; index++) {
  showModals[index].addEventListener('click', clickEventListener);
}

closemodal.addEventListener('click', clickEventListener);
overlay.addEventListener('click', clickEventListener);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
