document.addEventListener("DOMContentLoaded",(function(){!function(){const t=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav__link").forEach((e=>{e.getAttribute("href").split("/").pop()===t?e.classList.add("current-link"):e.classList.remove("current-link")}))}();document.querySelectorAll(".header-nav__link").forEach((t=>{t.addEventListener("click",(function(e){t.getAttribute("href").split("/").pop()===window.location.pathname.split("/").pop()&&e.preventDefault()}))}))})),"/"!==window.location.pathname&&"/wbs-project-blog/"!==window.location.pathname||(window.location.href="/wbs-project-blog/index.html");
//# sourceMappingURL=contact-page.1659a9c2.js.map