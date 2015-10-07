import {Document} from 'JsFile';
import parseLinkElement from './parseLinkElement';

/**
 *
 * @param params
 * @returns {*}
 * @private
 */
export default function (params = {}) {
    let element;
    let attrValue;
    const node = params.node;
    const result = Document.elementPrototype;
    result.properties.tagName = 'P';

    if (!node) {
        return result;
    }

    const children = [].slice.call(node && node.childNodes || [], 0);
    children.forEach((child) => {
        const {textContent = '', localName, attributes = {}} = child;
        if (localName === 'a') {
            element = parseLinkElement(child);
        } else {
            element = Document.elementPrototype;
            element.properties.tagName = 'SPAN';
            element.properties.textContent = textContent;

            if (localName === 'strong') {
                element.style.fontWeight = 'bold';
            } else if (localName === 'emphasis') {
                element.style.fontStyle = 'italic';
            }
        }

        attrValue = attributes['xml:lang'] && attributes['xml:lang'].value;
        if (attrValue) {
            element.properties.lang = attrValue;
        }

        result.children.push(element);
    });

    attrValue = node.attributes && node.attributes['xml:lang'] && node.attributes['xml:lang'].value;
    if (attrValue) {
        result.properties.lang = attrValue;
    }

    if (!children[0] && node.textContent) {
        element = Document.elementPrototype;
        element.properties.textContent = node.textContent;
        result.children.push(element);
    }

    return result;
};