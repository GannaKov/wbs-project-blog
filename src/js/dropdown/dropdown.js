// import { $, jQuery } from 'jquery';
import { refs } from '../reference/refs';
import { renderArticlesList } from '../renders';
// import { articles } from '../fakeData';
import { fetchArticles } from '../customFunction';
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

export function dpdOperation() {
  $('#country').selectmenu().selectmenu('menuWidget').addClass('overflow');
  $('.dpd-select').selectmenu({
    width: 240,
  });

  renderMenu(refs.dpd, sortedCountries);
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
  $('.dpd-select').selectmenu({
    change: function (event, data) {
      setOutput(event, data);
    },
  });
}
function setOutput(event, data) {
  const selectedOptionValue = data.item.value;
  fetchArticles()
    .then(response => {
      const ountryChoicePosts = response.data.filter(article => {
        return article.country.includes(selectedOptionValue);
      });
      renderArticlesList(ountryChoicePosts);
    })
    .catch(error => {
      console.log(error);
    });

  refs.contentList.innerHTML = '';
  window.location.href = `./index.html#${selectedOptionValue.toLowerCase()}`;
  //renderArticlesList(countryChoicePosts); for fake data
}
