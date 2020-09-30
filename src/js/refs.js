import { createGalleryMarkup } from './markup.js';
import itemsDefault from './gallery-items.js';

export const refs = {
  galleryList: document.querySelector('.js-gallery'),
  galleryMarkup: createGalleryMarkup(itemsDefault),
  modal: document.querySelector('.js-lightbox'), //модальное окно
  modalCloseBtn: document.querySelector('button[data-action="close-lightbox"]'), //кнопка закрытия модального окна
  modalImage: document.querySelector('.lightbox__image'),
  modalOverlay: document.querySelector('.lightbox__overlay'), //серый фон в модалке
};
