!function(){"use strict";"/"!==window.location.pathname&&"/wbs-project-blog/"!==window.location.pathname||(window.location.href="/wbs-project-blog/index.html"),document.addEventListener("DOMContentLoaded",(function(){var e=window.location.pathname.split("/").pop(),t=document.querySelectorAll(".header-nav__link");t.forEach((function(t){t.getAttribute("href").split("/").pop()===e&&t.classList.add("current-link")})),t.forEach((function(t){t.addEventListener("click",(function(n){t.getAttribute("href").split("/").pop()===e&&(t.classList.add("current-link"),n.preventDefault())}))}))})),$("#country").selectmenu().selectmenu("menuWidget").addClass("overflow"),$(".dpd-select").selectmenu({width:250});var e,t,n=document.querySelector(".dpd-select");e=n,t=["Italy","Germany","Egypt","Greece","Sweden","Poland","Slovakia","Finland","Thailand","Philippines","Cuba","Mexico","Sweden","Austria"].map((function(e){return"<option value=".concat(e,">").concat(e," </option>")})).join(""),e.insertAdjacentHTML("beforeend",t),document.querySelector(".ui-selectmenu-text").textContent="Choose the country"}();
//# sourceMappingURL=contact-page.211f60e6.js.map
