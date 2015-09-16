import {Document} from 'JsFile';

/**
 *
 * @param node
 * @returns {*}
 * @private
 */
export default function (node = {}) {
    const result = Document.elementPrototype;
    const href = node.attributes['l:href'] || node.attributes['xlink:href'];
    const link = (href && href.value) || '';

    result.properties.tagName = 'A';
    result.properties.textContent = node.textContent;
    result.properties.href = link;

    if (link && link[0] !== '#') {
        result.properties.target = '_blank';
    }

    return result;
};