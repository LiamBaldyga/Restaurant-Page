/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurantbg.jpeg */ \"./src/images/restaurantbg.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\nbody {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-attachment: fixed;\\r\\n    background-size: cover;\\r\\n}\\r\\n\\r\\n\\r\\nheader {\\r\\n    background-color: black;\\r\\n    opacity: .9;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    list-style: none;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 20px;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\nnav button {\\r\\n    cursor: pointer;\\r\\n    border-style: none;\\r\\n    font-size: 1.25rem;\\r\\n    background: none;\\r\\n    color: white;\\r\\n    padding: 10px;\\r\\n    border-bottom: 2px solid transparent;\\r\\n}\\r\\n\\r\\n.home {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    height: 90vh;\\r\\n}\\r\\n\\r\\n.active {\\r\\n    transform: scale(1.15);\\r\\n    transition-duration: .4s;\\r\\n    border-bottom: 2px solid white;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n    background-color: black;\\r\\n    opacity: .9;\\r\\n    width: 600px;\\r\\n    height: 600px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    color: antiquewhite;\\r\\n}\\r\\n\\r\\n.hero-logo {\\r\\n    width: 250px;\\r\\n    opacity: 100;\\r\\n}\\r\\n\\r\\nli {\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n.info {\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 10px;\\r\\n    text-align: center;\\r\\n    font-size: 1.35rem;\\r\\n}\\r\\n\\r\\n.schedule {\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.schedule > li {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    border-bottom: 1px inset whitesmoke;\\r\\n}\\r\\n\\r\\n.locaiton {\\r\\n    padding-bottom: 50px;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    height: auto;\\r\\n    margin: 50px;\\r\\n}\\r\\n\\r\\n.mHero {\\r\\n    background-color: black;\\r\\n    opacity: .9;\\r\\n    width: 900px;\\r\\n    height: auto;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    color: antiquewhite;\\r\\n    padding: 50px;\\r\\n    gap: 25px;\\r\\n}\\r\\n\\r\\n.burger-head, .sandwich-head, .dinner-head {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.burgers, .sandwiches, .dinner {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.about {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    height: auto;\\r\\n    margin: 50px;\\r\\n}\\r\\n\\r\\n.about-hero {\\r\\n    background-color: black;\\r\\n    opacity: .9;\\r\\n    width: 900px;\\r\\n    height: auto;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    color: antiquewhite;\\r\\n    padding: 50px;\\r\\n    gap: 10px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nfunction about() {\r\n    const about = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'about');\r\n    \r\n    const aboutHero = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'about-hero', about);\r\n\r\n    const aboutHead = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'about-head', aboutHero, 'About Us');\r\n    const p1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-p', aboutHero, 'Rick Dubro purchased his first Pizzeria in 1978 in Roseville Mi. with his high school friend Tom Griffin.');\r\n    const p2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-p', aboutHero, 'Together over the next few years Tom and Rick opened 6 locations under the name of Kings Pizzeria in Detroit, St. Clair Shores, Roseville, East Detroit and Warren.');\r\n    const p3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-p', aboutHero, 'Upon moving north to Traverse City in 1990, Rick worked managing a sports restaurant in Traverse City. At the same time running one of his restaurants downstate. After managing a full service restaurant Rick decided it was time to own his own again.');\r\n    const p4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-p', aboutHero, 'In 1996 Rick & Lori purchased a Carry out, Deli, Delivery location known as Papa J’s & Roosters Chicken in Grawn. After managing a full service restaurant, Rick decided to remodel Papa J’s & Roosters Chicken in 1998 and become a full service Restaurant which is now Rico’s Cafe’.');\r\n    const p5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-p', aboutHero, 'The pizza recipe has not changed since 1978!');\r\n    const p6 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-p', aboutHero, 'Rico’s Cafe’ is a supporter of many athletic teams in the area. Including Youth Hockey, Baseball and Football. One of the largest Community events at Rico’s Cafe’ is “Veterans Day”. All Veteran’s are invited to enjoy a complimentary meal at Rico’s every Nov. 11th since 2001. This is our way of “Thanking” our Veterans for our freedom and showing our appreciation to them. It is a day for gratitude, friendships, stories and tears. We have grown from serving 240 Complimentary Meals in 2001 to over 500 in 2006. Rick and Lori are honored to serve our Vet’s for serving our country.');\r\n    \r\n\r\n    return about;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _images_ricos_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ricos.png */ \"./src/images/ricos.png\");\n\r\n\r\n\r\nfunction home() {\r\n    const home = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'home');\r\n\r\n     \r\n    const hero = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'hero', home);\r\n    const heroLogo = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'hero-logo', hero);\r\n    heroLogo.src = _images_ricos_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n\r\n    const info = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'info', hero);\r\n    const heroTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'hero-title', info, 'Hungry for a Burger?');\r\n    const heroP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'hero-p', info, 'Come stop by Rico\\'s Cafe and Pizzeria!');\r\n    const location = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'locaiton', info, '5790 US 31 South • Grawn, Michigan 49637')\r\n\r\n    const schedule = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'schedule', info);\r\n    const MTT = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'MTT', schedule)\r\n    const mttDays = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'mtt-days', MTT, 'Monday, Tuesday, Thursday')\r\n    const monHours = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'mtt-hours', MTT, '9AM - 9PM');\r\n\r\n    const FSS = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'FSS', schedule);\r\n    const fssDays = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'fss-days', FSS, 'Friday, Saturday, Sunday');\r\n    const fssHours = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'fss-hours', FSS, '8AM - 9PM');\r\n    \r\n    const wed = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'wed', schedule);\r\n    const wedDays = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'wed-Days', wed, 'Wednesday');\r\n    const wedHours = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'wed-hours', wed, 'Closed');\r\n    return home;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customElement);\r\n\r\nconst header = document.querySelector('header');\r\nconst footer = document.querySelector('footer');\r\n\r\nfunction customElement(elem, _class, parent, text) {\r\n    const element = document.createElement(elem);\r\n    element.classList.add(_class);\r\n    if(parent) {\r\n        parent.appendChild(element);\r\n    }\r\n    if(text) {\r\n        element.textContent = text;\r\n    }\r\n\r\n    return element;\r\n}\r\n\r\nfunction switchTab(tab) {\r\n    document.body.removeChild(footer.previousElementSibling)\r\n    document.body.insertBefore(tab(), footer);\r\n}\r\n\r\nfunction initContent() {\r\n    document.body.insertBefore((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), footer);\r\n    initHeader();\r\n}\r\n\r\nfunction initHeader() {\r\n    const nav = customElement('nav', 'nav', header);\r\n    const homeB = customElement('button', 'nav-home', nav, 'Home'); \r\n    const menuB = customElement('button', 'nav-menu', nav, 'Menu'); \r\n    const aboutB = customElement('button', 'nav-about', nav, 'About'); \r\n    setCurrentTab(homeB);\r\n\r\n    homeB.addEventListener('click', (e) => {\r\n        if(e.target.classList.contains('active')) return;\r\n        switchTab(_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n        setCurrentTab(homeB);\r\n    })\r\n    menuB.addEventListener('click', (e) => {\r\n        if(e.target.classList.contains('active')) return;\r\n        switchTab(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n        setCurrentTab(menuB);\r\n    })\r\n    aboutB.addEventListener('click', (e) => {\r\n        if(e.target.classList.contains('active')) return;\r\n        switchTab(_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n        setCurrentTab(aboutB);\r\n    })\r\n}\r\n\r\nfunction setCurrentTab(tab) {\r\n    const tabs = document.querySelector('nav').children;\r\n    for(let i = 0; i < tabs.length; i++) {\r\n        tabs[i].classList.remove('active');\r\n    }\r\n    tab.classList.add('active');\r\n}\r\n\r\n\r\ninitContent();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nfunction menu() {\r\n    const menu = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu');\r\n\r\n    const mHero = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'mHero', menu);\r\n\r\n    //burgers\r\n    const burgers = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'burgers', mHero);\r\n    const burgerH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'burger-head', burgers, 'Burgers');\r\n\r\n    const house = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'house', burgers);\r\n    const houseH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'house-head', house, 'House Burger');\r\n    const houseD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'house-desc', house, '1/2 pound char-grilled Black Angus beef on a grilled artisan bun. Served with lettuce, tomato and pickle');\r\n    const houseP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'house-price', house, '$12');\r\n\r\n    const rico = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'rico', burgers);\r\n    const ricoH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'rico-head', rico, 'Rico Burger');\r\n    const ricoD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'rico-desc', rico, 'Fresh ground 2/3 pound char-grilled burger topped with your choice of cheese, lettuce, tomato and pickles on a grilled artisan bun');\r\n    const ricoP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'rico-price', rico, '$13.50');\r\n\r\n    const western = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'western', burgers);\r\n    const westernH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'western-head', western, 'Western Burger');\r\n    const westernD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'western-desc', western, '1/2 pound Black Angus beef, char-grilled with hickory smoked bacon, cheddar cheese and our own BBQ sauce. Served with fresh lettuce and tomato');\r\n    const westernP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'western-price', western, '$13.50');\r\n\r\n    //sandiwches\r\n    const sandwiches = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'sandwiches', mHero);\r\n    const sandwichH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'sandwich-head', sandwiches, 'Sandwiches and Grinders');\r\n\r\n    const italian = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'italian', sandwiches);\r\n    const italianH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'italian-head', italian, 'Italian Grinder');\r\n    const italianD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'italian-desc', italian, 'Italian sausage, ham, pepperoni, provolone cheese, red onion, yellow peppers, lettuce, tomato, pickles and Italian dressing on our home made breads');\r\n    const italianP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'italian-price', italian, '$12');\r\n\r\n    const pulledpork = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'pulledpork', sandwiches);\r\n    const pulledporkH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'pulledpork-head', pulledpork, 'Pulled Pork Grinder');\r\n    const pulledporkD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'pulledpork-desc', pulledpork, 'Our slow roasted pulled pork, hickory bacon, melted cheddar cheese, green peppers and onions with bbq sauce on our homemade bread');\r\n    const pulledporkP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'pulledpork-price', pulledpork, '$12');\r\n\r\n    const reuben = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'reuben', sandwiches);\r\n    const reubenH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'reuben-head', reuben, 'Reuben Sandwich');\r\n    const reubenD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'reuben-desc', reuben, 'Thinly sliced lean corned beef topped with our signature sweet and sauerkraut, domestic Swiss and 1000 island dressing on grilled swirl rye bread');\r\n    const reubenP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'reuben-price', reuben, '$13.50');\r\n\r\n    //dinner\r\n    const dinner = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dinner', mHero);\r\n    const dinnerH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'dinner-head', dinner, 'Dinner Entrees');\r\n\r\n    const chicken = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'chicken', dinner);\r\n    const chickenH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'chicken-head', chicken, 'Smothered Grilled Chicken');\r\n    const chickenD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'chicken-desc', chicken, 'A 6 oz. marinated chicken breast grilled and smothered with sautéed mushrooms, onions and green peppers with melted provolone cheese on top');\r\n    const chickenP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'chicken-price', chicken, '$14');\r\n\r\n    const tenders = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'tenders', dinner);\r\n    const tendersH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'tenders-head', tenders, 'Chicken Tenders');\r\n    const tendersD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'tenders-desc', tenders, 'A favorite for the young and not so young! Breaded chicken tenders fried to a golden brown and served with French fries and ranch dressing');\r\n    const tendersP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'tenders-price', tenders, '$14');\r\n\r\n    const roast = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'roast', dinner);\r\n    const roastH = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'roast-head', roast, 'Hot Roast Beef Sandwich');\r\n    const roastD = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'roast-desc', roast, 'Our own home roasted beef, sliced thin and piled high between grilled sourdough with beef gravy');\r\n    const roastP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'roast-price', roast, '$16.50');\r\n\r\n    return menu;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/restaurantbg.jpeg":
/*!**************************************!*\
  !*** ./src/images/restaurantbg.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72ea1632a170fb564175.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurantbg.jpeg?");

/***/ }),

/***/ "./src/images/ricos.png":
/*!******************************!*\
  !*** ./src/images/ricos.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71a4f6d9eeed153f0b64.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ricos.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;