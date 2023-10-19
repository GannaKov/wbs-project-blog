'use strict';
import { articles } from './js/fakeData';
//------------------------
import axios from 'axios';

import { currentLinkOperation } from './js/customFunction';

//-----------------
const basePath = '/wbs-project-blog/';
const BACKENDURL = 'https://posts.free.beeceptor.com/posts';
const contentList = document.querySelector('.content-list');

// Перенаправляем на базовую страницу, если путь не указан
// if (
//   window.location.pathname === '/' ||
//   window.location.pathname === `${basePath}`
// ) {
//   window.location.href = `${basePath}index.html`;
//   console.log('hier');
// }
//-------------------

//---------------
currentLinkOperation();
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

  // console.log('contentMarkup', contentMarkup);
  contentList.insertAdjacentHTML('beforeend', contentMarkup);
  const readMoreLinks = document.querySelectorAll('.content-list__link');
  // console.log('readMoreLinks', readMoreLinks);
  readMoreLinkOperation(readMoreLinks);
}
//--------------------------------------read more

function readMoreLinkOperation(readMoreLinks) {
  readMoreLinks.forEach(link => {
    link.addEventListener('click', onClickReadMoreLink);
  });
}

function onClickReadMoreLink(e) {
  e.preventDefault();
  //cleanRender(refs.galleryEl);
  // fetchArticle(e.target.dataset.post);//ЭТО НАДО ДЛЯ ФЕТЧ!!!!! ТОЛЬКО НАДО ПЕРЕЙТИ НА АРТИКЛ ДЖС
  console.log('target', e.target.dataset.post);
  console.log('href', `./article-page.html?post=${e.target.dataset.post}`);
  window.location.href = `./article-page.html?post=${e.target.dataset.post}`;
}
//./article-page.html/${article.id}

renderArticlesList(articles); //УБРАТЬ ДЛЯ ФЕТЧ!!!!!!
//поменять ссылку на кнопку readmore
//-----------------aside--------
const topicLict = document.querySelector('.topics-list');
topicLict.addEventListener('click', onTopicClick);

function onTopicClick(e) {
  //e.preventDefault();

  const targetTag = e.target.textContent;

  const tagPosts = articles.filter(article => {
    return article.tags.includes(targetTag);
  });

  contentList.innerHTML = '';

  renderArticlesList(tagPosts);
}
