function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}$("#country").selectmenu().selectmenu("menuWidget").addClass("overflow"),$(".dpd-select").selectmenu({width:240});var dpd=document.querySelector(".dpd-select"),countries=["Italy","Germany","Egypt","Greece","Sweden","Poland","Slovakia","Finland","Thailand","Philippines","Cuba","Mexico","Spain","Austria"],sortedCountries=_toConsumableArray(countries).sort((function(r,e){return r.localeCompare(e)}));function renderMenu(r,e){var t=e.map((function(r){return"<option value=".concat(r,">").concat(r," </option>")})).join("");r.insertAdjacentHTML("beforeend",t)}renderMenu(dpd,sortedCountries);var dpdButton=document.querySelector(".ui-selectmenu-text");dpdButton.textContent="Choose the country";
//# sourceMappingURL=index.51b778d4.js.map