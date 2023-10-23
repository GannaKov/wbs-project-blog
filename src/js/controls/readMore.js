import axios from 'axios';
import { refs } from '../reference/refs';
// const BACKENDURL = 'https://posts.free.beeceptor.com/posts';
// const oneArticle = document.querySelector('.oneArticle-article');
// const oneArticleComments = document.querySelector('.oneArticle-comments');
// const commentsList = document.querySelector('.comments-list');
export function readMoreLinkOperation() {
  refs.contentList.addEventListener('click', onClickReadMoreLink);
}
function onClickReadMoreLink(e) {
  console.log('in index onClickReadMoreLink');
  e.preventDefault();

  // fetchArticle(e.target.dataset.post);//ЭТО НАДО ДЛЯ ФЕТЧ!!!!! ТОЛЬКО НАДО ПЕРЕЙТИ НА АРТИКЛ ДЖС

  window.location.href = `./article-page.html?post=${e.target.dataset.post}`;
}
// выше с артикле пейдж джис
//const readMoreLink = document.querySelector('.content-list__link-1');

//// const oneArticle = document.querySelector('.oneArticle-article');

// export function onListenerReadMore() {
//   readMoreLink.addEventListener('click', onReadMoreClick);
// }
// export function onClickReadMoreLink(e) {
//   console.log('in readme onClickReadMoreLink');
//   //e.preventDefault();
//   //cleanRender(refs.galleryEl);
//   fetchArticle(e.target.dataset.post);
// }
//----это я взяла со страницы atricle.js
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
async function fetchData(postId) {
  const BACKENDURL = 'https://posts.free.beeceptor.com/posts';
  const response = await axios(`${BACKENDURL}/${postId}`);

  return response;
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

  refs.oneArticle.innerHTML = basicMarkup;
  if (post.comments) {
    const commentsQuantityMarkup = `<div class="comments-quantity-style"><p class="text-dashed "
          ><span class="comments-quantity">${post.comments.length}</span>&nbsp;comments:</p></div>`;
    refs.oneArticleComments.innerHTML = commentsQuantityMarkup;
    const commentsListMarkup = post.comments.map(
      comment => `<li class="comments-item">
<p class="comments-author">${comment.author}</p>
<p class="comments-date">${comment.date}</p>
<div class="comments-text"><p>${comment.text}</p></div>
        </li> `
    );
    refs.commentsList.innerHTML = commentsListMarkup;
  }
}

// до сюда
// function onReadMoreClick(event) {
//   event.preventDefault();
//   const postId = 1;

//   window.location.href = `./article-page.html?post=${postId}`;
//   readMoreLink.removeEventListener('click', onReadMoreClick);
// }

//// function onReadMoreClick(event) {
//   event.preventDefault();
//   const postId = 1;
//   fetchArticle(postId);
//   readMore.removeEventListener('click', onReadMoreClick);
//}
// async function fetchData(postId) {
//   const response = await axios(`${BASEURL}/${postId}`);
//   console.log(response.data);
//   return response;
// }
// function fetchArticle(postId) {
//   fetchData(postId).then(response => {
//     articleMarkup(response.data);
//   });
// }
// function articleMarkup(post) {
//   console.log('in articleMarkup ');
//   const basicMarkup = `<h1 class="article__title">${post.title}</h1>
//   <p class="article__date">${post.date}</p>
//   <div class="article__internal">
//    <img class="oneArticle__img" src=${post.url} alt="" />
//         <div class="article__text">
//         <p>${post.article}
//          </p>
//         </div>
//       </div>`;
//   console.log('basic', basicMarkup);
//   oneArticle.innerHTML = basicMarkup;
//// }
