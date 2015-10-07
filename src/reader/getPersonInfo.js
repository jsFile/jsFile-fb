import JsFile from 'JsFile';
const {formatPropertyName} = JsFile.Engine;

/**
 *
 * @param xml
 * @return {Object}
 * @private
 */
export default function (xml) {
    const info = {};

    [].forEach.call(xml && xml.childNodes || [], ({localName, textContent = ''}) => {
        if (localName) {
            info[formatPropertyName(localName)] = textContent;
        }
    });

    return info;
};