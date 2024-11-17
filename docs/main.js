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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _passwordGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwordGenerator */ \"./src/passwordGenerator.ts\");\n\n\n(0,_passwordGenerator__WEBPACK_IMPORTED_MODULE_1__.passwordGenerator)();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/passwordGenerator.ts":
/*!**********************************!*\
  !*** ./src/passwordGenerator.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   passwordGenerator: () => (/* binding */ passwordGenerator)\n/* harmony export */ });\nfunction passwordGenerator() {\n    // 文字列の先頭を大文字にする\n    function capitalizeFirstLetter(str) {\n        return str.charAt(0).toUpperCase() + str.slice(1);\n    }\n    // パスワード生成\n    function generatePassword() {\n        const result = document.getElementById('result');\n        const letters = 'abcdefghijklmnopqrstuvwxyz';\n        const numbers = '0123456789';\n        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';\n        const colorsJa = [\n            'shiro',\n            'kuro',\n            'aka',\n            'ao',\n            'kiiro',\n            'midori',\n            'chairo',\n            'daidai',\n            'murasaki',\n            'hai',\n        ];\n        const colorsEn = [\n            'white',\n            'black',\n            'red',\n            'blue',\n            'yellow',\n            'green',\n            'brown',\n            'orange',\n            'purple',\n            'gray',\n        ];\n        const colorsHex = [\n            'ffffff',\n            '000000',\n            'ff0000',\n            '0000ff',\n            'ffff00',\n            '008000',\n            'a52a2a',\n            'ffa500',\n            '800080',\n            '808080',\n        ];\n        const fonts = [\n            'Arial',\n            'TimesNewRoman',\n            'Verdana',\n            'Georgia',\n            'HiraginoKakuGothicProN',\n            'HiraginoMinchoProN',\n            'Meiryo',\n            'MSPGothic',\n            'MSMincho',\n            'NotoSansJP',\n            'NotoSerifJP',\n            'YuGothic',\n            'YuMincho',\n            'Helvetica',\n            'Geneva',\n            'Lucida',\n            'Palatino',\n            'Bookman',\n            'ComicSansMS',\n            'Impact',\n            'LucidaSansUnicode',\n            'Geneva',\n            'LucidaConsole',\n            'Monaco',\n            'LucidaTypewriter',\n            'BitstreamVeraSansMono',\n            'AndaleMono',\n            'CourierNew',\n            'Courier',\n            'FreeMono',\n            'NimbusMonoL',\n            'LucidaTypewriter',\n            'BitstreamVeraSansMono',\n            'AndaleMono',\n            'CourierNew',\n            'Courier',\n            'FreeMono',\n            'NimbusMonoL',\n            'LucidaTypewriter',\n            'BitstreamVeraSansMono',\n            'AndaleMono',\n            'CourierNew',\n            'Courier',\n            'FreeMono',\n            'NimbusMonoL',\n        ];\n        let password = '';\n        let passwordNumber = '';\n        let passwordString1 = '';\n        let passwordString2 = '';\n        let passwordString3 = '';\n        let seed = letters + letters.toUpperCase();\n        if (passwordType1.classList.contains('is-selected')) {\n            for (let i = 0; i < 4; i++) {\n                passwordNumber += numbers[Math.floor(Math.random() * numbers.length)];\n            }\n            let seedString1 = colorsJa[Math.floor(Math.random() * colorsJa.length)];\n            passwordString1 += capitalizeFirstLetter(seedString1);\n            let seedString2 = colorsEn[Math.floor(Math.random() * colorsEn.length)];\n            passwordString2 += capitalizeFirstLetter(seedString2);\n            password = passwordNumber + '@' + passwordString1 + '#' + passwordString2;\n        }\n        else if (passwordType2.classList.contains('is-selected')) {\n            if (numbersCheckbox.checked === true) {\n                seed += numbers;\n            }\n            if (symbolsCheckbox.checked === true) {\n                seed += symbols;\n            }\n            for (let i = 0; i < Number(slider2.value); i++) {\n                password += seed[Math.floor(Math.random() * seed.length)];\n            }\n        }\n        result.textContent = password;\n    }\n    // 要素を取得\n    const slider1 = document.getElementById('slider1');\n    const slider2 = document.getElementById('slider2');\n    const generate = document.getElementById('generate');\n    const numbersCheckbox = document.getElementById('numbers');\n    const symbolsCheckbox = document.getElementById('symbols');\n    const passwordType1 = document.getElementById('password-type-1');\n    const passwordType2 = document.getElementById('password-type-2');\n    const passwordTypeOptions1 = document.getElementById('password-type-options-1');\n    const passwordTypeOptions2 = document.getElementById('password-type-options-2');\n    // イベントリスナーを設定\n    if (passwordType1 && passwordType2) {\n        passwordType1.addEventListener('click', () => {\n            passwordType1.classList.add('is-selected');\n            passwordType2.classList.remove('is-selected');\n            passwordTypeOptions1.classList.remove('is-hidden');\n            passwordTypeOptions1.classList.add('is-show');\n            passwordTypeOptions2.classList.remove('is-show');\n            passwordTypeOptions2.classList.add('is-hidden');\n            generatePassword();\n        });\n        passwordType2.addEventListener('click', () => {\n            passwordType2.classList.add('is-selected');\n            passwordType1.classList.remove('is-selected');\n            passwordTypeOptions1.classList.remove('is-show');\n            passwordTypeOptions1.classList.add('is-hidden');\n            passwordTypeOptions2.classList.remove('is-hidden');\n            passwordTypeOptions2.classList.add('is-show');\n            generatePassword();\n        });\n    }\n    slider1.addEventListener('input', () => {\n        const passwordLength1 = document.getElementById('password-length1');\n        passwordLength1.textContent = slider1.value;\n    });\n    slider2.addEventListener('input', () => {\n        const passwordLength2 = document.getElementById('password-length2');\n        passwordLength2.textContent = slider2.value;\n        generatePassword();\n    });\n    generate.addEventListener('click', () => {\n        generatePassword();\n    });\n    generatePassword();\n}\n\n\n//# sourceURL=webpack:///./src/passwordGenerator.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;