import JsFile from 'JsFile';
const {formatPropertyName} = JsFile.Engine;

/**
 *
 * @param xml
 * @return {Object}
 * @private
 */
export default function getPersonInfo (xml) {
    const info = {};

    [].forEach.call(xml && xml.childNodes || [], ({localName, textContent = ''}) => {
        if (localName) {
            info[formatPropertyName(localName)] = textContent;
        }
    });

    return info;
}