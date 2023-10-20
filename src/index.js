'use strict';
import { articles } from './js/fakeData';

//------------------------
import axios from 'axios';

import { currentLinkOperation } from './js/customFunction';
import { dpdOperation, dpdControl } from './js/customFunction';

//-----------------
const basePath = '/wbs-project-blog/';
const BACKENDURL = 'https://posts.free.beeceptor.com/posts';
const contentList = document.querySelector('.content-list');

if (
  window.location.pathname === '/' ||
  window.location.pathname === `${basePath}`
) {
  //window.location.href = `${basePath}index.html`;
  // console.log('window.location.href', window.location.href);
  // console.log('window.location.pathname', window.location.pathname);
  // console.log(`${window.location.pathname}index.html`);
  // console.log(`${window.location.href}index.html`);
  window.location.href = `${window.location.href}index.html`;
}
// if (window.location.pathname.endsWith('/')) {
//   // Перенаправить на главную страницу без "index.html" в URL
//   window.location.href = window.location.href.replace('/', '/index.html');
// }
//-------------------

//---------------
currentLinkOperation();
dpdOperation();
dpdControl();
function setOutput(event, data) {
  const selectedOptionValue = data.item.value;
}
//contentControl(); //надо сделать export/import ВЕРНУТЬ ДЛЯ ФЕТЧ!!!!!
//-------
//--------
function contentControl() {
  // console.log('in contentControl');
  fetchArticles()
    .then(response => {
      renderArticlesList(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
async function fetchArticles() {
  // console.log('in fetchArticles');
  const response = await axios(`${BACKENDURL}`);
  return response;
}

function renderArticlesList(articles) {
  let contentMarkup;
  if (articles.length > 0) {
    console.log('articles in render', articles);
    contentMarkup = articles
      .map(
        article =>
          `<li class="content-list__item"> <article class="article__wrapper">
        <h2 class="article__title">${article.title}</h2>
        <p class="article__date">${article.date}</p>
        <div class="article__internal">
          <img class="article__img" src=${article.url} alt=${article.title}/>
          <div class="article__text">
            <p>${article.article}</p> </div>
        </div>
      </article>
      <a class="content-list__link" data-post="${article.id}"
        href="">Read more...</a>
        <p class="content-list__comments">
       <span class="text-dashed"><span class="comments-quantity">${article.comments.length}</span>&nbsp;comments</span>
      </p>
    </li>`
      )
      .join('');
  } else {
    contentMarkup = `<li class="content-list__item"><p style="text-align:center">UPS... Nothing found!</p></li>`;
  }

  contentList.insertAdjacentHTML('beforeend', contentMarkup);
  // const readMoreLinks = document.querySelectorAll('.content-list__link');
  //readMoreLinkOperation(readMoreLinks);
}
//----------------read more
function readMoreLinkOperation() {
  contentList.addEventListener('click', onClickReadMoreLink);
}

// function readMoreLinkOperation(readMoreLinks) { Work!!!! back or not?
//   readMoreLinks.forEach(link => {
//     link.addEventListener('click', onClickReadMoreLink);
//   });
// }

function onClickReadMoreLink(e) {
  e.preventDefault();

  // fetchArticle(e.target.dataset.post);//ЭТО НАДО ДЛЯ ФЕТЧ!!!!! ТОЛЬКО НАДО ПЕРЕЙТИ НА АРТИКЛ ДЖС

  window.location.href = `./article-page.html?post=${e.target.dataset.post}`;
}
//./article-page.html/${article.id}

renderArticlesList(articles); //УБРАТЬ ДЛЯ ФЕТЧ!!!!!!
//поменять ссылку на кнопку readmore
readMoreLinkOperation(); //????????????
//-----------------aside--------
//---------------- topic -----
const topicLict = document.querySelector('.topics-list');

function onTopicClick(e) {
  //e.preventDefault();

  const targetTag = e.target.textContent;

  const tagPosts = articles.filter(article => {
    return article.tags.includes(targetTag);
  });
  contentList.innerHTML = '';
  //----
  const dpdButton = document.querySelector('.ui-selectmenu-text');
  dpdButton.textContent = 'Choose the country';
  //----
  renderArticlesList(tagPosts);
}
function topicsControl() {
  topicLict.addEventListener('click', onTopicClick);
}
topicsControl();
//------------------dpd contries

export function setOutput(event, data) {
  const selectedOptionValue = data.item.value;

  const countryChoicePosts = articles.filter(article => {
    return article.country.includes(selectedOptionValue);
  });
  contentList.innerHTML = '';
  window.location.href = `./index.html#${selectedOptionValue.toLowerCase()}`;
  renderArticlesList(countryChoicePosts);
}
