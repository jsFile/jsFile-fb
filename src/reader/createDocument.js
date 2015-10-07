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
            meta: {
                name: this.fileName
            },
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
                        documentData.meta[name || formatPropertyName(localName)] = parser.call(this, node, documentData);
                    }
                }, this);

                if (documentData.meta.fileInfo && documentData.meta.fileInfo.annotation) {
                    page.children.push(documentData.meta.fileInfo.annotation);
                }

                if (
                    documentData.meta.fileInfo &&
                    documentData.meta.fileInfo.coverpage &&
                    documentData.binaryItems[documentData.meta.fileInfo.coverpage.image]
                ) {
                    let element = Document.elementPrototype;
                    element.children = [
                        parseImage({
                            documentData,
                            imageName: documentData.meta.fileInfo.coverpage.image
                        })
                    ];
                    page.children.push(element);
                }
            } else if (localName === 'body') {
                this.parsePages(node, documentData, page.children);
            }
        }, this);

        resolve(new Document({
            meta: documentData.meta,
            content: [page]
        }));
    }.bind(this));
}