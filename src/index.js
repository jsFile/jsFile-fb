import {Engine, defineEngine} from 'JsFile';
import createDocument from './reader/createDocument';
import parser from './reader/parser';
import parseFileInfo from './reader/parseFileInfo';
import parseDocumentInfo from './reader/parseDocumentInfo';
import parsePages from './reader/parsePages';
import parseBlockElement from './reader/parseBlockElement';
import parseBlock from './reader/parseBlock';
import parseParagraph from './reader/parseParagraph';

/**
 * @description Supported files by engine
 * @type {{extension: Array, mime: Array}}
 */
const files = {
    extension: ['fb2'],
    mime: ['application/x-fictionbook+xml']
};

class FbEngine extends Engine {
    createDocument = createDocument

    files = files

    /**
     * @override
     * @type {Function}
     */
    parser = parser

    parseFileInfo = parseFileInfo

    parseDocumentInfo = parseDocumentInfo

    parsePages = parsePages

    parseBlockElement = parseBlockElement

    parseBlock = parseBlock

    parseParagraph = parseParagraph

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }

    static mimeTypes = files.mime.slice(0)
}

defineEngine(FbEngine);

export default FbEngine;