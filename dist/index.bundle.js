"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmeals"] = self["webpackChunkmeals"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nfooter {\\n  position: fixed;\\n  bottom: 0;\\n}\\n\\nimg {\\n  width: 100%;\\n}\\n\\n.item-text:nth-child(1) {\\n  font-weight: bolder;\\n  margin-bottom: 1rem;\\n  margin-top: 2rem;\\n}\\n\\n.item-text:nth-child(2) {\\n  font-weight: lighter;\\n  color: rgb(220, 53, 69);\\n}\\n\\n.meals-row {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  gap: 12px;\\n  padding: 32px 24px;\\n}\\n\\n.blur {\\n  filter: blur(8px);\\n  -webkit-filter: blur(8px);\\n}\\n\\n.meal-card {\\n  width: 200px;\\n  flex-grow: 0;\\n}\\n\\n#details-popup {\\n  width: 90%;\\n  min-height: 98vh;\\n  margin: auto;\\n  text-align: center;\\n  z-index: 1000;\\n  position: absolute;\\n  top: 10px;\\n  left: 0;\\n  right: 0;\\n}\\n\\n.comment > * {\\n  padding: 0 1rem;\\n}\\n\\n.meal-image {\\n  width: 100%;\\n  height: 500px;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n.food-container {\\n  position: relative;\\n  text-align: left;\\n}\\n\\n.food-image {\\n  width: 50%;\\n  margin: auto;\\n}\\n\\n.close-btn {\\n  padding: 1rem;\\n  background-color: #800;\\n  color: #fff;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  z-index: 1000;\\n}\\n\\n.badge {\\n  color: inherit;\\n  background-color: #f0f0f0;\\n  margin-left: 0.5rem;\\n  margin-bottom: 0.5rem;\\n  font-weight: normal;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://meals/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://meals/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://meals/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://meals/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://meals/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://meals/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://meals/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://meals/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://meals/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://meals/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fetch)\n/* harmony export */ });\nclass Fetch {\n     static displayMeals = async (category = 'Beef') => {\n       const mealsList = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);\n       const response = await mealsList.json();\n       return response;\n     }\n}\n\n//# sourceURL=webpack://meals/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _modules_views_meal_show_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/views/meal-show.js */ \"./src/modules/views/meal-show.js\");\n/* harmony import */ var _modules_views_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/views/meal-dom-elements.js */ \"./src/modules/views/meal-dom-elements.js\");\n/* harmony import */ var _modules_views_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/views/comment-dom-elements.js */ \"./src/modules/views/comment-dom-elements.js\");\n/* harmony import */ var _modules_comments_add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comments/add.js */ \"./src/modules/comments/add.js\");\n/* harmony import */ var _modules_comments_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/comments/index.js */ \"./src/modules/comments/index.js\");\n/* harmony import */ var _modules_views_comment_show_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/views/comment-show.js */ \"./src/modules/views/comment-show.js\");\n\n\n\n\n\n\n\n\n\n// declare HTML element to hold the meals display\nconst mealsRow = document.querySelector('.meals-row');\n\n// get all categories to add event listeners\nconst categories = document.querySelectorAll('.category');\n\n// mapping meal cards on the page\nconst mapCard = (meals) => {\n  // empty the meals section first\n  mealsRow.innerHTML = '';\n  // loop through all given meals\n  meals.forEach((meal) => {\n    // creating div element to hold one(1) meal info\n    const mealCard = document.createElement('div');\n    mealCard.classList.add('meal-card');\n    mealCard.innerHTML = `\n        <div class=\"meal-img\"><img alt=\"${meal.strMeal}\" src=\"${meal.strMealThumb}\"></div>\n                <div class=\"meal-desc\">\n                    <span class=\"meal-name\">${meal.strMeal}</span>\n                    <div class=\"meal-likes\">\n                        <span class=\"like-icon\"></span>\n                        <span class=\"like-number\"></span>\n                    </div>\n                </div>\n                <div class=\"meal-action\">\n                    <button class=\"btn btn-sm btn-dark comment-btn\" id=\"${meal.idMeal}\">Comments</button>\n                    <button class=\"btn btn-sm btn-dark reserv-btn\" id=\"${meal.idMeal}\">Reservations</button>\n                </div>\n        `;\n\n    // apend meal info to the parent section(declared above)\n    mealsRow.appendChild(mealCard);\n  });\n};\n\n// default function to display the cards on the page (called when a page loads)\nconst displayMeals = async () => {\n  const mealsList = await _display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMeals();\n  const meals = await mealsList.meals;\n  mapCard(meals);\n};\n\n// add eventlistnener on categories once a specific category is clicked.\ncategories.forEach((category) => {\n  category.addEventListener('click', (e) => {\n    const category = e.target.textContent;\n    _display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMeals(category).then((cat) => {\n      const { meals } = cat;\n      mapCard(meals);\n    });\n  });\n});\n\n// displaying meals on the page by default\ndisplayMeals();\n\n_modules_views_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__.closeBtn.addEventListener('click', () => {\n  (0,_modules_views_meal_show_js__WEBPACK_IMPORTED_MODULE_2__.resetData)();\n  _modules_views_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__.popupBox.classList.toggle('d-none');\n});\n\nmealsRow.addEventListener('click', (evt) => {\n  const elmt = evt.target;\n  if (!elmt.classList.contains('comment-btn')) return;\n  const id = elmt.getAttribute('id');\n  (0,_modules_views_meal_show_js__WEBPACK_IMPORTED_MODULE_2__.showPopup)(id);\n  (0,_modules_comments_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(id).then((data) => (0,_modules_views_comment_show_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(data));\n  _modules_views_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.form.item_id.value = id;\n});\n_modules_views_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.form.addEventListener('submit', (evt) => {\n  evt.preventDefault();\n  const author = _modules_views_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.form.author.value;\n  const insight = _modules_views_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.form.insight.value;\n  (0,_modules_comments_add_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_modules_views_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.form.item_id.value, author, insight).then(() => {\n    // will add code for displaying feedback Message\n  });\n  const clearFormFields = (form) => {\n    Object.keys(form).forEach((key, index) => {\n      if (index < 2) form[key].value = '';\n    });\n  };\n  clearFormFields(_modules_views_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.form);\n});\n\n\n//# sourceURL=webpack://meals/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments/add.js":
/*!*************************************!*\
  !*** ./src/modules/comments/add.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _global_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-value.js */ \"./src/modules/global-value.js\");\n\n\nconst addComment = async (itemID, author, body) => {\n  const response = await fetch(_global_value_js__WEBPACK_IMPORTED_MODULE_0__.url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: itemID,\n      username: author,\n      comment: body,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return (response.ok) ? response : Promise.reject(response);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://meals/./src/modules/comments/add.js?");

/***/ }),

/***/ "./src/modules/comments/index.js":
/*!***************************************!*\
  !*** ./src/modules/comments/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _global_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-value.js */ \"./src/modules/global-value.js\");\n\n\nconst comments = async (id) => {\n  const response = await fetch(`${_global_value_js__WEBPACK_IMPORTED_MODULE_0__.url}?item_id=${id}`);\n  return (response.ok) ? response.json() : Promise.reject(response);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n//# sourceURL=webpack://meals/./src/modules/comments/index.js?");

/***/ }),

/***/ "./src/modules/global-value.js":
/*!*************************************!*\
  !*** ./src/modules/global-value.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setText\": () => (/* binding */ setText),\n/* harmony export */   \"toggleBlur\": () => (/* binding */ toggleBlur),\n/* harmony export */   \"url\": () => (/* binding */ url)\n/* harmony export */ });\n/* harmony import */ var _views_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/meal-dom-elements.js */ \"./src/modules/views/meal-dom-elements.js\");\n\n\nconst appID = 'Kw76R2UqPqv86GuooSFn';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appID);\nconst url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`;\nconst setText = (element, value = '') => {\n  element.innerHTML = value;\n};\n\nfunction toggleBlur() {\n  _views_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.mealsSection.classList.toggle('blur');\n  _views_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.header.classList.toggle('blur');\n}\n\n//# sourceURL=webpack://meals/./src/modules/global-value.js?");

/***/ }),

/***/ "./src/modules/meals/show.js":
/*!***********************************!*\
  !*** ./src/modules/meals/show.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeal = async (id) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, { header: { 'Access-Control-Allow-Origin': '*' } }).then((response) => response.json()).then((data) => data.meals[0]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeal);\n\n//# sourceURL=webpack://meals/./src/modules/meals/show.js?");

/***/ }),

/***/ "./src/modules/views/comment-dom-elements.js":
/*!***************************************************!*\
  !*** ./src/modules/views/comment-dom-elements.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounterBox\": () => (/* binding */ commentCounterBox),\n/* harmony export */   \"commentListBox\": () => (/* binding */ commentListBox),\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\nconst form = document.querySelector('.form');\nconst commentListBox = document.querySelector('.comment-list');\nconst commentCounterBox = document.querySelector('.comment-counter');\n\n//# sourceURL=webpack://meals/./src/modules/views/comment-dom-elements.js?");

/***/ }),

/***/ "./src/modules/views/comment-show.js":
/*!*******************************************!*\
  !*** ./src/modules/views/comment-show.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _global_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-value.js */ \"./src/modules/global-value.js\");\n/* harmony import */ var _comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-dom-elements.js */ \"./src/modules/views/comment-dom-elements.js\");\n\n\n\nconst showComment = (item) => `<div class=\"border mx-0 my-1 px-2 py-1 shadow-sm\"><div class=\"comment row\">\n                <div class=\"date text-dark small col-md-2\">${item.creation_date}</div>\n                <div class=\"comment-author text-danger font-weight-lighter col-md-3\">${item.username}</div>\n                <div class=\"comment-body col-md-7\">\n                    ${item.comment}\n                </div>\n            </div></div> `;\nconst commentCounter = (comments) => comments.length;\nconst setComment = (comments) => {\n  let content = '';\n  comments.forEach((comment) => {\n    content += showComment(comment);\n  });\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_0__.setText)(_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.commentCounterBox, ` <span class='text-danger'>(${commentCounter(comments)})</span>`);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_0__.setText)(_comment_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.commentListBox, content);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setComment);\n\n//# sourceURL=webpack://meals/./src/modules/views/comment-show.js?");

/***/ }),

/***/ "./src/modules/views/meal-dom-elements.js":
/*!************************************************!*\
  !*** ./src/modules/views/meal-dom-elements.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"areaBox\": () => (/* binding */ areaBox),\n/* harmony export */   \"categoryBox\": () => (/* binding */ categoryBox),\n/* harmony export */   \"closeBtn\": () => (/* binding */ closeBtn),\n/* harmony export */   \"foodImageBox\": () => (/* binding */ foodImageBox),\n/* harmony export */   \"foodNameBox\": () => (/* binding */ foodNameBox),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"ingredientListBox\": () => (/* binding */ ingredientListBox),\n/* harmony export */   \"instruction\": () => (/* binding */ instruction),\n/* harmony export */   \"mealsSection\": () => (/* binding */ mealsSection),\n/* harmony export */   \"popupBox\": () => (/* binding */ popupBox),\n/* harmony export */   \"tagListBox\": () => (/* binding */ tagListBox)\n/* harmony export */ });\nconst foodImageBox = document.querySelector('.food-image');\nconst foodNameBox = document.querySelector('.food-name');\nconst categoryBox = document.querySelector('.item-category');\nconst areaBox = document.querySelector('.area');\nconst instruction = document.querySelector('.instruction');\nconst ingredientListBox = document.querySelector('.ingredient-list');\nconst tagListBox = document.querySelector('.tag-list');\nconst closeBtn = document.querySelector('.close-btn');\nconst popupBox = document.getElementById('details-popup');\nconst header = document.querySelector('.header');\nconst mealsSection = document.querySelector('.meals-section');\n\n\n//# sourceURL=webpack://meals/./src/modules/views/meal-dom-elements.js?");

/***/ }),

/***/ "./src/modules/views/meal-show.js":
/*!****************************************!*\
  !*** ./src/modules/views/meal-show.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetData\": () => (/* binding */ resetData),\n/* harmony export */   \"showPopup\": () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-dom-elements.js */ \"./src/modules/views/meal-dom-elements.js\");\n/* harmony import */ var _meals_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meals/show.js */ \"./src/modules/meals/show.js\");\n/* harmony import */ var _global_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-value.js */ \"./src/modules/global-value.js\");\n\n\n\n\nconst setIngredients = (meal = []) => {\n  Object.keys(meal).forEach((props, index) => {\n    if (props.startsWith('strIngredient')) {\n      const measure = meal[`strMeasure${(index + 1)}`];\n      _meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.ingredientListBox.innerHTML += meal[props] ? `<span class='badge  badge-pill shadow-sm'>${meal[props]}(${measure})</span>` : '';\n    }\n  });\n};\n\nconst setImage = (container, value = './', altText = '') => {\n  container.innerHTML = `<img src='${value}' class=\"meal-image\" alt=\"${altText}\">`;\n};\n\nconst setData = (meal) => {\n  setImage(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.foodImageBox, meal.strMealThumb, meal.strMeal);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.foodNameBox, meal.strMeal);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.categoryBox, meal.strCategory);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.areaBox, meal.strArea);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.tagListBox, meal.strTags);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.instruction, meal.strInstructions);\n  setIngredients(meal);\n};\n\nconst resetData = () => {\n  setImage(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.foodImageBox);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.foodNameBox);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.categoryBox);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.areaBox);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.tagListBox);\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.setText)(_meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.instruction);\n  setIngredients();\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.toggleBlur)();\n};\n\nconst showPopup = (id) => {\n  (0,_meals_show_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id).then((meal) => {\n    setData(meal);\n  });\n  (0,_global_value_js__WEBPACK_IMPORTED_MODULE_2__.toggleBlur)();\n  _meal_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.popupBox.classList.toggle('d-none');\n};\n\n//# sourceURL=webpack://meals/./src/modules/views/meal-show.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);