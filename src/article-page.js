'use strict';
import axios from 'axios';
const BASEURL = 'https://posts.free.beeceptor.com/posts';
const oneArticle = document.querySelector('.oneArticle-article');
const oneArticleComments = document.querySelector('.oneArticle-comments');
const commentsList = document.querySelector('.comments-list');
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

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// document.addEventListener('DOMContentLoaded', function () {
//   const postId = getParameterByName('post');
//   if (postId) {
//     fetchArticle(postId);
//   }
// });

const postId = getParameterByName('post');
if (postId) {
  fetchArticle(postId);
}

async function fetchData(postId) {
  const response = await axios(`${BASEURL}/${postId}`);

  return response;
}
function fetchArticle(postId) {
  fetchData(postId)
    .then(response => {
      articleMarkup(response.data);
    })
    .catch(error => {
      articleMarkup(undefined);
      console.log(error);
    });
}
function articleMarkup(post) {
  const basicMarkup = post
    ? `<h1 class="article__title">${post.title}</h1>
  <p class="article__date">${post.date}</p>
  <div class="article__internal">
   <img class="oneArticle__img" src=${post.url} alt="" />
        <div class="article__text">
        <p>${post.article}
         </p>
        </div>
      </div>`
    : `<img class="oneArticle__img" src="https://lh3.googleusercontent.com/pw/ADCreHcClQVGI7nNzHleVGwCxYCt6wYC0tfD-OVcW0nzAFCaQG92vYts_uFpHNDZ1XduZJ_TXKumBRMMPTBhuU6sTp58lUXnlU84gS_mL8r8vfixh38htNbn=w2400" alt="" />
    <div class="article__text">
        <p>UPS.... somthing is wrong (</p>
        <p>Perhaps my limits</p>
        </div>`;

  oneArticle.innerHTML = basicMarkup;
  if (post.comments) {
    const commentsQuantityMarkup = `<div class="comments-quantity-style"><p class="text-dashed "
          ><span class="comments-quantity">${post.comments.length}</span>&nbsp;comments:</p></div>`;
    oneArticleComments.innerHTML = commentsQuantityMarkup;
    const commentsListMarkup = post.comments.map(
      comment => `<li class="comments-item">
<p class="comments-author">${comment.author}</p>
<p class="comments-date">${comment.date}</p>
<div class="comments-text"><p>${comment.text}</p></div>
        </li> `
    );
    commentsList.innerHTML = commentsListMarkup;
  }
}
//---------------------------------------
