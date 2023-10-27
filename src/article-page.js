'use strict';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { modalAuthControl } from './js/controls';
import { articleMarkup } from './js/renders';
import { fetchOneArticle } from './js/customFunction';
import { refs } from './js/reference/refs';

modalAuthControl();
oneArticlePageOperation();
commentsFormControl();

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

export function commentsFormControl() {
  refs.commentsFormTextarea.addEventListener(
    'click',
    onCommentsFormTextareaClick
  );
  refs.commentsFormTextarea.addEventListener(
    'input',
    onCommentsFormTextareaInput
  );
  refs.commentsForm.addEventListener('submit', onCommentsFormSubmit);

  document.addEventListener('click', onDocumentClick);
}

function onCommentsFormTextareaClick(e) {
  console.log('atr', refs.commentsFormBtn.getAttributes);
  refs.commentsFormBtn.classList.remove('writeComment-btn--hidden');

  refs.commentsFormInput.classList.remove('writeComment-input--hidden');
}

function onCommentsFormTextareaInput(e) {
  refs.commentsFormBtn.removeAttribute('disabled');
  autoResize(refs.commentsFormTextarea);
}
function autoResize(textarea) {
  // textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
function onDocumentClick(e) {
  if (!refs.commentsForm.contains(e.target)) {
    refs.commentsFormBtn.classList.add('writeComment-btn--hidden');
    refs.commentsFormInput.classList.add('writeComment-input--hidden');
  }
}
function onCommentsFormSubmit(e) {
  e.preventDefault();
  refs.commentsFormInput.value = '';
  refs.commentsFormTextarea.value = '';
}
