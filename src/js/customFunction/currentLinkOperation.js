const links = document.querySelectorAll('.header-nav__link');

function setCurrentLink() {
  const currentPage = window.location.pathname.split('/').pop();
  //const links = document.querySelectorAll('.header-nav__link');

  links.forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
      link.classList.add('current-link');
    } else {
      link.classList.remove('current-link');
    }
  });
}
export function currentLinkOperation() {
  document.addEventListener('DOMContentLoaded', onCurrentLinkOperation);
}

function onCurrentLinkOperation() {
  setCurrentLink();

  //const links = document.querySelectorAll('.header-nav__link');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      const href = link.getAttribute('href');
      const lastPathSegment = href.split('/').pop();
      console.log('lastPathSegment', lastPathSegment);
      console.log('window.location.hash', window.location.hash);
      console.log('hash', window.location.hash);

      if (
        lastPathSegment === window.location.pathname.split('/').pop() &&
        !window.location.hash
      ) {
        event.preventDefault();
      }
    });
  });
}
