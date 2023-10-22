const topicsBtn = document.querySelector('.topics__button');
const topicsList = document.querySelector('.topics-list');
const topicsIconDown = document.querySelector('.topics__icon--down');
const topicsIconUp = document.querySelector('.topics__icon--up');
export function topicsBtnControl() {
  topicsBtn.addEventListener('click', onTopicsBtnClick);
}
function onTopicsBtnClick(e) {
  e.preventDefault();
  topicsList.classList.toggle('full-size');
  topicsIconDown.classList.toggle('hidden');
  topicsIconUp.classList.toggle('hidden');
}
