import JsFile from 'JsFile';
import parseBinaryItems from './parseBinaryItems';
import parsePublishInfo from './parsePublishInfo';
import parseImage from './parseImage';
const {Document} = JsFile;

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

        [].forEach.call(node && node.childNodes || [], function (node) {
            const name = node.localName;

            if (name === 'description') {
                const descriptionNode = xml.querySelector('description');

                documentData.publishInfo = parsePublishInfo(descriptionNode.querySelector('publish-info'));
                documentData.fileInfo = this.parseFileInfo(descriptionNode.querySelector('title-info'), documentData);
                documentData.documentInfo = this.parseDocumentInfo(descriptionNode.querySelector('document-info'), documentData);

                if (documentData.fileInfo.annotation) {
                    page.children.push(documentData.fileInfo.annotation);
                }

                if (
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
            } else if (name === 'body') {
                this.parsePages(node, documentData, page.children);
            }
        }, this);

        resolve(new Document({
            name: this.fileName,
            pages: [page]
        }));
    }.bind(this));
}