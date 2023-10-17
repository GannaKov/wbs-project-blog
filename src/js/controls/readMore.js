//// import axios from 'axios';
//// const BASEURL = 'https://posts.free.beeceptor.com/posts';

//const readMoreLink = document.querySelector('.content-list__link-1');

//// const oneArticle = document.querySelector('.oneArticle-article');

// export function onListenerReadMore() {
//   readMoreLink.addEventListener('click', onReadMoreClick);
// }
function onClickReadMoreLink(e) {
  //e.preventDefault();
  //cleanRender(refs.galleryEl);
  fetchMovies(e.target.dataset.page);
}
//----это я взяла со страницы atricle.js

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
