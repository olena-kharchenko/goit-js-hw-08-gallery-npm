import { refs } from './js/refs.js';
import { onOpenModal } from './js/open-modal.js';
import { onCloseModal, onBOverlayClick } from './js/close-modal.js';

refs.galleryList.insertAdjacentHTML('beforeend', refs.galleryMarkup);
refs.galleryList.addEventListener('click', onOpenModal);
refs.modalCloseBtn.addEventListener('click', onCloseModal);
refs.modalOverlay.addEventListener('click', onBOverlayClick);

// var ghpages = require('gh-pages');
// ghpages.publish(
//   'dist',
//   {
//     branch: 'gh-pages',
//     repo: 'https://github.com/olena-kharchenko/goit-js-hw-08-gallery-npm',
//   },
//   callback,
// );
