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

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _JsFile = __webpack_require__(1);

	var _readerCreateDocument = __webpack_require__(2);

	var _readerCreateDocument2 = _interopRequireDefault(_readerCreateDocument);

	var _readerParser = __webpack_require__(6);

	var _readerParser2 = _interopRequireDefault(_readerParser);

	var _readerParseFileInfo = __webpack_require__(8);

	var _readerParseFileInfo2 = _interopRequireDefault(_readerParseFileInfo);

	var _readerParseDocumentInfo = __webpack_require__(10);

	var _readerParseDocumentInfo2 = _interopRequireDefault(_readerParseDocumentInfo);

	var _readerParsePages = __webpack_require__(11);

	var _readerParsePages2 = _interopRequireDefault(_readerParsePages);

	var _readerParseBlockElement = __webpack_require__(12);

	var _readerParseBlockElement2 = _interopRequireDefault(_readerParseBlockElement);

	var _readerParseParagraph = __webpack_require__(13);

	var _readerParseParagraph2 = _interopRequireDefault(_readerParseParagraph);

	/**
	 * @description Supported files by engine
	 * @type {{extension: Array, mime: Array}}
	 */
	var files = {
	    extension: ['fb2'],
	    mime: ['application/x-fictionbook+xml']
	};

	var FbEngine = (function (_Engine) {
	    _inherits(FbEngine, _Engine);

	    function FbEngine() {
	        _classCallCheck(this, FbEngine);

	        _get(Object.getPrototypeOf(FbEngine.prototype), 'constructor', this).apply(this, arguments);

	        this.createDocument = _readerCreateDocument2['default'];
	        this.files = files;
	        this.parser = _readerParser2['default'];
	        this.parseFileInfo = _readerParseFileInfo2['default'];
	        this.parseDocumentInfo = _readerParseDocumentInfo2['default'];
	        this.parsePages = _readerParsePages2['default'];
	        this.parseBlockElement = _readerParseBlockElement2['default'];
	        this.parseParagraph = _readerParseParagraph2['default'];
	    }

	    _createClass(FbEngine, null, [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && _JsFile.Engine.validateFile(file, files));
	        }
	    }, {
	        key: 'mimeTypes',
	        value: files.mime.slice(0),
	        enumerable: true
	    }]);

	    return FbEngine;
	})(_JsFile.Engine);

	(0, _JsFile.defineEngine)(FbEngine);

	exports['default'] = FbEngine;
	module.exports = exports['default'];

	/**
	 * @override
	 * @type {Function}
	 */

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _parseBinaryItems = __webpack_require__(3);

	var _parseBinaryItems2 = _interopRequireDefault(_parseBinaryItems);

	var _parsePublishInfo = __webpack_require__(4);

	var _parsePublishInfo2 = _interopRequireDefault(_parsePublishInfo);

	var _parseImage = __webpack_require__(5);

	var _parseImage2 = _interopRequireDefault(_parseImage);

	var $ = _JsFile2['default'].dom;
	var Document = _JsFile2['default'].Document;

	/**
	 *
	 * @param xml {Document}
	 * @private
	 */

	exports['default'] = function (xml) {
	    return new Promise((function (resolve) {
	        var documentData = {
	            binaryItems: (0, _parseBinaryItems2['default'])(xml.querySelectorAll('binary'))
	        };
	        var page = Document.elementPrototype;

	        $.children(xml.querySelector('FictionBook')).forEach(function (node) {
	            var name = node.localName;

	            if (name === 'description') {
	                var descriptionNode = xml.querySelector('description');

	                documentData.publishInfo = (0, _parsePublishInfo2['default'])(descriptionNode.querySelector('publish-info'));
	                documentData.fileInfo = this.parseFileInfo(descriptionNode.querySelector('title-info'), documentData);
	                documentData.documentInfo = this.parseDocumentInfo(descriptionNode.querySelector('document-info'), documentData);

	                if (documentData.fileInfo.annotation) {
	                    page.children.push(documentData.fileInfo.annotation);
	                }

	                if (documentData.fileInfo.coverpage && documentData.binaryItems[documentData.fileInfo.coverpage.image]) {
	                    var element = Document.elementPrototype;
	                    element.children = [(0, _parseImage2['default'])({
	                        documentData: documentData,
	                        imageName: documentData.fileInfo.coverpage.image
	                    })];
	                    page.children.push(element);
	                }
	            } else if (name === 'body') {
	                this.parsePages(node, documentData, page.children);
	            }
	        }, this);

	        resolve(new Document({
	            name: this.fileName,
	            pages: [page]
	        }));
	    }).bind(this));
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (nodes) {
	    var result = {};

	    [].forEach.call(nodes || [], function (node) {
	        var attrs = node.attributes || {};
	        var contentType = attrs['content-type'] && attrs['content-type'].value;
	        if (attrs.id && attrs.id.value && contentType && node.textContent) {
	            result[attrs.id.value] = 'data:' + contentType + ';base64,' + node.textContent;
	        }
	    });

	    return result;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _JsFile = __webpack_require__(1);

	/**
	 * @param xml
	 * @return {Object}
	 * @private
	 */

	exports['default'] = function (xml) {
	  var info = {};
	  _JsFile.dom.children(xml).forEach(function (node) {
	    return info[node.localName] = node.textContent || '';
	  });
	  return info;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	/**
	 *
	 * @param options
	 * @returns {*}
	 * @private
	 */

	exports['default'] = function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var result = _JsFile.Document.elementPrototype;
	    var _options$node = options.node;
	    var node = _options$node === undefined ? {} : _options$node;
	    var documentData = options.documentData;
	    var imageName = options.imageName;

	    var attrValue = node.attributes && node.attributes['l:href'] && node.attributes['l:href'].value;

	    if (!imageName && attrValue) {
	        result.properties.src = documentData.binaryItems[attrValue.replace('#', '')];
	    } else {
	        result.properties.src = documentData.binaryItems[imageName];
	    }

	    result.properties.tagName = 'IMG';
	    result.properties.src = result.properties.src || '';
	    result.properties.alt = '';

	    return result;
	};

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _normalizeEncodingValue = __webpack_require__(7);

	var _normalizeEncodingValue2 = _interopRequireDefault(_normalizeEncodingValue);

	var invalidFileType = _JsFile2['default'].Engine.errors.invalidFileType;

	var defaultEncoding = 'utf-8';

	/**
	 * @description Read files in Fiction Book Format
	 * @public
	 */

	exports['default'] = function () {
	    return new Promise((function (resolve, reject) {
	        var fileEntry = {
	            file: this.file
	        };

	        if (!this.isValid()) {
	            reject(new Error(invalidFileType));
	            return;
	        }

	        this.readFileEntry(fileEntry).then((function (result) {
	            var domParser = new DOMParser();
	            var encoding = /encoding='(.+)'/.exec(result);
	            encoding = encoding ? (0, _normalizeEncodingValue2['default'])(encoding[1]) : defaultEncoding;

	            if (encoding !== defaultEncoding) {
	                fileEntry.encoding = encoding;
	                this.readFileEntry(fileEntry).then((function (result) {
	                    resolve(this.createDocument(domParser.parseFromString(result, 'application/xml')));
	                }).bind(this), function () {
	                    return reject(new Error(invalidFileType));
	                });
	            } else {
	                resolve(this.createDocument(domParser.parseFromString(result, 'application/xml')));
	            }
	        }).bind(this), function () {
	            return reject(new Error(invalidFileType));
	        });
	    }).bind(this));
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaultEncoding = 'utf-8';
	var encodings = {
	  'windows-1251': 'cp1251'
	};

	/**
	 *
	 * @param value
	 * @return {String}
	 * @private
	 */

	exports['default'] = function (value) {
	  return value && encodings[String(value).toLowerCase()] || defaultEncoding;
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getPersonInfo = __webpack_require__(9);

	var _getPersonInfo2 = _interopRequireDefault(_getPersonInfo);

	var _JsFile = __webpack_require__(1);

	var simpleProperties = {
	    genre: 'genre',
	    lang: 'language',
	    translator: 'translator',
	    date: 'date',
	    author: 'author',
	    'src-lang': 'sourceLanguage',
	    'book-title': 'title'
	};

	/**
	 * @param xml
	 * @param documentData
	 * @return {Object}
	 * @private
	 */

	exports['default'] = function (xml, documentData) {
	    var info = {};

	    _JsFile.dom.children(xml).forEach(function (node) {
	        var localName = node.localName;
	        var _node$textContent = node.textContent;
	        var textContent = _node$textContent === undefined ? '' : _node$textContent;

	        if (simpleProperties[localName]) {
	            info[simpleProperties[localName]] = textContent;
	        } else if (localName === 'annotation') {
	            info.annotation = this.parseBlock(node, documentData);
	        } else if (localName === 'coverpage') {
	            var imageNode = node.querySelector('image');
	            info.coverpage = {
	                image: (imageNode.attributes['l:href'] && imageNode.attributes['l:href'].value || '').replace('#', '')
	            };
	        } else if (localName === 'sequence') {
	            var number = node.attributes.number && node.attributes.number.value;
	            info.sequence = {
	                name: node.attributes.name ? node.attributes.name.value || '' : '',
	                number: isNaN(number) ? 0 : Number(number)
	            };
	        }
	    }, this);

	    return info;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	/**
	 *
	 * @param xml
	 * @return {Object}
	 * @private
	 */

	exports['default'] = function (xml) {
	    var info = {};

	    _JsFile.dom.children(xml).forEach(function (_ref) {
	        var localName = _ref.localName;
	        var textContent = _ref.textContent;

	        // firstName, middleName, lastName
	        if (localName) {
	            info[localName.replace(/-\w+$/, '') + 'Name'] = textContent || '';
	        }
	    });

	    return info;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _getPersonInfo = __webpack_require__(9);

	var _getPersonInfo2 = _interopRequireDefault(_getPersonInfo);

	/**
	 * @param xml
	 * @param documentData
	 * @return {Object}
	 * @private
	 */

	exports['default'] = function (xml, documentData) {
	    var info = {
	        programs: []
	    };

	    _JsFile.dom.children(xml).forEach(function (node) {
	        var localName = node.localName;
	        var _node$textContent = node.textContent;
	        var textContent = _node$textContent === undefined ? '' : _node$textContent;

	        switch (localName) {
	            case 'author':
	                info.author = (0, _getPersonInfo2['default'])(node);
	                break;
	            case 'src-url':
	                info.sourceURL = textContent;
	                break;
	            case 'id':
	                info.id = textContent;
	                break;
	            case 'version':
	                info.version = textContent;
	                break;
	            case 'history':
	                info.history = this.parseBlock(node, documentData);
	                break;
	            case 'date':
	                info.date = textContent.split('-').reverse().join('.');
	                break;
	            case 'program-used':
	                info.programs = textContent.split(',').map(function (program) {
	                    return program.trim();
	                });
	                break;
	        }
	    }, this);

	    return info;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	/**
	 *
	 * @param xml
	 * @param documentData
	 * @param list
	 * @private
	 */

	exports['default'] = function (xml, documentData, list) {
	    var _xml$attributes = xml.attributes;
	    var attributes = _xml$attributes === undefined ? {} : _xml$attributes;

	    _JsFile.dom.children(xml).forEach(function (node) {
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
	        var el = _JsFile.Document.elementPrototype;
	        el.properties.tagName = 'A';
	        el.properties.name = attributes.id.value;
	        list[list.length - 1].children.push(el);
	    }
	};

	;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _parseImage = __webpack_require__(5);

	var _parseImage2 = _interopRequireDefault(_parseImage);

	/**
	 *
	 * @param options {{node, documentData}}
	 * @private
	 */

	exports['default'] = function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var result = undefined;
	    var documentData = options.documentData;
	    var _options$node = options.node;
	    var node = _options$node === undefined ? {} : _options$node;

	    switch (node.localName) {
	        case 'p':
	            result = this.parseParagraph({ node: node });
	            break;
	        case 'empty-line':
	            result = _JsFile.Document.elementPrototype;
	            result.properties.tagName = 'BR';
	            break;
	        case 'subtitle':
	            result = this.parseParagraph({ node: node });
	            result.style.textAlign = 'center';
	            break;
	        case 'image':
	            result = (0, _parseImage2['default'])({
	                node: node,
	                documentData: documentData
	            });

	            break;
	        default:
	            result = this.parseBlock(node, documentData);
	    }

	    return result;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _parseLinkElement = __webpack_require__(14);

	var _parseLinkElement2 = _interopRequireDefault(_parseLinkElement);

	/**
	 *
	 * @param params
	 * @returns {*}
	 * @private
	 */

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var node = params.node || {};
	    var children = _JsFile.dom.children(node);
	    var element = undefined;
	    var result = _JsFile.Document.elementPrototype;

	    result.properties.tagName = 'P';

	    children.forEach(function (child) {
	        var _child$textContent = child.textContent;
	        var textContent = _child$textContent === undefined ? '' : _child$textContent;
	        var localName = child.localName;

	        if (localName === 'a') {
	            result.children.push((0, _parseLinkElement2['default'])(child));
	        } else {
	            element = _JsFile.Document.elementPrototype;
	            element.properties.textContent = textContent;

	            if (localName === 'strong') {
	                element.style.fontWeight = 'bold';
	            } else if (localName === 'emphasis') {
	                element.style.fontStyle = 'italic';
	            }

	            result.children.push(element);
	        }
	    });

	    if (!children[0] && node.textContent) {
	        element = _JsFile.Document.elementPrototype;
	        element.properties.textContent = node.textContent;
	        result.children.push(element);
	    }

	    return result;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	/**
	 *
	 * @param node
	 * @returns {*}
	 * @private
	 */

	exports['default'] = function () {
	    var node = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var result = _JsFile.Document.elementPrototype;
	    var href = node.attributes['l:href'] || node.attributes['xlink:href'];
	    var link = href && href.value || '';

	    result.properties.tagName = 'A';
	    result.properties.textContent = node.textContent;
	    result.properties.href = link;

	    if (link && link[0] !== '#') {
	        result.properties.target = '_blank';
	    }

	    return result;
	};

	;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;