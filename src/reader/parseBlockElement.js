import parseImage from './parseImage';
import JsFile from 'JsFile';

const {Document} = JsFile;

/**
 *
 * @param options {{node, documentData}}
 * @private
 */
export default function parseBlockElement (options = {}) {
    let result;
    const {documentData, node = {}} = options;
    const {localName} = node;

    switch (localName) {
        case 'p':
            result = this.parseParagraph({node});
            break;
        case 'empty-line':
            result = Document.elementPrototype;
            result.properties.tagName = 'BR';
            break;
        case 'subtitle':
            result = this.parseParagraph({node});
            result.style.textAlign = 'center';
            break;
        case 'image':
            result = parseImage({
                node,
                documentData
            });

            break;
        default:
            if (localName) {
                result = this.parseBlock(node, documentData);
            }
    }

    return result;
}