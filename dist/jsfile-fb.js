(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("JsFile"));
	else if(typeof define === 'function' && define.amd)
		define(["JsFile"], factory);
	else if(typeof exports === 'object')
		exports["JsFileFb"] = factory(require("JsFile"));
	else
		root["JsFileFb"] = factory(root["JsFile"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _createDocument = __webpack_require__(2);

	var _createDocument2 = _interopRequireDefault(_createDocument);

	var _parser = __webpack_require__(10);

	var _parser2 = _interopRequireDefault(_parser);

	var _parseFileInfo = __webpack_require__(5);

	var _parseFileInfo2 = _interopRequireDefault(_parseFileInfo);

	var _parseDocumentInfo = __webpack_require__(7);

	var _parseDocumentInfo2 = _interopRequireDefault(_parseDocumentInfo);

	var _parsePages = __webpack_require__(12);

	var _parsePages2 = _interopRequireDefault(_parsePages);

	var _parseBlockElement = __webpack_require__(13);

	var _parseBlockElement2 = _interopRequireDefault(_parseBlockElement);

	var _parseBlock = __webpack_require__(14);

	var _parseBlock2 = _interopRequireDefault(_parseBlock);

	var _parseParagraph = __webpack_require__(15);

	var _parseParagraph2 = _interopRequireDefault(_parseParagraph);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Engine = _JsFile2.default.Engine;

	/**
	 * @description Supported files by engine
	 * @type {{extension: Array, mime: Array}}
	 */

	var files = {
	    extension: ['fb2'],
	    mime: ['application/x-fictionbook+xml']
	};

	var FbEngine = function (_Engine) {
	    _inherits(FbEngine, _Engine);

	    function FbEngine() {
	        _classCallCheck(this, FbEngine);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FbEngine).apply(this, arguments));

	        _this.createDocument = _createDocument2.default;
	        _this.files = files;

	        /**
	         * @override
	         * @type {Function}
	         */
	        _this.parser = _parser2.default;
	        _this.parseFileInfo = _parseFileInfo2.default;
	        _this.parseDocumentInfo = _parseDocumentInfo2.default;
	        _this.parsePages = _parsePages2.default;
	        _this.parseBlockElement = _parseBlockElement2.default;
	        _this.parseBlock = _parseBlock2.default;
	        _this.parseParagraph = _parseParagraph2.default;
	        return _this;
	    }

	    _createClass(FbEngine, null, [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && Engine.validateFile(file, files));
	        }
	    }]);

	    return FbEngine;
	}(Engine);

	FbEngine.mimeTypes = files.mime.slice(0);

	exports.default = FbEngine;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createDocument;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _parseBinaryItems = __webpack_require__(3);

	var _parseBinaryItems2 = _interopRequireDefault(_parseBinaryItems);

	var _parsePublishInfo = __webpack_require__(4);

	var _parsePublishInfo2 = _interopRequireDefault(_parsePublishInfo);

	var _parseFileInfo = __webpack_require__(5);

	var _parseFileInfo2 = _interopRequireDefault(_parseFileInfo);

	var _parseDocumentInfo = __webpack_require__(7);

	var _parseDocumentInfo2 = _interopRequireDefault(_parseDocumentInfo);

	var _parseCustomInfo = __webpack_require__(8);

	var _parseCustomInfo2 = _interopRequireDefault(_parseCustomInfo);

	var _parseImage = __webpack_require__(9);

	var _parseImage2 = _interopRequireDefault(_parseImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;
	var formatPropertyName = _JsFile2.default.Engine.formatPropertyName;

	var forEach = [].forEach;
	var descriptionProcessors = {
	    'publish-info': {
	        parser: _parsePublishInfo2.default
	    },
	    'title-info': {
	        name: 'fileInfo',
	        parser: _parseFileInfo2.default
	    },
	    'src-title-info': {
	        name: 'originalFileInfo',
	        parser: _parseFileInfo2.default
	    },
	    'document-info': {
	        parser: _parseDocumentInfo2.default
	    },
	    'custom-info': {
	        parser: _parseCustomInfo2.default
	    }
	};

	/**
	 *
	 * @param xml {Document}
	 * @private
	 */
	function createDocument(xml) {
	    var _this = this;

	    return new Promise(function (resolve) {
	        var documentData = {
	            meta: {
	                name: _this.fileName
	            },
	            binaryItems: (0, _parseBinaryItems2.default)(xml.querySelectorAll('binary'))
	        };
	        var page = Document.elementPrototype;
	        var node = xml.querySelector('FictionBook');

	        forEach.call(node && node.childNodes || [], function (node) {
	            var localName = node.localName;


	            if (localName === 'description') {
	                forEach.call(node.childNodes || [], function (node) {
	                    var localName = node.localName;

	                    var _ref = descriptionProcessors[localName] || {};

	                    var name = _ref.name;
	                    var parser = _ref.parser;

	                    if (parser) {
	                        documentData.meta[name || formatPropertyName(localName)] = parser.call(this, node, documentData);
	                    }
	                }, this);

	                if (documentData.meta.fileInfo && documentData.meta.fileInfo.annotation) {
	                    page.children.push(documentData.meta.fileInfo.annotation);
	                }

	                if (documentData.meta.fileInfo && documentData.meta.fileInfo.coverpage && documentData.binaryItems[documentData.meta.fileInfo.coverpage.image]) {
	                    var element = Document.elementPrototype;
	                    element.children = [(0, _parseImage2.default)({
	                        documentData: documentData,
	                        imageName: documentData.meta.fileInfo.coverpage.image
	                    })];
	                    page.children.push(element);
	                }
	            } else if (localName === 'body') {
	                this.parsePages(node, documentData, page.children);
	            }
	        }, _this);

	        resolve(new Document({
	            meta: documentData.meta,
	            content: [page]
	        }));
	    });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseBinaryItems;
	function parseBinaryItems(nodes) {
	    var result = {};

	    [].forEach.call(nodes || [], function (node) {
	        var attrs = node.attributes || {};
	        var contentType = attrs['content-type'] && attrs['content-type'].value;
	        if (attrs.id && attrs.id.value && contentType && node.textContent) {
	            result[attrs.id.value] = 'data:' + contentType + ';base64,' + node.textContent;
	        }
	    });

	    return result;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parsePublishInfo;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formatPropertyName = _JsFile2.default.Engine.formatPropertyName;

	/**
	 * @param xml
	 * @return {Object}
	 * @private
	 */

	function parsePublishInfo(xml) {
	    var info = {};

	    [].forEach.call(xml && xml.childNodes || [], function (node) {
	        var localName = node.localName;

	        if (localName) {
	            info[formatPropertyName(localName)] = node.textContent || '';
	        }
	    });

	    return info;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseFileInfo;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _getPersonInfo = __webpack_require__(6);

	var _getPersonInfo2 = _interopRequireDefault(_getPersonInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formatPropertyName = _JsFile2.default.Engine.formatPropertyName;

	/**
	 * @param xml
	 * @param documentData
	 * @return {Object}
	 * @private
	 */

	function parseFileInfo(xml, documentData) {
	    var info = {};

	    [].forEach.call(xml && xml.childNodes || [], function (node) {
	        var localName = node.localName;
	        var _node$textContent = node.textContent;
	        var textContent = _node$textContent === undefined ? '' : _node$textContent;


	        switch (localName) {
	            case 'genre':
	                info[localName] = info[localName] || [];
	                info[localName].push(textContent);
	                break;
	            case 'keywords':
	                info[localName] = textContent.split(/\s*,\s*/);
	                break;
	            case 'annotation':
	                info[localName] = this.parseBlock(node, documentData);
	                break;
	            case 'translator':
	                info[localName] = (0, _getPersonInfo2.default)(node);
	                break;
	            case 'coverpage':
	                var imageNode = node.querySelector('image');
	                var href = imageNode.attributes['xlink:href'] && imageNode.attributes['xlink:href'].value || '';
	                info[localName] = {
	                    image: href.replace('#', '')
	                };
	                break;
	            case 'sequence':
	                var number = node.attributes.number && node.attributes.number.value;
	                info[localName] = {
	                    name: node.attributes.name ? node.attributes.name.value || '' : '',
	                    number: isNaN(number) ? 0 : Number(number)
	                };
	                break;
	            default:
	                if (localName) {
	                    info[formatPropertyName(localName)] = textContent;
	                }
	        }
	    }, this);

	    return info;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getPersonInfo;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formatPropertyName = _JsFile2.default.Engine.formatPropertyName;

	/**
	 *
	 * @param xml
	 * @return {Object}
	 * @private
	 */

	function getPersonInfo(xml) {
	    var info = {};

	    [].forEach.call(xml && xml.childNodes || [], function (_ref) {
	        var localName = _ref.localName;
	        var _ref$textContent = _ref.textContent;
	        var textContent = _ref$textContent === undefined ? '' : _ref$textContent;

	        if (localName) {
	            info[formatPropertyName(localName)] = textContent;
	        }
	    });

	    return info;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseDocumentInfo;

	var _getPersonInfo = __webpack_require__(6);

	var _getPersonInfo2 = _interopRequireDefault(_getPersonInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @param xml
	 * @param documentData
	 * @return {Object}
	 * @private
	 */
	function parseDocumentInfo(xml, documentData) {
	    var info = {
	        programs: []
	    };

	    [].forEach.call(xml && xml.childNodes || [], function (node) {
	        var localName = node.localName;
	        var _node$textContent = node.textContent;
	        var textContent = _node$textContent === undefined ? '' : _node$textContent;

	        switch (localName) {
	            case 'author':
	                info[localName] = (0, _getPersonInfo2.default)(node);
	                break;
	            case 'id':
	                info[localName] = textContent;
	                break;
	            case 'version':
	                info[localName] = textContent;
	                break;
	            case 'publisher':
	                info[localName] = textContent;
	                break;
	            case 'history':
	                info[localName] = this.parseBlock(node, documentData);
	                break;
	            case 'date':
	                info[localName] = textContent;
	                break;
	            case 'src-url':
	                info.sourceUrl = textContent;
	                break;
	            case 'src-ocr':
	                info.originalAuthor = textContent;
	                break;
	            case 'program-used':
	                info.programs = textContent.split(',').map(function (program) {
	                    return program.trim();
	                });
	                break;
	        }
	    }, this);

	    return info;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (xml) {
	  return xml && xml.textContent || '';
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseImage;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;

	/**
	 *
	 * @param options
	 * @returns {*}
	 * @private
	 */

	function parseImage() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var result = Document.elementPrototype;
	    var _options$node = options.node;
	    var node = _options$node === undefined ? {} : _options$node;
	    var documentData = options.documentData;
	    var imageName = options.imageName;

	    var attrValue = node.attributes && node.attributes['xlink:href'] && node.attributes['xlink:href'].value;

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.default = parser;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _normalizeEncodingValue = __webpack_require__(11);

	var _normalizeEncodingValue2 = _interopRequireDefault(_normalizeEncodingValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _JsFile$Engine$errors = _JsFile2.default.Engine.errors;
	var invalidFileType = _JsFile$Engine$errors.invalidFileType;
	var invalidReadFile = _JsFile$Engine$errors.invalidReadFile;

	/**
	 * @description Read files in Fiction Book Format
	 * @public
	 */

	function parser() {
	    var _this = this;

	    return new Promise(function (resolve, reject) {
	        var fileEntry = {
	            file: _this.file
	        };

	        if (!_this.isValid()) {
	            reject(new Error(invalidFileType));
	            return;
	        }

	        var createDocument = function createDocument(result) {
	            var domParser = new DOMParser();
	            resolve(_this.createDocument(domParser.parseFromString(result, 'application/xml')));
	        };

	        _this.readFileEntry(fileEntry).then(function (result) {
	            var defaultEncoding = _normalizeEncodingValue2.default.defaultEncoding;

	            var _$exec = /encoding="(.+)"/.exec(result);

	            var _$exec2 = _slicedToArray(_$exec, 2);

	            var encoding = _$exec2[1];

	            encoding = encoding ? (0, _normalizeEncodingValue2.default)(encoding) : defaultEncoding;

	            if (encoding !== defaultEncoding) {
	                fileEntry.encoding = encoding;
	                _this.readFileEntry(fileEntry).then(createDocument, function () {
	                    return reject(new Error(invalidReadFile));
	                });
	            } else {
	                createDocument(result);
	            }
	        }, function () {
	            return reject(new Error(invalidReadFile));
	        });
	    });
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var encodings = {
	  'windows-1251': 'cp1251'
	};

	var defaultEncoding = exports.defaultEncoding = 'utf8';

	/**
	 *
	 * @param value
	 * @return {String}
	 * @private
	 */

	exports.default = function (value) {
	  return value && encodings[String(value).toLowerCase()] || defaultEncoding;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parsePages;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;

	/**
	 *
	 * @param xml
	 * @param documentData
	 * @param list
	 * @private
	 */

	function parsePages(xml, documentData, list) {
	    var _xml$attributes = xml.attributes;
	    var attributes = _xml$attributes === undefined ? {} : _xml$attributes;


	    [].forEach.call(xml && xml.childNodes || [], function (node) {
	        var localName = node.localName;

	        if (localName === 'title') {
	            list.push(this.parseBlock(node, documentData));
	        } else if (localName === 'section') {
	            this.parsePages(node, documentData, list);
	        } else if (localName) {
	            list.push(this.parseBlockElement({
	                node: node,
	                documentData: documentData
	            }));
	        }
	    }, this);

	    if (attributes.id && attributes.id.value && list[0]) {
	        var el = Document.elementPrototype;
	        el.properties.tagName = 'A';
	        el.properties.name = attributes.id.value;
	        list[list.length - 1].children.unshift(el);
	    }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseBlockElement;

	var _parseImage = __webpack_require__(9);

	var _parseImage2 = _interopRequireDefault(_parseImage);

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;

	/**
	 *
	 * @param options {{node, documentData}}
	 * @private
	 */

	function parseBlockElement() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var result = undefined;
	    var documentData = options.documentData;
	    var _options$node = options.node;
	    var node = _options$node === undefined ? {} : _options$node;
	    var localName = node.localName;


	    switch (localName) {
	        case 'p':
	            result = this.parseParagraph({ node: node });
	            break;
	        case 'empty-line':
	            result = Document.elementPrototype;
	            result.properties.tagName = 'BR';
	            break;
	        case 'subtitle':
	            result = this.parseParagraph({ node: node });
	            result.style.textAlign = 'center';
	            break;
	        case 'image':
	            result = (0, _parseImage2.default)({
	                node: node,
	                documentData: documentData
	            });

	            break;
	        default:
	            if (localName) {
	                result = this.parseBlock(node, documentData);
	            }
	    }

	    return result;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseBlock;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;
	function parseBlock(xml, documentData) {
	    var result = Document.elementPrototype;

	    [].forEach.call(xml && xml.childNodes || [], function (node) {
	        if (node.localName) {
	            result.children.push(this.parseBlockElement({
	                node: node,
	                documentData: documentData
	            }));
	        }
	    }, this);

	    return result;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseParagraph;

	var _parseLinkElement = __webpack_require__(16);

	var _parseLinkElement2 = _interopRequireDefault(_parseLinkElement);

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;

	/**
	 *
	 * @param params
	 * @returns {*}
	 * @private
	 */

	function parseParagraph() {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var element = undefined;
	    var attrValue = undefined;
	    var node = params.node;
	    var result = Document.elementPrototype;
	    result.properties.tagName = 'P';

	    if (!node) {
	        return result;
	    }

	    var children = [].slice.call(node && node.childNodes || [], 0);
	    children.forEach(function (child) {
	        var _child$textContent = child.textContent;
	        var textContent = _child$textContent === undefined ? '' : _child$textContent;
	        var localName = child.localName;
	        var _child$attributes = child.attributes;
	        var attributes = _child$attributes === undefined ? {} : _child$attributes;

	        if (localName === 'a') {
	            element = (0, _parseLinkElement2.default)(child);
	        } else {
	            element = Document.elementPrototype;
	            element.properties.tagName = 'SPAN';
	            element.properties.textContent = textContent;

	            if (localName === 'strong') {
	                element.style.fontWeight = 'bold';
	            } else if (localName === 'emphasis') {
	                element.style.fontStyle = 'italic';
	            }
	        }

	        attrValue = attributes['xml:lang'] && attributes['xml:lang'].value;
	        if (attrValue) {
	            element.properties.lang = attrValue;
	        }

	        result.children.push(element);
	    });

	    attrValue = node.attributes && node.attributes['xml:lang'] && node.attributes['xml:lang'].value;
	    if (attrValue) {
	        result.properties.lang = attrValue;
	    }

	    if (!children[0] && node.textContent) {
	        element = Document.elementPrototype;
	        element.properties.textContent = node.textContent;
	        result.children.push(element);
	    }

	    return result;
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseLinkElement;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;

	/**
	 *
	 * @param node
	 * @returns {*}
	 * @private
	 */

	function parseLinkElement() {
	    var node = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var result = Document.elementPrototype;
	    var href = node.attributes['l:href'] || node.attributes['xlink:href'];
	    var link = href && href.value || '';

	    result.properties.tagName = 'A';
	    result.properties.textContent = node.textContent;
	    result.properties.href = link;

	    if (link && link[0] !== '#') {
	        result.properties.target = '_blank';
	    }

	    return result;
	}

/***/ }
/******/ ])
});
;