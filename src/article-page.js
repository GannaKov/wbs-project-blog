'use strict';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { modalAuthControl } from './js/controls';
import { articleMarkup } from './js/renders';
import { fetchOneArticle } from './js/customFunction';

modalAuthControl();
oneArticlePageOperation();
//---------------------------------------

function oneArticlePageOperation() {
  const postId = getParameterByName('post');
  fetchOneArticle(postId)
    .then(response => {
      articleMarkup(response.data);
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
  //articleMarkup(article_1); //for Fake data !!!
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;

  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
