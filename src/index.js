import JsFile from 'JsFile';
import createDocument from './reader/createDocument';
import parser from './reader/parser';
import parseFileInfo from './reader/parseFileInfo';
import parseDocumentInfo from './reader/parseDocumentInfo';
import parsePages from './reader/parsePages';
import parseBlockElement from './reader/parseBlockElement';
import parseBlock from './reader/parseBlock';
import parseParagraph from './reader/parseParagraph';

const {Engine, defineEngine} = JsFile;

/**
 * @description Supported files by engine
 * @type {{extension: Array, mime: Array}}
 */
const files = {
    extension: ['fb2'],
    mime: ['application/x-fictionbook+xml']
};

class FbEngine extends Engine {
    constructor () {
        super(...arguments);
        this.createDocument = createDocument;
        this.files = files;

        /**
         * @override
         * @type {Function}
         */
        this.parser = parser;
        this.parseFileInfo = parseFileInfo;
        this.parseDocumentInfo = parseDocumentInfo;
        this.parsePages = parsePages;
        this.parseBlockElement = parseBlockElement;
        this.parseBlock = parseBlock;
        this.parseParagraph = parseParagraph;
    }

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }
}

FbEngine.mimeTypes = files.mime.slice(0);
defineEngine(FbEngine);

export default FbEngine;