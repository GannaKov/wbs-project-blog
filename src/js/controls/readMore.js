import { refs } from '../reference/refs';

export function readMoreLinkOperation() {
  refs.contentList.addEventListener('click', onClickReadMoreLink);
}
function onClickReadMoreLink(e) {
  console.log('in index onClickReadMoreLink on readmore');
  e.preventDefault();
  window.location.href = `./article-page.html?post=${e.target.dataset.post}`;
}
