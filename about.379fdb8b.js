!function(){"use strict";window.location.pathname.endsWith("/")&&(window.location.href="index.html"),document.addEventListener("DOMContentLoaded",(function(){var t=window.location.pathname.split("/").pop(),n=document.querySelectorAll(".header-nav__link");n.forEach((function(n){n.getAttribute("href").split("/").pop()===t&&n.classList.add("current-link")})),n.forEach((function(n){n.addEventListener("click",(function(e){n.getAttribute("href").split("/").pop()===t&&(n.classList.add("current-link"),e.preventDefault())}))}))}))}();
//# sourceMappingURL=about.379fdb8b.js.map
