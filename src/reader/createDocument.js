import JsFile from 'JsFile';
import parseBinaryItems from './parseBinaryItems';
import parsePublishInfo from './parsePublishInfo';
import parseFileInfo from './parseFileInfo';
import parseDocumentInfo from './parseDocumentInfo';
import parseCustomInfo from './parseCustomInfo';
import parseImage from './parseImage';
const {Document} = JsFile;
const {formatPropertyName} = JsFile.Engine;
const forEach = [].forEach;
const descriptionProcessors = {
    'publish-info': {
        parser: parsePublishInfo
    },
    'title-info': {
        name: 'fileInfo',
        parser: parseFileInfo
    },
    'src-title-info': {
        name: 'originalFileInfo',
        parser: parseFileInfo
    },
    'document-info': {
        parser: parseDocumentInfo
    },
    'custom-info': {
        parser: parseCustomInfo
    }
};

/**
 *
 * @param xml {Document}
 * @private
 */
export default function (xml) {
    return new Promise(function (resolve) {
        const documentData = {
            binaryItems: parseBinaryItems(xml.querySelectorAll('binary'))
        };
        const page = Document.elementPrototype;
        const node = xml.querySelector('FictionBook');

        forEach.call(node && node.childNodes || [], function (node) {
            const {localName} = node;

            if (localName === 'description') {
                forEach.call(node.childNodes || [], function (node) {
                    const {localName} = node;
                    const {name, parser} = descriptionProcessors[localName] || {};
                    if (parser) {
                        documentData[name || formatPropertyName(localName)] = parser.call(this, node, documentData);
                    }
                }, this);

                if (documentData.fileInfo && documentData.fileInfo.annotation) {
                    page.children.push(documentData.fileInfo.annotation);
                }

                if (
                    documentData.fileInfo &&
                    documentData.fileInfo.coverpage &&
                    documentData.binaryItems[documentData.fileInfo.coverpage.image]
                ) {
                    let element = Document.elementPrototype;
                    element.children = [
                        parseImage({
                            documentData: documentData,
                            imageName: documentData.fileInfo.coverpage.image
                        })
                    ];
                    page.children.push(element);
                }
            } else if (localName === 'body') {
                this.parsePages(node, documentData, page.children);
            }
        }, this);

        resolve(new Document({
            name: this.fileName,
            content: [page]
        }));
    }.bind(this));
}