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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cpuData = [['', '', '', '', '', '', '', '', 'A13', '', ''], ['', '', '', '', '骁龙865', '', '', '', '', '', ''], ['', '', '', '', '', '', '天玑1000', '', '', '', ''], ['', '', '', '', '', '', '', '麒麟990', '', '', ''], ['', '', '', '', '骁龙855 Plus', '', '', '', '', '', ''], ['', '', '', '', '骁龙855', 'Exynos 9820', '', '', 'A12', '', ''], ['', '', '', '', '', '', '', '麒麟980', '', '', ''], ['', '', '', '', '骁龙845', 'Exynos 9810', '', '', '', '', ''], ['', '', '', '骁龙765/765G', '', '', 'Helio G90T', '麒麟810', 'A11', '', ''], ['', '', '', '骁龙730/730G', '骁龙835', 'Exynos 8895', '', '麒麟970', '', '', ''], ['', '', '', '', '', '', '', '', 'A10', '', ''], ['', '', '', '骁龙712', '', '', '', '', 'A9X', '', ''], ['', '', '', '骁龙710', '', '', '', '麒麟960', '', '', ''], ['', '', '', '骁龙675', '骁龙821', '', 'Helio X30', '', '', '', ''], ['', '', '', '骁龙670', '骁龙820', '', '', '', '', '', ''], ['', '', '', '', '骁龙820降频版', 'Exynos 8890', '', '', 'A9', '', ''], ['', '', '', '骁龙665', '', '', 'Helio P60', '麒麟710', '', '', ''], ['', '', '', '骁龙660', '', '', 'Helio X27', '麒麟955', '', '', ''], ['', '', '', '骁龙636', '', '', '', '麒麟950', '', '', ''], ['', '', '', '骁龙630', '骁龙810', 'Exynos 7420', 'Helio X25', '', 'A8X', '', ''], ['', '', '', '', '', '', 'Helio X23', '', '', '', ''], ['', '', '', '骁龙653', '', '', 'Helio X20', '', '', '', ''], ['', '', '', '', '', '', 'Helio P30', '', 'A8', '', ''], ['', '', '', '骁龙652', '', '', 'Helio P25', '', '', '', 'Tegra X1'], ['', '', '', '', '', '', 'Helio P23', '', '', '', ''], ['', '', '', '骁龙650', '', '', 'Helio P20', '', '', '', ''], ['', '', '', '', '骁龙808', '', 'Helio X10', '麒麟935', '', '', 'Tegra K1'], ['', '', '', '', '', '', 'Helio P15', '', '', '', ''], ['', '', '', '', '', 'Exynos 5433', 'Helio P10', '麒麟930', '', '', ''], ['', '', '', '', '', '', '', '麒麟659', '', '', ''], ['', '', '', '骁龙626', '骁龙805', '', '', '麒麟650', '', '', ''], ['', '', '', '骁龙625', '骁龙801<br/>(MSM8x74AC)', 'Exynos 5430', '', '', '', 'Z3590', ''], ['', '', '', '', '骁龙801<br/>(MSM8x74AB)', 'Exynos 7870', '', '', '', 'Z3580', ''], ['', '', '', '', '骁龙801<br/>(MSM8x74AA)', 'Exynos 7580', 'MT6752/M', '', '', 'Z3570', ''], ['', '', '', '', '', 'Exynos 5433', 'MT6753', '', '', 'Z3560', ''], ['', '', '', '', '', '', 'MT6750', '', '', '', ''], ['', '', '', '', '', '', 'MT6739', '', '', '', ''], ['', '', '骁龙450', '', '', '', 'MT6735', '', '', '', ''], ['', '', '骁龙439', '', '', 'Exynos 5800', '', '', '', '', ''], ['', '', '', '', '', 'Exynos 5430', '', '', '', 'Z3530', ''], ['', '', '', '', '', 'Exynos 5422', '', '麒麟620', '', '', ''], ['', '', '骁龙435', '骁龙617', '骁龙800', 'Exynos 5420', 'MT6595/T', '麒麟928', 'A7', 'Z3480', 'Tegra 4'], ['', '', '骁龙430', '骁龙616', '', 'Exynos 5410', 'MT6592', '麒麟925', '', 'Z3460', ''], ['', '', '骁龙427', '骁龙615', '', '', '', '麒麟920', '', '', 'Tegra 4i'], ['APQ8064', '', '骁龙425', '骁龙600', '', 'Exynos 5260', 'MT6582', 'K3V2+<br/>(麒麟910)', '', '', ''], ['', '', '', '', '', '', '', '', '', 'Z3580', ''], ['', '骁龙212', '', '骁龙610', '', '', '', '', '', '', ''], ['', '骁龙210', '骁龙412', '', '', 'Exynos 5250', '', '', 'A6X', '', ''], ['MSM8960T', '骁龙208', '骁龙410', '', '', 'Exynos 4412', '', '', 'A6', 'Z3480', ''], ['MSM8260A<br/>/8660A/8960', '骁龙200<br/>(MSM8x12)', '骁龙400', '', '', '', '', 'K3V2E', '', 'Z2580', ''], ['', '骁龙200<br/>(MSM8x10)', '', '', '', '', '', 'K3V2', '', '', 'Tegra 3'], ['', '', '', '', '', '', '', '', '', 'Z2480', ''], ['', '', '骁龙400', '', '', '', 'MT6589', '', 'A5X', 'Z2460', ''], ['', '骁龙200<br/>(MSM8x25Q)', '', '', '', '', '', '', 'A5', '', ''], ['MSM8260<br/>/8660', '', '', '', '', 'Exynos 4210<br/>/4212', '', '', '', 'Z2420', ''], ['MSM8225<br/>/8625', '', '', '', '', '', 'MT6577/6572', '', '', '', 'Tegra 2'], ['MSM8255T<br/>/8655T', '', '', '', '', '', '', '', '', '', ''], ['MSM8255<br/>/8655<br/>/APQ8055', '', '', '', '', 'Exynos 3475', 'MT6515/6175', '', '', '', ''], ['MSM7230<br/>/7630', '', '', '', '', '', 'MT6515M', '', 'A4', '', ''], ['QSD8650<br/>/8250', '', '', '', '', 'Exynos 3110', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '', ''], ['MSM7627A<br/>/7227A', '', '', '', '', '', '', '', '', '', ''], ['MSM7627T<br/>/7227T', '', '', '', '', '', '', '', '', '', ''], ['MSM7627<br/>/7227', '', '', '', '', 'S5PC100', '', '', '', '', ''], ['', '', '', '', '', 'S5L8900', 'MT6573/13', '', '', '', 'Tegra'], ['', '', '', '', '', '', 'MT6516', '', '', '', '']];\ntry {\n    alert(111);\n    var newcpuData = cpuData.map(function (v) {\n        return v.map(function (x, i, arr) {\n            var temp = '';\n            if (i === 0) {\n                temp = '<tr><td class=\"content\">' + x + '</td>';\n            } else if (i === arr.length - 1) {\n                temp = '<td class=\"content\">' + x + '</td></tr>';\n            } else {\n                temp = '<td class=\"content\">' + x + '</td>';\n            }\n            return temp;\n        });\n    }).flat().join('');\n    // console.log(newcpuData);\n    var tbody = document.querySelector('#tbody');\n    // console.log(tbody);\n    tbody.insertAdjacentHTML('beforeend', newcpuData);\n    // 背景高亮\n    var content = document.querySelectorAll('td.content');\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var key = _step.value;\n\n            if (key.textContent.includes('骁龙439')) {\n                console.log(key);\n                key.classList.add('newCpu');\n            }\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n} catch (error) {\n    alert(error);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });