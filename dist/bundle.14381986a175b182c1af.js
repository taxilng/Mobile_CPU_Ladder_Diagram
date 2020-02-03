/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/base.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/base.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/title.jpg */ \"./src/img/title.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: 'Microsoft YaHei', 'Arial Narrow';\\r\\n    font-size: 14px;\\r\\n    color: #666;\\r\\n    line-height: 18px;\\r\\n}\\r\\ntable {\\r\\n    border-collapse: collapse;\\r\\n}\\r\\ntable,\\r\\ntr,\\r\\ntd {\\r\\n    border: 0px;\\r\\n}\\r\\ntr,\\r\\ntd {\\r\\n    padding: 7px 0px;\\r\\n    height: 22px;\\r\\n    text-align: center;\\r\\n}\\r\\ntd.content {\\r\\n    border: 1px solid #fff;\\r\\n}\\r\\ntr {\\r\\n    background: #eceded;\\r\\n}\\r\\ntr:hover {\\r\\n    background: #e7f4fe;\\r\\n    color: #06c;\\r\\n}\\r\\n\\r\\ntd {\\r\\n    min-width: 100px;\\r\\n    width: 100px;\\r\\n}\\r\\n.color_blue {\\r\\n    color: #036;\\r\\n}\\r\\n.font_14 {\\r\\n    font-size: 14px;\\r\\n}\\r\\n.font_16 {\\r\\n    font-size: 16px;\\r\\n}\\r\\n.font_18 {\\r\\n    font-size: 18px;\\r\\n}\\r\\n.font_20 {\\r\\n    font-size: 20px;\\r\\n}\\r\\n.font_center {\\r\\n    text-align: center;\\r\\n}\\r\\n.font_bold {\\r\\n    font-weight: bold;\\r\\n}\\r\\n.top {\\r\\n    width: 100%;\\r\\n    height: 170px;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat top center;\\r\\n    margin: auto;\\r\\n    position: relative;\\r\\n}\\r\\n.float_div {\\r\\n    position: absolute;\\r\\n    right: 0px;\\r\\n    bottom: 10px;\\r\\n    height: auto;\\r\\n}\\r\\n.top table {\\r\\n    color: #cde2fd;\\r\\n    font-size: 12px;\\r\\n}\\r\\n.top td {\\r\\n    color: #e4effe;\\r\\n    height: 20px;\\r\\n    line-height: 20px;\\r\\n    background: none;\\r\\n    padding: 0;\\r\\n    width: auto;\\r\\n}\\r\\n.top tr,\\r\\n.top tr:hover {\\r\\n    background: none;\\r\\n    color: #fff;\\r\\n}\\r\\n.top td a {\\r\\n    color: #e4effe;\\r\\n}\\r\\n.top td a:hover {\\r\\n    color: #fff;\\r\\n}\\r\\n.main {\\r\\n    width: calc(100% - 2px);\\r\\n    margin: auto;\\r\\n}\\r\\na:link {\\r\\n    color: #666;\\r\\n    text-decoration: none;\\r\\n}\\r\\na:visited {\\r\\n    color: #666;\\r\\n    text-decoration: none;\\r\\n}\\r\\na:hover {\\r\\n    color: #06c;\\r\\n    text-decoration: none;\\r\\n}\\r\\na:ative {\\r\\n    color: #06c;\\r\\n}\\r\\n.newCpu {\\r\\n    color: white;\\r\\n    background: #c77e7e;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/base.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/base.css":
/*!**********************!*\
  !*** ./src/base.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./base.css */ \"./node_modules/css-loader/dist/cjs.js!./src/base.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/base.css?");

/***/ }),

/***/ "./src/img/t_bg.png":
/*!**************************!*\
  !*** ./src/img/t_bg.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./img/t_bg.png\";\n\n//# sourceURL=webpack:///./src/img/t_bg.png?");

/***/ }),

/***/ "./src/img/title.jpg":
/*!***************************!*\
  !*** ./src/img/title.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./img/title.jpg\";\n\n//# sourceURL=webpack:///./src/img/title.jpg?");

/***/ }),

/***/ "./src/img/top_img_bg.png":
/*!********************************!*\
  !*** ./src/img/top_img_bg.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./img/top_img_bg.png\";\n\n//# sourceURL=webpack:///./src/img/top_img_bg.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./base.css */ \"./src/base.css\");\n\n__webpack_require__(/*! ./img/t_bg.png */ \"./src/img/t_bg.png\");\n\n__webpack_require__(/*! ./img/top_img_bg.png */ \"./src/img/top_img_bg.png\");\n\nvar cpuData = [['', '', '', '', '', '', '', '', 'A13', '', ''], ['', '', '', '', '骁龙865', '', '', '', '', '', ''], ['', '', '', '', '', '', '天玑1000', '', '', '', ''], ['', '', '', '', '', '', '', '麒麟990', '', '', ''], ['', '', '', '', '骁龙855 Plus', '', '', '', '', '', ''], ['', '', '', '', '骁龙855', 'Exynos 9820', '', '', 'A12', '', ''], ['', '', '', '', '', '', '', '麒麟980', '', '', ''], ['', '', '', '', '骁龙845', 'Exynos 9810', '', '', '', '', ''], ['', '', '', '骁龙765/765G', '', '', 'Helio G90T', '麒麟810', 'A11', '', ''], ['', '', '', '骁龙730/730G', '骁龙835', 'Exynos 8895', '', '麒麟970', '', '', ''], ['', '', '', '', '', '', '', '', 'A10', '', ''], ['', '', '', '骁龙712', '', '', '', '', 'A9X', '', ''], ['', '', '', '骁龙710', '', '', '', '麒麟960', '', '', ''], ['', '', '', '骁龙675', '骁龙821', '', 'Helio X30', '', '', '', ''], ['', '', '', '骁龙670', '骁龙820', '', '', '', '', '', ''], ['', '', '', '', '骁龙820降频版', 'Exynos 8890', '', '', 'A9', '', ''], ['', '', '', '骁龙665', '', '', 'Helio P60', '麒麟710', '', '', ''], ['', '', '', '骁龙660', '', '', 'Helio X27', '麒麟955', '', '', ''], ['', '', '', '骁龙636', '', '', '', '麒麟950', '', '', ''], ['', '', '', '骁龙630', '骁龙810', 'Exynos 7420', 'Helio X25', '', 'A8X', '', ''], ['', '', '', '', '', '', 'Helio X23', '', '', '', ''], ['', '', '', '骁龙653', '', '', 'Helio X20', '', '', '', ''], ['', '', '', '', '', '', 'Helio P30', '', 'A8', '', ''], ['', '', '', '骁龙652', '', '', 'Helio P25', '', '', '', 'Tegra X1'], ['', '', '', '', '', '', 'Helio P23', '', '', '', ''], ['', '', '', '骁龙650', '', '', 'Helio P20', '', '', '', ''], ['', '', '', '', '骁龙808', '', 'Helio X10', '麒麟935', '', '', 'Tegra K1'], ['', '', '', '', '', '', 'Helio P15', '', '', '', ''], ['', '', '', '', '', 'Exynos 5433', 'Helio P10', '麒麟930', '', '', ''], ['', '', '', '', '', '', '', '麒麟659', '', '', ''], ['', '', '', '骁龙626', '骁龙805', '', '', '麒麟650', '', '', ''], ['', '', '', '骁龙625', '骁龙801<br/>(MSM8x74AC)', 'Exynos 5430', '', '', '', 'Z3590', ''], ['', '', '', '', '骁龙801<br/>(MSM8x74AB)', 'Exynos 7870', '', '', '', 'Z3580', ''], ['', '', '', '', '骁龙801<br/>(MSM8x74AA)', 'Exynos 7580', 'MT6752/M', '', '', 'Z3570', ''], ['', '', '', '', '', 'Exynos 5433', 'MT6753', '', '', 'Z3560', ''], ['', '', '', '', '', '', 'MT6750', '', '', '', ''], ['', '', '', '', '', '', 'MT6739', '', '', '', ''], ['', '', '骁龙450', '', '', '', 'MT6735', '', '', '', ''], ['', '', '骁龙439', '', '', 'Exynos 5800', '', '', '', '', ''], ['', '', '', '', '', 'Exynos 5430', '', '', '', 'Z3530', ''], ['', '', '', '', '', 'Exynos 5422', '', '麒麟620', '', '', ''], ['', '', '骁龙435', '骁龙617', '骁龙800', 'Exynos 5420', 'MT6595/T', '麒麟928', 'A7', 'Z3480', 'Tegra 4'], ['', '', '骁龙430', '骁龙616', '', 'Exynos 5410', 'MT6592', '麒麟925', '', 'Z3460', ''], ['', '', '骁龙427', '骁龙615', '', '', '', '麒麟920', '', '', 'Tegra 4i'], ['APQ8064', '', '骁龙425', '骁龙600', '', 'Exynos 5260', 'MT6582', 'K3V2+<br/>(麒麟910)', '', '', ''], ['', '', '', '', '', '', '', '', '', 'Z3580', ''], ['', '骁龙212', '', '骁龙610', '', '', '', '', '', '', ''], ['', '骁龙210', '骁龙412', '', '', 'Exynos 5250', '', '', 'A6X', '', ''], ['MSM8960T', '骁龙208', '骁龙410', '', '', 'Exynos 4412', '', '', 'A6', 'Z3480', ''], ['MSM8260A<br/>/8660A/8960', '骁龙200<br/>(MSM8x12)', '骁龙400', '', '', '', '', 'K3V2E', '', 'Z2580', ''], ['', '骁龙200<br/>(MSM8x10)', '', '', '', '', '', 'K3V2', '', '', 'Tegra 3'], ['', '', '', '', '', '', '', '', '', 'Z2480', ''], ['', '', '骁龙400', '', '', '', 'MT6589', '', 'A5X', 'Z2460', ''], ['', '骁龙200<br/>(MSM8x25Q)', '', '', '', '', '', '', 'A5', '', ''], ['MSM8260<br/>/8660', '', '', '', '', 'Exynos 4210<br/>/4212', '', '', '', 'Z2420', ''], ['MSM8225<br/>/8625', '', '', '', '', '', 'MT6577/6572', '', '', '', 'Tegra 2'], ['MSM8255T<br/>/8655T', '', '', '', '', '', '', '', '', '', ''], ['MSM8255<br/>/8655<br/>/APQ8055', '', '', '', '', 'Exynos 3475', 'MT6515/6175', '', '', '', ''], ['MSM7230<br/>/7630', '', '', '', '', '', 'MT6515M', '', 'A4', '', ''], ['QSD8650<br/>/8250', '', '', '', '', 'Exynos 3110', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '', ''], ['MSM7627A<br/>/7227A', '', '', '', '', '', '', '', '', '', ''], ['MSM7627T<br/>/7227T', '', '', '', '', '', '', '', '', '', ''], ['MSM7627<br/>/7227', '', '', '', '', 'S5PC100', '', '', '', '', ''], ['', '', '', '', '', 'S5L8900', 'MT6573/13', '', '', '', 'Tegra'], ['', '', '', '', '', '', 'MT6516', '', '', '', '']];\ntry {\n    var newcpuData = cpuData.map(function (v) {\n        return v.map(function (x, i, arr) {\n            var temp = '';\n            if (i === 0) {\n                temp = '<tr><td class=\"content\">' + x + '</td>';\n            } else if (i === arr.length - 1) {\n                temp = '<td class=\"content\">' + x + '</td></tr>';\n            } else {\n                temp = '<td class=\"content\">' + x + '</td>';\n            }\n            return temp;\n        });\n    }).flat().join('');\n    // console.log(newcpuData);\n    var tbody = document.querySelector('#tbody');\n    // console.log(tbody);\n    tbody.insertAdjacentHTML('beforeend', newcpuData);\n    // 背景高亮\n    var content = document.querySelectorAll('td.content');\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var key = _step.value;\n\n            if (key.textContent.includes('骁龙439')) {\n                console.log(key);\n                key.classList.add('newCpu');\n            }\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n} catch (error) {\n    alert(error);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });