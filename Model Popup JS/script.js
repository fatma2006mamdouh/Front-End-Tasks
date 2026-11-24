'use strict';

const btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const showModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btns.length; i++){
    const btn = btns[i];

    btn.addEventListener('click',showModel);
    overlay.addEventListener('click',closeModel)
    closeBtn.addEventListener('click',closeModel)
}

document.addEventListener('keydown', function (e) {

    if (e.key == 'Escape' && !modal.classList.contains('.hidden'))
        closeModel();
})

