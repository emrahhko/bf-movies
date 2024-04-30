/**
 * @jest-environment jsdom
 */

import { createImage } from './createImage.js';

describe('Create a movie element', () => {
    const movie = createImage({
        id: 1,
        dataName: 'spiderman',
        src: './assets/spiderman.jpg',
        title: 'Spiderman',
    });

    test('nodeName -> DIV', () => {
        expect(movie.nodeName).toEqual('DIV');
    });

    test('childElementCount -> 2', () => {
        expect(movie.childElementCount).toEqual(2);
    });
});
