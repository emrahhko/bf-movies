import { dom } from '../dom.js';
import { filterIamgesHandler } from '../handlers/filterImagesHandler.js';

export const keyUpEvent = () => {
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value;
        filterIamgesHandler(value);
    });
};
