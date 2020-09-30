import { refs } from './refs.js';
import { onCloseModal } from './close-modal';

function onOpenModal(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault(); //отмена перехода по ссылке

  refs.modal.classList.add('is-open'); // Открытие модального окна по клику на элементе галереи.
  refs.modalImage.src = evt.target.dataset.source; // Подмена значения атрибута src элемента img.lightbox__image.
  refs.modalImage.alt = evt.target.alt;

  window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

export { onOpenModal, onEscKeyPress };
