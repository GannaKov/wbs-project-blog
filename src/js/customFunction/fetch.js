import axios from 'axios';
const BACKENDURL = 'https://posts.free.beeceptor.com/posts';

export async function fetchArticles(perPage, page) {
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
  //this fetch is needed only because of fake backend

  const response = await axios(`${BACKENDURL}`);

  return response;
}
