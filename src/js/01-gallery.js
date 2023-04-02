// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      
      alt="${description}"
    />
  </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
