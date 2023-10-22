const bodyEl = document.querySelector('body');
const backdropAuth = document.querySelector('.backdrop-auth-user');
const modalAuth = document.querySelector('.modal-auth');
const modalAuthOpenBtn = document.querySelector('.log_open_btn');
const modalAuthCloseBtn = document.querySelector('.modal-auth__button-close');

export function modalAuthControl() {
  modalAuthOpenBtn.addEventListener('click', toggleModalAuth);
  modalAuthCloseBtn.addEventListener('click', toggleModalAuth);
  //   modalAuthOpenBtn.addEventListener('click', onModalAuthOpenBtnClick);
  //   modalAuthCloseBtn.addEventListener('click', onModalAuthCloseBtnClick);
}
// function onModalAuthOpenBtnClick() {
//   backdropAuth.classList.remove('is-hidden');

//   bodyEl.classList.add('modal-open');
// }
// function onModalAuthCloseBtnClick() {
//   backdropAuth.classList.add('is-hidden');

//   bodyEl.classList.remove('modal-open');
// }
function toggleModalAuth() {
  console.log('in toggle');
  backdropAuth.classList.toggle('is-hidden');
  bodyEl.classList.toggle('modal-open');
}
