'use strict';
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
