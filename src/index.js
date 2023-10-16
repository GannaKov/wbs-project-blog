'use strict';
import { onListenerReadMore } from './js/controls';
import { currentLinkOperation } from './js/customFunction';
//-----------------
const basePath = '/wbs-project-blog/';
// function setCurrentLink() {
//   const currentPage = window.location.pathname.split('/').pop();
//   const links = document.querySelectorAll('.header-nav__link');

//   links.forEach(link => {
//     if (link.getAttribute('href').split('/').pop() === currentPage) {
//       link.classList.add('current-link');
//     } else {
//       link.classList.remove('current-link');
//     }
//   });
// }
// document.addEventListener('DOMContentLoaded', function () {
//   setCurrentLink();

//   const links = document.querySelectorAll('.header-nav__link');
//   links.forEach(link => {
//     link.addEventListener('click', function (event) {
//       const href = link.getAttribute('href');
//       const lastPathSegment = href.split('/').pop();

//       if (lastPathSegment === window.location.pathname.split('/').pop()) {
//         event.preventDefault();
//       }
//     });
//   });
// });

// Перенаправляем на базовую страницу, если путь не указан
if (
  window.location.pathname === '/' ||
  window.location.pathname === `${basePath}`
) {
  window.location.href = `${basePath}index.html`;
}
//-------------------

//---------------
currentLinkOperation();
onListenerReadMore();
