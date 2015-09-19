import {Document} from 'JsFile';
import parseLinkElement from './parseLinkElement';

/**
 *
 * @param params
 * @returns {*}
 * @private
 */
export default function (params = {}) {
    const node = params.node || {};
    const children = node && node.childNodes || [];
    let element;
    let result = Document.elementPrototype;
    result.properties.tagName = 'P';

    children.forEach((child) => {
        const {textContent = '', localName} = child;
        if (localName === 'a') {
            result.children.push(parseLinkElement(child));
        } else {
            element = Document.elementPrototype;
            element.properties.textContent = textContent;

            if (localName === 'strong') {
                element.style.fontWeight = 'bold';
            } else if (localName === 'emphasis') {
                element.style.fontStyle = 'italic';
            }

            result.children.push(element);
        }
    });

    if (!children[0] && node.textContent) {
        element = Document.elementPrototype;
        element.properties.textContent = node.textContent;
        result.children.push(element);
    }

    return result;
};