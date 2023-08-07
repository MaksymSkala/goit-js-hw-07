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
  image.dataset.source = original;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
};

const galleryElements = galleryItems.map(createGalleryItem);
galleryList.append(...galleryElements);
console.log(galleryItems);

galleryList.addEventListener('click', event => {
    event.preventDefault(); 
    const target = event.target;
    
    if (target.classList.contains('gallery__image')) {
      const largeImageUrl = target.dataset.source;
      const instance = basicLightbox.create(`<img src="${largeImageUrl}" alt="${target.alt}">`);
      instance.show();
    }
  });

 