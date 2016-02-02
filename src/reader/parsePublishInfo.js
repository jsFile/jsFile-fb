import JsFile from 'JsFile';
const {formatPropertyName} = JsFile.Engine;

/**
 * @param xml
 * @return {Object}
 * @private
 */
export default function parsePublishInfo (xml) {
    const info = {};

    [].forEach.call(xml && xml.childNodes || [], (node) => {
        const {localName} = node;
        if (localName) {
            info[formatPropertyName(localName)] = node.textContent || '';
        }
    });

    return info;
}