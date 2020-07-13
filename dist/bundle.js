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

/***/ "./src/InputValidator.js":
/*!*******************************!*\
  !*** ./src/InputValidator.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputValidator; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar InputValidator = /*#__PURE__*/function () {\n  function InputValidator() {\n    _classCallCheck(this, InputValidator);\n  }\n\n  _createClass(InputValidator, null, [{\n    key: \"validate\",\n    value: function validate(input) {\n      return input == null;\n    }\n  }]);\n\n  return InputValidator;\n}();\n\n\n\n//# sourceURL=webpack:///./src/InputValidator.js?");

/***/ }),

/***/ "./src/OneEditChecker.js":
/*!*******************************!*\
  !*** ./src/OneEditChecker.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OneEditChecker; });\n/* harmony import */ var _SCInputValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SCInputValidator */ \"./src/SCInputValidator.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar OneEditChecker = /*#__PURE__*/function () {\n  function OneEditChecker() {\n    _classCallCheck(this, OneEditChecker);\n  }\n\n  _createClass(OneEditChecker, [{\n    key: \"insertRemoveReplaceChar\",\n    value: function insertRemoveReplaceChar(input, output) {\n      var i = 0;\n      var j = 0;\n      var misMatchCount = 0;\n      var outPutLength = output.length;\n\n      while (outPutLength-- != 0) {\n        if (input.charAt(j) && output.charAt(i) != input.charAt(j)) {\n          misMatchCount++;\n          output.length === input.length ? (i++, j++) : i++;\n        } else {\n          i++;\n          j++;\n        }\n      }\n\n      return misMatchCount;\n    }\n  }], [{\n    key: \"isOneEditAway\",\n    value: function isOneEditAway(stringCombo) {\n      if (_SCInputValidator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(stringCombo)) {\n        throw \"bad input!\";\n      }\n\n      var output = stringCombo.getOutput();\n      var input = stringCombo.getInput();\n      var oneEditCheckerObj = new OneEditChecker();\n      var insert, replace, remove;\n\n      switch (output.length) {\n        case input.length + 1:\n          insert = oneEditCheckerObj.insertRemoveReplaceChar(input, output);\n          break;\n\n        case input.length:\n          replace = oneEditCheckerObj.insertRemoveReplaceChar(input, output);\n          break;\n\n        case input.length - 1:\n          remove = oneEditCheckerObj.insertRemoveReplaceChar(output, input);\n          break;\n\n        default:\n          return false;\n      }\n\n      return insert === 0 || insert === 1 || replace === 1 || remove === 0 || remove === 1;\n    }\n  }]);\n\n  return OneEditChecker;\n}();\n\n\n\n//# sourceURL=webpack:///./src/OneEditChecker.js?");

/***/ }),

/***/ "./src/SCInputValidator.js":
/*!*********************************!*\
  !*** ./src/SCInputValidator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SCInputValidator; });\n/* harmony import */ var _InputValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputValidator */ \"./src/InputValidator.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar SCInputValidator = /*#__PURE__*/function (_InputValidator) {\n  _inherits(SCInputValidator, _InputValidator);\n\n  var _super = _createSuper(SCInputValidator);\n\n  function SCInputValidator() {\n    _classCallCheck(this, SCInputValidator);\n\n    return _super.call(this);\n  }\n\n  _createClass(SCInputValidator, null, [{\n    key: \"validate\",\n    value: function validate(stringComboObj) {\n      return !stringComboObj.getInput() || !stringComboObj.getOutput();\n    }\n  }]);\n\n  return SCInputValidator;\n}(_InputValidator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/SCInputValidator.js?");

/***/ }),

/***/ "./src/StringCombo.js":
/*!****************************!*\
  !*** ./src/StringCombo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StringCombo; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StringCombo = /*#__PURE__*/function () {\n  function StringCombo(input, output) {\n    _classCallCheck(this, StringCombo);\n\n    this.input = input;\n    this.output = output;\n  }\n\n  _createClass(StringCombo, [{\n    key: \"getInput\",\n    value: function getInput() {\n      return this.input;\n    }\n  }, {\n    key: \"getOutput\",\n    value: function getOutput() {\n      return this.output;\n    }\n  }]);\n\n  return StringCombo;\n}();\n\n\n\n//# sourceURL=webpack:///./src/StringCombo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StringCombo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StringCombo */ \"./src/StringCombo.js\");\n/* harmony import */ var _OneEditChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneEditChecker */ \"./src/OneEditChecker.js\");\n\n\nvar strComb = new _StringCombo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"sick\");\nconsole.log(_OneEditChecker__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isOneEditAway(strComb));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });