import { refs } from '../reference/refs';

export function readMoreLinkOperation() {
  refs.contentList.addEventListener('click', onClickReadMoreLink);
}
function onClickReadMoreLink(e) {
  e.preventDefault();
  window.location.href = `./article-page.html?post=${e.target.dataset.post}`;
}
