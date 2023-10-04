'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.header-nav__link');

  links.forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('current-link');
    }
  });
});
