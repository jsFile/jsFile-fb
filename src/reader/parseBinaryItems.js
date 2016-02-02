export default function parseBinaryItems (nodes) {
    const result = {};

    [].forEach.call(nodes || [], (node) => {
        const attrs = node.attributes || {};
        const contentType = attrs['content-type'] && attrs['content-type'].value;
        if (attrs.id && attrs.id.value && contentType && node.textContent) {
            result[attrs.id.value] = `data:${contentType};base64,${node.textContent}`;
        }
    });

    return result;
}