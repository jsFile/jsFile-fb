import {Document} from 'JsFile';

export default function (xml, documentData) {
    const result = Document.elementPrototype;

    [].forEach.call(xml && xml.childNodes || [], function (node) {
        if (node.localName) {
            result.children.push(this.parseBlockElement({
                node,
                documentData
            }));
        }
    }, this);

    return result;
};