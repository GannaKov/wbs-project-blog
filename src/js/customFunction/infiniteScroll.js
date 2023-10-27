import { refs } from '../reference/refs';
import { fetchArticles } from '../customFunction';
import { renderArticlesList } from '../renders';
export const optionsObserver = {
  root: null,
  rootMargin: '30px',
  threshold: 1,
};

export const observer = new IntersectionObserver(onLoad, optionsObserver);

function onLoad(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      refs.page += 1;
      console.log('page in infinite', refs.page);
      if (refs.totalPosts > 0 && refs.page > refs.totalPage) {
        // alert('You have reached the end of the list of articles.');
        alertMarkup = `<p class="alertText">You have reached the end of the list of articles.</p>`;
        refs.contentList.insertAdjacentHTML('beforeend', alertMarkup);
        observer.unobserve(refs.guardEl);
        return;
      }
      fetchArticles(refs.perPage, refs.page).then(response => {
        console.log('posts in infinite', response.data.posts);
        renderArticlesList(response.data.posts);
      });
    }
  });
}
