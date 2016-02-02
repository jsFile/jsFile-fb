import JsFile from 'JsFile';

const {Document} = JsFile;

/**
 *
 * @param options
 * @returns {*}
 * @private
 */
export default function parseImage (options = {}) {
    const result = Document.elementPrototype;
    const {node = {}, documentData, imageName} = options;
    const attrValue = node.attributes && node.attributes['xlink:href'] && node.attributes['xlink:href'].value;

    if (!imageName && attrValue) {
        result.properties.src = documentData.binaryItems[attrValue.replace('#', '')];
    } else {
        result.properties.src = documentData.binaryItems[imageName];
    }

    result.properties.tagName = 'IMG';
    result.properties.src = result.properties.src || '';
    result.properties.alt = '';

    return result;
}