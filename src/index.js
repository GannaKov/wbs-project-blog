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
$('#country').selectmenu().selectmenu('menuWidget').addClass('overflow');
$('.dpd-select').selectmenu({
  width: 250,
});
//--------------------
//-----------------
// console.log($('.dpd-select').selectmenu('option'));

// const options = $('.dpd-select').selectmenu('option');
// console.log(options);
// $('.dpd-select').selectmenu({
//   change: function (event, ui) {
//     console.log(event), console.log(event.currentTarget.textContent);
//   },
// });
// $('.dpd-select').selectmenu({
//   select: function (event, ui) {
//     console.log('2', event);
//   },
// });
//---------------
const dpd = document.querySelector('.dpd-select');
const items = [
  'Italy',
  'Germany',
  'Egypt',
  'Greece',
  'Sweden',
  'Poland',
  'Slovakia',
  'Finland',
  'Thailand',
  'Philippines',
  'Cuba',
  'Mexico',
  'Sweden',
  'Austria',
];

function renderMenu(el, arr) {
  const murkup = arr
    .map(item => `<option value=${item}>${item} </option>`)
    .join('');
  el.insertAdjacentHTML('beforeend', murkup);
}
renderMenu(dpd, items);
//---
const dpdButton = document.querySelector('.ui-selectmenu-text');
dpdButton.textContent = 'Choose the country';
