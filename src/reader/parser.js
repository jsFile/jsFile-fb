import JsFile from 'JsFile';
import normalizeEncodingValue from './normalizeEncodingValue';
const {errors: {invalidFileType, invalidReadFile}} = JsFile.Engine;

/**
 * @description Read files in Fiction Book Format
 * @public
 */
export default function parser () {
    return new Promise((resolve, reject) => {
        const fileEntry = {
            file: this.file
        };

        if (!this.isValid()) {
            reject(new Error(invalidFileType));
            return;
        }

        const createDocument = (result) => {
            const domParser = new DOMParser();
            resolve(this.createDocument(domParser.parseFromString(result, 'application/xml')));
        };

        this.readFileEntry(fileEntry).then(
            (result) => {
                const {defaultEncoding} = normalizeEncodingValue;
                let [, encoding] = (/encoding="(.+)"/).exec(result);
                encoding = encoding ? normalizeEncodingValue(encoding) : defaultEncoding;

                if (encoding !== defaultEncoding) {
                    fileEntry.encoding = encoding;
                    this.readFileEntry(fileEntry).then(createDocument, () => reject(new Error(invalidReadFile)));
                } else {
                    createDocument(result);
                }
            },
            () => reject(new Error(invalidReadFile))
        );

    });
}
