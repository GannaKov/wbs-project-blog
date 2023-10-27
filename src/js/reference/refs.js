export const refs = {
  bodyEl: document.querySelector('body'),
  links: document.querySelectorAll('.header-nav__link'), //????????? currentLink
  //-----------------
  contentList: document.querySelector('.content-list'),
  //-------------
  oneArticle: document.querySelector('.oneArticle-article'),
  oneArticleComments: document.querySelector('.oneArticle-comments'),
  commentsList: document.querySelector('.comments-list'),
  //   //---------
  topicsBtn: document.querySelector('.topics__button'),
  topicsList: document.querySelector('.topics-list'),
  topicsIconDown: document.querySelector('.topics__icon--down'),
  topicsIconUp: document.querySelector('.topics__icon--up'),
  //   // -----
  modalAuthOpenBtn: document.querySelector('.log_open_btn'),
  modalAuthCloseBtn: document.querySelector('.modal-auth__button-close'),
  modalFormAuth: document.querySelector('.form-auth'),
  modalAuthRegBtn: document.querySelector('.form-auth__button-reg'),
  backdropAuth: document.querySelector('.backdrop-auth-user'),
  //   //---
  dpd: document.querySelector('.dpd-select'),
  //---

  commentsQuantity: document.querySelector('.comments-quantity-style'),
  //----
  guardEl: document.querySelector('.guard'),
  //------------
  commentsForm: document.querySelector('.writeComment'),
  commentsFormTextarea: document.querySelector('.writeComment-textarea'),
  commentsFormInput: document.querySelector('.writeComment-input'),
  commentsFormBtn: document.querySelector('.writeComment-btn'),
  //----------
  perPage: 2,
  page: 0,
  totalPosts: undefined,
  totalPage: undefined,
};
// export let perPage = 2;
// export let page = 0;
// export let totalPosts;
// export let totalPage;
