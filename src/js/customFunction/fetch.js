import axios from 'axios';
const BACKENDURL = 'https://posts.free.beeceptor.com/posts';

export async function fetchArticles() {
  // console.log('in fetchArticles');
  const response = await axios(`${BACKENDURL}`);

  return response;
}

export async function fetchOneArticle(postId) {
  const response = await axios(`${BACKENDURL}/${postId}`);

  return response;
}
