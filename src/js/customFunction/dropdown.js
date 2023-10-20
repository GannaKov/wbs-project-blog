// import { $, jQuery } from 'jquery';
import { setOutput } from '../../../src/index.js';
('use strict');
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

const dpd = document.querySelector('.dpd-select');

export function dpdOperation() {
  $('#country').selectmenu().selectmenu('menuWidget').addClass('overflow');
  $('.dpd-select').selectmenu({
    width: 240,
  });
  renderMenu(dpd, sortedCountries);
  const dpdButton = document.querySelector('.ui-selectmenu-text');
  dpdButton.textContent = 'Choose the country';
}

function renderMenu(el, arr) {
  const markup = arr
    .map(item => `<option value=${item}>${item} </option>`)
    .join('');

  el.insertAdjacentHTML('beforeend', markup);
}

//---------------------- change

export function dpdControl() {
  // dpd.addEventListener('change', setOutput);
  $('.dpd-select').selectmenu({
    change: function (event, data) {
      setOutput(event, data);
    },
  });
  // $('.dpd-select').selectmenu('refresh');
}
