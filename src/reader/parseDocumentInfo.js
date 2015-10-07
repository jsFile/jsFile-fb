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

    [].forEach.call(xml && xml.childNodes || [], function (node) {
        const {localName, textContent = ''} = node;
        switch (localName) {
            case 'author':
                info[localName] = getPersonInfo(node);
                break;
            case 'id':
                info[localName] = textContent;
                break;
            case 'version':
                info[localName] = textContent;
                break;
            case 'publisher':
                info[localName] = textContent;
                break;
            case 'history':
                info[localName] = this.parseBlock(node, documentData);
                break;
            case 'date':
                info[localName] = textContent;
                break;
            case 'src-url':
                info.sourceUrl = textContent;
                break;
            case 'src-ocr':
                info.originalAuthor = textContent;
                break;
            case 'program-used':
                info.programs = textContent.split(',').map(program => program.trim());
                break;
        }
    }, this);

    return info;
};