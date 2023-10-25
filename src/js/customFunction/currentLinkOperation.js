import { refs } from '../reference/refs';
const basePath = '/wbs-project-blog/';

export function currentLinkOperation() {
  document.addEventListener('DOMContentLoaded', onCurrentLinkOperation);
}

function onCurrentLinkOperation() {
  setCurrentLink();

  refs.links.forEach(link => {
    link.addEventListener('click', function (event) {
      const href = link.getAttribute('href');
      const lastPathSegment = href.split('/').pop();
      //prevents the same link clicking
      if (
        lastPathSegment === window.location.pathname.split('/').pop() &&
        !window.location.hash
      ) {
        event.preventDefault();
      }
    });
  });
}

function setCurrentLink() {
  const currentPage = window.location.pathname.split('/').pop();

  refs.links.forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
      link.classList.add('current-link');
    } else {
      link.classList.remove('current-link');
    }
  });
}

export function addIndexHtmlToLink() {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === `${basePath}`
  ) {
    window.location.href = `${window.location.href}index.html`;
  }
}
