import {Document} from 'JsFile';

/**
 *
 * @param xml
 * @param documentData
 * @param list
 * @private
 */
export default function (xml, documentData, list) {
    const {attributes = {}} = xml;

    [].forEach.call(xml && xml.childNodes || [], function (node) {
        const localName = node.localName;

        if (localName === 'title') {
            list.push(this.parseBlock(node, documentData));
        } else if (localName === 'section') {
            this.parsePages(node, documentData, list);
        } else if (localName) {
            list.push(
                this.parseBlockElement({
                    node,
                    documentData
                })
            );
        }
    }, this);

    if (attributes.id && attributes.id.value && list[0]) {
        let el = Document.elementPrototype;
        el.properties.tagName = 'A';
        el.properties.name = attributes.id.value;
        list[list.length - 1].children.push(el);
    }
};