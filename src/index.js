'use strict';
//import { articles } from './js/fakeData';
// import 'notiflix/dist/notiflix-3.2.6.min.css';

import { currentLinkOperation, addIndexHtmlToLink } from './js/customFunction';
import { dpdOperation, dpdControl } from './js/dropdown';
import {
  modalAuthControl,
  topicsBtnControl,
  readMoreLinkOperation,
  topicsControl,
  contentControl,
} from './js/controls';

//-------------------
addIndexHtmlToLink();
currentLinkOperation();
contentControl();
dpdOperation();
dpdControl();

topicsBtnControl();
topicsControl();

modalAuthControl();

readMoreLinkOperation();
