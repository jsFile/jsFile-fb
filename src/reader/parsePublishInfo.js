/**
 * @param xml
 * @return {Object}
 * @private
 */
export default function (xml) {
    const info = {};
    [].forEach.call(xml && xml.childNodes || [], (node) => info[node.localName] = node.textContent || '');
    return info;
};