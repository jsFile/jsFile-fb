import {dom as $} from 'JsFile';
import getPersonInfo from './getPersonInfo';

/**
 * @param xml
 * @param documentData
 * @return {Object}
 * @private
 */
export default function (xml, documentData) {
    const info = {
        programs: []
    };

    $.children(xml).forEach(function (node) {
        const {localName, textContent = ''} = node;
        switch (localName) {
            case 'author':
                info.author = getPersonInfo(node);
                break;
            case 'src-url':
                info.sourceURL = textContent;
                break;
            case 'id':
                info.id = textContent;
                break;
            case 'version':
                info.version = textContent;
                break;
            case 'history':
                info.history = this.parseBlock(node, documentData);
                break;
            case 'date':
                info.date = textContent.split('-').reverse().join('.');
                break;
            case 'program-used':
                info.programs = textContent.split(',').map(program => program.trim());
                break;
        }
    }, this);

    return info;
};