import { Report } from 'notiflix/build/notiflix-report-aio';
import { refs } from '../reference/refs';
import { observer } from '../customFunction';
// import { articles } from '../fakeData';
import { fetchArticlesWithoutScroll } from '../customFunction';
import { renderArticlesList } from '../renders';

export function topicsBtnControl() {
  refs.topicsBtn.addEventListener('click', onTopicsBtnClick);
}

function onTopicsBtnClick(e) {
  e.preventDefault();
  refs.topicsList.classList.toggle('full-size');
  refs.topicsIconDown.classList.toggle('hidden');
  refs.topicsIconUp.classList.toggle('hidden');
}
//-----------
export function topicsControl() {
  refs.topicsList.addEventListener('click', onTopicClick);
}

function onTopicClick(e) {
  observer.unobserve(refs.guardEl); //it is hier only becouse of Fake backend(2 fetches)
  const targetTag = e.target.textContent;
  refs.contentList.innerHTML = '';
  console.log('in topic');
  fetchArticlesWithoutScroll()
    .then(response => {
      const tagPosts = response.data.posts.filter(article => {
        return article.tags.includes(targetTag);
      });
      renderArticlesList(tagPosts);
    })
    .catch(error => {
      Report.info(
        'Ah (',
        'Unfortunately my free backend limit has expired and you will not be able to view my beautiful website(((. We have to wait...',
        'Okay',
        {
          width: '320px',
          titleFontSize: '24px',
          messageFontSize: '18px',
        }
      );
      console.log(error);
    });
  const dpdButton = document.querySelector('.ui-selectmenu-text');
  dpdButton.textContent = 'Choose the country';
  // renderArticlesList(tagPosts);это надо для фейк дата
}
