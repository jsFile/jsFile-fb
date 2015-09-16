import {Document, dom as $} from 'JsFile';

export default function (xml, documentData) {
    const result = Document.elementPrototype;

    $.children(xml).forEach(function (node) {
        if (node.localName) {
            result.children.push(this.parseBlockElement({
                node,
                documentData
            }));
        }
    }, this);

    return result;
};