import {Document} from 'JsFile';
import parseImage from './parseImage';

/**
 *
 * @param options {{node, documentData}}
 * @private
 */
export default function (options = {}) {
    let result;
    const {documentData, node = {}} = options;

    switch (node.localName) {
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
            result = this.parseBlock(node, documentData);
    }

    return result;
};