var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequire48a2;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},e.parcelRequire48a2=i);const a={id:1,title:"Amasing travel to Spain",date:"21 August 2023",url:"https://lh3.googleusercontent.com/pw/ADCreHfKj_suRPMwFQNJyKtXn6CpjpOgPM2QPRxIAC6_kpjxp2WBmEnyTyVrHATNUxG-PbfhBovsJUylKknwcf9t8LzJ_5IfpcOGuITVCx8oYPQyarSs825-=w2400",article:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet veritatis hic eaque vero beatae ducimus pariatur delectus dolores accusantium praesentium, saepe accusamus voluptatem sed iusto itaque sequi repellendus dolor. <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet veritatis hic eaque vero beatae ducimus pariatur delectus dolores accusantium praesentium, saepe accusamus voluptatem sed iusto itaque sequi repellendus dolor.Aghl saepe accusamus voluptatem sed iusto itaque sequi repellendus dolor. <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet veritatis hic eaque vero beatae ducimus pariatur delectus dolores accusantium praesentium, saepe accusamus voluptatem sed iusto itaque sequi repellendus dolor.Asaepe accusamus voluptatem sed iusto itaque sequi repellendus dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br><br>Magni amet veritatis hic eaque vero beatae ducimus pariatur delectus dolores accusantium praesentium, saepe accusamus voluptatem sed iusto itaque sequi repellendus dolor.",likes:7,comments:[{author:"Jhon",date:"29 August 2023",text:"Consectetur, adipisicing elit. Ratione excepturi obcaecati eveniet omnis sequi fuga saepe iste! Ratione culpa temporibus."},{author:"Alina",date:"15 September 2023",text:" Veniam omnis quasi adipisci atque officia!"},{author:"Andrea",date:"09 October 2023",text:"Officia, unde. Atque expedita explicabo sapiente. Quis dolore accusamus assumenda, illo laboriosam iste repellendus quos atque."}]};i("2shzp");var o=i("ffciR");const n=document.querySelector(".oneArticle-article"),u=document.querySelector(".comments-quantity-style"),c=document.querySelector(".comments-list");function r(e){const t=e?`<h1 class="article__title">${e.title}</h1>\n  <p class="article__date">${e.date}</p>\n  <div class="article__internal">\n   <img class="oneArticle__img" src=${e.url} alt="" />\n        <div class="oneArticle__text">\n        <p>${e.article}\n         </p>\n        </div>\n      </div>`:'<img class="oneArticle__img" src="https://lh3.googleusercontent.com/pw/ADCreHcClQVGI7nNzHleVGwCxYCt6wYC0tfD-OVcW0nzAFCaQG92vYts_uFpHNDZ1XduZJ_TXKumBRMMPTBhuU6sTp58lUXnlU84gS_mL8r8vfixh38htNbn=w2400" alt="" />\n    <div class="article__text">\n        <p>UPS.... somthing is wrong (</p>\n        <p>Perhaps my limits</p>\n        </div>';if(n.innerHTML=t,e.comments){const t=`<div class="comments-quantity-style"><p class="text-dashed "\n          ><span class="comments-quantity">${e.comments.length}</span>&nbsp;comments:</p></div>`;u.innerHTML=t;const s=e.comments.map((e=>`<li class="comments-item">\n<p class="comments-author">${e.author}</p>\n<p class="comments-date">${e.date}</p>\n<div class="comments-text"><p>${e.text}</p></div>\n        </li> `)).join("");c.innerHTML=s}}(0,o.modalAuthControl)(),function(e,t){t||(t=window.location.href);const s=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);s&&s[2]&&decodeURIComponent(s[2].replace(/\+/g," "))}("post"),r(a);
//# sourceMappingURL=article-page.8ff2425c.js.map
