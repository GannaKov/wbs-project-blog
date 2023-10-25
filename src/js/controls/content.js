import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchArticles } from '../customFunction';
import { renderArticlesList } from '../renders';

export function contentControl() {
  console.log('in contentControl');
  fetchArticles()
    .then(response => {
      renderArticlesList(response.data);
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
