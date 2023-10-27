import axios from 'axios';
const BACKENDURL = 'https://posts.free.beeceptor.com/posts';

export async function fetchArticles(perPage, page) {
  console.log('in fetchArticles', page);
  const response = await axios(
    `${BACKENDURL}?currentPage=${page}&limit=${perPage}`
  );

  return response;
}

export async function fetchOneArticle(postId) {
  const response = await axios(`${BACKENDURL}/${postId}`);

  return response;
}
export async function fetchArticlesWithoutScroll() {
  console.log('in fetchArticlesWithoutScroll');
  const response = await axios(`${BACKENDURL}`);

  return response;
}
