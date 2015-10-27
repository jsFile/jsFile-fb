import JsFile from 'JsFile';
import normalizeEncodingValue from './normalizeEncodingValue';
const {errors: {invalidFileType, invalidReadFile}} = JsFile.Engine;

/**
 * @description Read files in Fiction Book Format
 * @public
 */
export default function () {
    return new Promise(function (resolve, reject) {
        const fileEntry = {
            file: this.file
        };

        if (!this.isValid()) {
            reject(new Error(invalidFileType));
            return;
        }

        const createDocument = function (result) {
            const domParser = new DOMParser();
            resolve(this.createDocument(domParser.parseFromString(result, 'application/xml')));
        }.bind(this);

        this.readFileEntry(fileEntry).then(
            function (result) {
                const {defaultEncoding} = normalizeEncodingValue;
                let [, encoding] = (/encoding="(.+)"/).exec(result);
                encoding = encoding ? normalizeEncodingValue(encoding) : defaultEncoding;

                if (encoding !== defaultEncoding) {
                    fileEntry.encoding = encoding;
                    this.readFileEntry(fileEntry).then(createDocument, () => reject(new Error(invalidReadFile)));
                } else {
                    createDocument(result);
                }
            }.bind(this),
            () => reject(new Error(invalidReadFile))
        );

    }.bind(this));
}
