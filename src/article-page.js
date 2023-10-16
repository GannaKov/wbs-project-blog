'use strict';
import axios from 'axios';
const BASEURL = 'https://posts.free.beeceptor.com/posts';
const oneArticle = document.querySelector('.oneArticle-article');
const oneArticleComments = document.querySelector('.oneArticle-comments');

function getParameterByName(name, url) {
  //   console.log(name, url);
  if (!url) url = window.location.href;
  //   console.log(url);
  //   name = name.replace(/[[\]]/g, '\\$&');
  //   console.log(name);
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  //   console.log(results);
  if (!results) return null;
  if (!results[2]) return '';
  //   console.log(results[2].replace(/\+/g, ' '));
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function () {
  const postId = getParameterByName('post');
  if (postId) {
    fetchArticle(postId);
  }
});

async function fetchData(postId) {
  const response = await axios(`${BASEURL}/${postId}`);

  return response;
}
function fetchArticle(postId) {
  fetchData(postId).then(response => {
    articleMarkup(response.data);
  });
}
function articleMarkup(post) {
  const basicMarkup = `<h1 class="article__title">${post.title}</h1>
  <p class="article__date">${post.date}</p>
  <div class="article__internal">
   <img class="oneArticle__img" src=${post.url} alt="" />
        <div class="article__text">
        <p>${post.article}
         </p>
        </div>
      </div>`;

  oneArticle.innerHTML = basicMarkup;
  if (post.comments) {
    const commentsQuantityDiv = `<div class="comments-quantity-style"><p class="text-dashed "
          ><span class="comments-quantity">${post.comments.length}</span>&nbsp;comments:</p></div>`;
    oneArticleComments.innerHTML = commentsQuantityDiv;
  }
}
//---------------------------------------
