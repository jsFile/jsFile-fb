import JsFile from 'JsFile';
import normalizeEncodingValue from './normalizeEncodingValue';
const {errors: {invalidFileType}} = JsFile.Engine;
const defaultEncoding = 'utf-8';

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

        this.readFileEntry(fileEntry).then(
            function (result) {
                const domParser = new DOMParser();
                let encoding = (/encoding='(.+)'/).exec(result);
                encoding = encoding ? normalizeEncodingValue(encoding[1]) : defaultEncoding;

                if (encoding !== defaultEncoding) {
                    fileEntry.encoding = encoding;
                    this.readFileEntry(fileEntry).then(
                        function (result) {
                            resolve(this.createDocument(domParser.parseFromString(result, 'application/xml')));
                        }.bind(this),
                        () => reject(new Error(invalidFileType))
                    );
                } else {
                    resolve(this.createDocument(domParser.parseFromString(result, 'application/xml')));
                }
            }.bind(this),
            () => reject(new Error(invalidFileType))
        );
    }.bind(this));
}