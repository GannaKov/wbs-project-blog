import { refs } from '../reference/refs';

export function renderArticlesList(articles) {
  let contentMarkup;
  if (articles.length > 0) {
    contentMarkup = articles
      .map(
        article =>
          `<li class="content-list__item"> <article class="article__wrapper">
        <h2 class="article__title">${article.title}</h2>
        <p class="article__date">${article.date}</p>
        <div class="article__internal">
          <img class="article__img" src=${article.url} alt=${article.title}/>
          <div class="article__text">
            <p>${article.article}</p> </div>
        </div>
      </article>
      <a class="content-list__link" data-post="${article.id}"
        href="">Read more...</a>
        <p class="content-list__comments">
       <span class="text-dashed"><span class="comments-quantity">${article.comments.length}</span>&nbsp;comments</span>
      </p>
    </li>`
      )
      .join('');
  } else {
    contentMarkup = `<li class="content-list__item"><p style="text-align:center">UPS... Nothing found!</p></li>`;
  }

  refs.contentList.insertAdjacentHTML('beforeend', contentMarkup);
}

export function articleMarkup(post) {
  const basicMarkup = post
    ? `<h1 class="article__title">${post.title}</h1>
  <p class="article__date">${post.date}</p>
  <div class="article__internal">
   <img class="oneArticle__img" src=${post.url} alt="${post.title}" />
        <div class="oneArticle__text">
        <p>${post.article}
         </p>
        </div>
      </div>`
    : `<img class="oneArticle__img" src="https://lh3.googleusercontent.com/pw/ADCreHcClQVGI7nNzHleVGwCxYCt6wYC0tfD-OVcW0nzAFCaQG92vYts_uFpHNDZ1XduZJ_TXKumBRMMPTBhuU6sTp58lUXnlU84gS_mL8r8vfixh38htNbn=w2400" alt="" />
    <div class="article__text">
        <p>UPS.... somthing is wrong (</p>
        <p>Perhaps my limits</p>
        </div>`;

  refs.oneArticle.innerHTML = basicMarkup;
  const commentsQuantityMarkup = `<div class="comments-quantity-style"><p class="text-dashed "
          ><span class="comments-quantity">${post.comments.length}</span>&nbsp;comments:</p></div>`;
  refs.commentsQuantity.innerHTML = commentsQuantityMarkup;
  if (post.comments) {
    const commentsListMarkup = post.comments
      .map(
        comment =>
          `<li class="comments-item">
<p class="comments-author">${comment.author}</p>
<p class="comments-date">${comment.date}</p>
<div class="comments-text"><p>${comment.text}</p></div>
        </li> `
      )
      .join('');

    refs.commentsList.innerHTML = commentsListMarkup;
  }
}
