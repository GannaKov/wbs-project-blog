"/"!==window.location.pathname&&"/wbs-project-blog/"!==window.location.pathname||(window.location.href="/wbs-project-blog/index.html"),document.addEventListener("DOMContentLoaded",(function(){const e=window.location.pathname.split("/").pop(),t=document.querySelectorAll(".header-nav__link");t.forEach((t=>{t.getAttribute("href").split("/").pop()===e&&t.classList.add("current-link")})),t.forEach((t=>{t.addEventListener("click",(function(n){t.getAttribute("href").split("/").pop()===e&&(t.classList.add("current-link"),n.preventDefault())}))}))})),$("#country").selectmenu().selectmenu("menuWidget").addClass("overflow"),$(".dpd-select").selectmenu({width:250});!function(e,t){const n=t.map((e=>`<option value=${e}>${e} </option>`)).join("");e.insertAdjacentHTML("beforeend",n)}(document.querySelector(".dpd-select"),["Italy","Germany","Egypt","Greece","Sweden","Poland","Slovakia","Finland","Thailand","Philippines","Cuba","Mexico","Sweden","Austria"]);document.querySelector(".ui-selectmenu-text").textContent="Choose the country";
//# sourceMappingURL=contact-page.84ba84a0.js.map
