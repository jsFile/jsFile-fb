import JsFile from 'JsFile';
import getPersonInfo from './getPersonInfo';
const {formatPropertyName} = JsFile.Engine;

/**
 * @param xml
 * @param documentData
 * @return {Object}
 * @private
 */
export default function parseFileInfo (xml, documentData) {
    const info = {};

    [].forEach.call(xml && xml.childNodes || [], function (node) {
        let {localName, textContent = ''} = node;

        switch (localName) {
            case 'genre':
                info[localName] = info[localName] || [];
                info[localName].push(textContent);
                break;
            case 'keywords':
                info[localName] = textContent.split(/\s*,\s*/);
                break;
            case 'annotation':
                info[localName] = this.parseBlock(node, documentData);
                break;
            case 'translator':
                info[localName] = getPersonInfo(node);
                break;
            case 'coverpage':
                const imageNode = node.querySelector('image');
                const href = (imageNode.attributes['xlink:href'] && imageNode.attributes['xlink:href'].value || '');
                info[localName] = {
                    image: href.replace('#', '')
                };
                break;
            case 'sequence':
                const number = node.attributes.number && node.attributes.number.value;
                info[localName] = {
                    name: node.attributes.name ? node.attributes.name.value || '' : '',
                    number: isNaN(number) ? 0 : Number(number)
                };
                break;
            default:
                if (localName) {
                    info[formatPropertyName(localName)] = textContent;
                }
        }
    }, this);

    return info;
}