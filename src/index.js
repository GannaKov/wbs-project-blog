'use strict';
import axios from 'axios';
import { onListenerReadMore } from './js/controls';
import { currentLinkOperation } from './js/customFunction';
//-----------------
const basePath = '/wbs-project-blog/';
const BACKENDURL = 'https://posts.free.beeceptor.com/posts';
const contentList = document.querySelector('.content-list');
// function setCurrentLink() {
//   const currentPage = window.location.pathname.split('/').pop();
//   const links = document.querySelectorAll('.header-nav__link');

//   links.forEach(link => {
//     if (link.getAttribute('href').split('/').pop() === currentPage) {
//       link.classList.add('current-link');
//     } else {
//       link.classList.remove('current-link');
//     }
//   });
// }
// document.addEventListener('DOMContentLoaded', function () {
//   setCurrentLink();

//   const links = document.querySelectorAll('.header-nav__link');
//   links.forEach(link => {
//     link.addEventListener('click', function (event) {
//       const href = link.getAttribute('href');
//       const lastPathSegment = href.split('/').pop();

//       if (lastPathSegment === window.location.pathname.split('/').pop()) {
//         event.preventDefault();
//       }
//     });
//   });
// });

// Перенаправляем на базовую страницу, если путь не указан
if (
  window.location.pathname === '/' ||
  window.location.pathname === `${basePath}`
) {
  window.location.href = `${basePath}index.html`;
}
//-------------------

//---------------
currentLinkOperation();
//onListenerReadMore();//вернуть
contentControl(); //надо сделать export/import
//-------
//--------
function contentControl() {
  // console.log('in contentControl');
  fetchArticles()
    .then(response => {
      renderArticlesList(response.data);
    })
    .catch(error => {
      // console.log(error);
    });
}
async function fetchArticles() {
  // console.log('in fetchArticles');
  const response = await axios(`${BACKENDURL}`);
  return response;
}

function renderArticlesList(articles) {
  // console.log('articles in render', articles);
  const contentMarkup = articles
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
        href="${BACKENDURL}/${article.id}">Read more...</a> 
        <p class="content-list__comments">
       <span class="text-dashed"><span class="comments-quantity">${article.comments.length}</span>&nbsp;comments</span>
      </p>
    </li>`
    )
    .join('');
  // console.log('contentMarkup', contentMarkup);
  contentList.insertAdjacentHTML('beforeend', contentMarkup);
}
