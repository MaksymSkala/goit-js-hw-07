import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
};

const galleryElements = galleryItems.map(createGalleryItem);
galleryList.append(...galleryElements);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true, 
  captionsData: 'alt', 
  captionDelay: 250, 
});
console.log(galleryItems);