import { refs } from '../reference/refs';
// const topicsBtn = document.querySelector('.topics__button');
// const topicsList = document.querySelector('.topics-list');
// const topicsIconDown = document.querySelector('.topics__icon--down');
// const topicsIconUp = document.querySelector('.topics__icon--up');
export function topicsBtnControl() {
  refs.topicsBtn.addEventListener('click', onTopicsBtnClick);
}
function onTopicsBtnClick(e) {
  e.preventDefault();
  refs.topicsList.classList.toggle('full-size');
  refs.topicsIconDown.classList.toggle('hidden');
  refs.topicsIconUp.classList.toggle('hidden');
}
