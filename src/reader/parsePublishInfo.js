import {dom as $} from 'JsFile';

/**
 * @param xml
 * @return {Object}
 * @private
 */
export default function (xml) {
    const info = {};
    $.children(xml).forEach((node) => info[node.localName] = node.textContent || '');
    return info;
};