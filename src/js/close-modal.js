import { refs } from './refs.js';
import { onEscKeyPress } from './open-modal';

function onCloseModal() {
  refs.modal.classList.remove('is-open');
  refs.modalImage.src = ''; // Очистка значения атрибута src элемента img.lightbox__image.
  refs.modalImage.alt = '';
  window.removeEventListener('keydown', onEscKeyPress);
}

function onBOverlayClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

export { onCloseModal, onBOverlayClick };
