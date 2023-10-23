import { refs } from '../reference/refs';

export function modalAuthControl() {
  refs.modalAuthOpenBtn.addEventListener('click', toggleModalAuth);
  refs.modalAuthCloseBtn.addEventListener('click', toggleModalAuth);
  refs.modalAuthRegBtn.addEventListener('click', onRegBtnClick);
  refs.modalFormAuth.addEventListener('submit', onFormAuthSubmit);
}

function toggleModalAuth() {
  refs.backdropAuth.classList.toggle('is-hidden');
  refs.bodyEl.classList.toggle('modal-open');
}
function onRegBtnClick(e) {
  e.preventDefault();
}
function onFormAuthSubmit(e) {
  e.preventDefault();
}
