module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/songs/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/songs/[id].js":
/*!*****************************!*\
  !*** ./pages/songs/[id].js ***!
  \*****************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/shivani/Documents/SUNSHINE/NewMerge/pages/songs/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"PrismaClient\"]();\nasync function getStaticProps({\n  params\n}) {\n  const song = await prisma.song.findOne({\n    include: {\n      artist: true\n    },\n    where: {\n      id: Number(params.id)\n    }\n  });\n  return {\n    props: {\n      song\n    }\n  };\n}\nasync function getStaticPaths() {\n  const songs = await prisma.song.findMany();\n  return {\n    paths: songs.map(song => ({\n      params: {\n        id: song.id.toString()\n      }\n    })),\n    fallback: false\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  song\n}) => __jsx(\"iframe\", {\n  width: \"100%\",\n  height: \"315\",\n  src: `https://www.youtube.com/embed/${song.youtubeId}`,\n  frameBorder: \"0\",\n  allow: \"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",\n  allowFullScreen: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb25ncy8uanM/YTY5MCJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInNvbmciLCJmaW5kT25lIiwiaW5jbHVkZSIsImFydGlzdCIsIndoZXJlIiwiaWQiLCJOdW1iZXIiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwic29uZ3MiLCJmaW5kTWFueSIsInBhdGhzIiwibWFwIiwidG9TdHJpbmciLCJmYWxsYmFjayIsInlvdXR1YmVJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLDJEQUFKLEVBQWY7QUFDTyxlQUFlQyxjQUFmLENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0MsUUFBTUMsSUFBSSxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZQyxPQUFaLENBQW9CO0FBQ3JDQyxXQUFPLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FENEI7QUFFckNDLFNBQUssRUFBRTtBQUNMQyxRQUFFLEVBQUVDLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDTSxFQUFSO0FBREw7QUFGOEIsR0FBcEIsQ0FBbkI7QUFNQSxTQUFPO0FBQ0xFLFNBQUssRUFBRTtBQUNMUDtBQURLO0FBREYsR0FBUDtBQUtEO0FBRU0sZUFBZVEsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxLQUFLLEdBQUcsTUFBTWIsTUFBTSxDQUFDSSxJQUFQLENBQVlVLFFBQVosRUFBcEI7QUFDQSxTQUFPO0FBQ0xDLFNBQUssRUFBRUYsS0FBSyxDQUFDRyxHQUFOLENBQVdaLElBQUQsS0FBVztBQUMxQkQsWUFBTSxFQUFFO0FBQ05NLFVBQUUsRUFBRUwsSUFBSSxDQUFDSyxFQUFMLENBQVFRLFFBQVI7QUFERTtBQURrQixLQUFYLENBQVYsQ0FERjtBQU1MQyxZQUFRLEVBQUU7QUFOTCxHQUFQO0FBUUQ7QUFFYyxnRUFBQztBQUFFZDtBQUFGLENBQUQsS0FDYjtBQUNFLE9BQUssRUFBQyxNQURSO0FBRUUsUUFBTSxFQUFDLEtBRlQ7QUFHRSxLQUFHLEVBQUcsaUNBQWdDQSxJQUFJLENBQUNlLFNBQVUsRUFIdkQ7QUFJRSxhQUFXLEVBQUMsR0FKZDtBQUtFLE9BQUssRUFBQyx5RUFMUjtBQU1FLGlCQUFlLE1BTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERiIsImZpbGUiOiIuL3BhZ2VzL3NvbmdzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBzb25nID0gYXdhaXQgcHJpc21hLnNvbmcuZmluZE9uZSh7XG4gICAgaW5jbHVkZTogeyBhcnRpc3Q6IHRydWUgfSxcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IE51bWJlcihwYXJhbXMuaWQpXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc29uZ1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBzb25ncyA9IGF3YWl0IHByaXNtYS5zb25nLmZpbmRNYW55KCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHNvbmdzLm1hcCgoc29uZykgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogc29uZy5pZC50b1N0cmluZygpXG4gICAgICB9XG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBzb25nIH0pID0+IChcbiAgPGlmcmFtZVxuICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgaGVpZ2h0PVwiMzE1XCJcbiAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3NvbmcueW91dHViZUlkfWB9XG4gICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgLz5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/songs/[id].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });