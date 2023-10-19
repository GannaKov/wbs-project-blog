$('#country').selectmenu().selectmenu('menuWidget').addClass('overflow');
$('.dpd-select').selectmenu({
  width: 240,
});

const dpd = document.querySelector('.dpd-select');
const countries = [
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
  'Spain',
  'Austria',
];

const sortedCountries = [...countries].sort((a, b) => a.localeCompare(b));
function renderMenu(el, arr) {
  const murkup = arr
    .map(item => `<option value=${item}>${item} </option>`)
    .join('');
  el.insertAdjacentHTML('beforeend', murkup);
}

renderMenu(dpd, sortedCountries);
//---
const dpdButton = document.querySelector('.ui-selectmenu-text');
dpdButton.textContent = 'Choose the country';
