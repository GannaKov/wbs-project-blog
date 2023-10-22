const bodyEl = document.querySelector('body');
const backdropAuth = document.querySelector('.backdrop-auth-user');
const modalAuth = document.querySelector('.modal-auth');
const modalAuthOpenBtn = document.querySelector('.log_open_btn');
const modalAuthCloseBtn = document.querySelector('.modal-auth__button-close');

export function modalAuthControl() {
  modalAuthOpenBtn.addEventListener('click', onModalAuthOpenBtnClick);
  modalAuthCloseBtn.addEventListener('click', onModalAuthCloseBtnClick);
}
function onModalAuthOpenBtnClick() {
  backdropAuth.classList.remove('is-hidden');

  bodyEl.classList.add('modal-open');
}
function onModalAuthCloseBtnClick() {
  backdropAuth.classList.add('is-hidden');

  bodyEl.classList.remove('modal-open');
}
