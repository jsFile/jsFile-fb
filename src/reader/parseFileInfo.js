import getPersonInfo from './getPersonInfo';
import {dom as $} from 'JsFile';

const simpleProperties = {
    genre: 'genre',
    lang: 'language',
    translator: 'translator',
    date: 'date',
    author: 'author',
    'src-lang': 'sourceLanguage',
    'book-title': 'title'
};

/**
 * @param xml
 * @param documentData
 * @return {Object}
 * @private
 */
export default function (xml, documentData) {
    const info = {};

    $.children(xml).forEach(function (node) {
        let {localName, textContent = ''} = node;

        if (simpleProperties[localName]) {
            info[simpleProperties[localName]] = textContent;
        } else if (localName === 'annotation') {
            info.annotation = this.parseBlock(node, documentData);
        } else if (localName === 'coverpage') {
            const imageNode = node.querySelector('image');
            info.coverpage = {
                image: (imageNode.attributes['l:href'] && imageNode.attributes['l:href'].value || '').replace('#', '')
            };
        } else if (localName === 'sequence') {
            const number = node.attributes.number && node.attributes.number.value;
            info.sequence = {
                name: node.attributes.name ? node.attributes.name.value || '' : '',
                number: isNaN(number) ? 0 : Number(number)
            };
        }
    }, this);

    return info;
};