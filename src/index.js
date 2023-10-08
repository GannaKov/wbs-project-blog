'use strict';
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/wbs-project-blog/'
) {
  window.location.href = '/wbs-project-blog/index.html';
}
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.header-nav__link');

  links.forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
      link.classList.add('current-link');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      if (link.getAttribute('href').split('/').pop() === currentPage) {
        link.classList.add('current-link');
        event.preventDefault();
      }
    });
  });

  // event.preventDefault();
});
//-------------------------
const dropdownCountry = document.querySelector('.');
