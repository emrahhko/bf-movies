/* eslint-disable linebreak-style */
/**
 * Create image.
 *
 * @param {object} image - The image object data.
 * @returns {HTMLElement} The image element.
 */

export const createImage = (image) => {
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    imageBox.id = image.id;

    const img = document.createElement('img');
    img.src = image.src;
    img.title = image.title;

    const title = document.createElement('h6');
    title.innerText = image.title;

    imageBox.append(img, title);
    return imageBox;
};
