import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchArticles } from '../customFunction';
import { renderArticlesList } from '../renders';

import { refs } from '../reference/refs';
import { observer } from '../customFunction';

export function contentControl() {
  refs.page = 1;

  console.log('page in contentControl', refs.page);
  fetchArticles(refs.perPage, refs.page)
    .then(response => {
      refs.totalPage = Math.ceil(response.data.totalPosts / refs.perPage);
      refs.totalPosts = response.data.totalPosts;

      renderArticlesList(response.data.posts); //for all posts response.data.posts
      observer.observe(refs.guardEl);
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
}
//---------------
