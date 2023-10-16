import axios from 'axios';
const BASEURL = 'https://posts.free.beeceptor.com/posts';

const readMore = document.querySelector('.content-list__link-1');
console.log(readMore);
export function onListenerReadMore() {
  readMore.addEventListener('click', onReadMoreClick);
}

export function onReadMoreClick(event) {
  //event.preventDefault();
  const postId = 1;
  fetchArticle(postId);
  readMore.removeEventListener('click', onReadMoreClick);
}
async function fetchArticle(postId) {
  const response = await axios(`${BASEURL}/${postId}`);
  console.log(response);
  return response;
}
