"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "(pages-dir-node)/./src/createEmotionCache.ts":
/*!***********************************!*\
  !*** ./src/createEmotionCache.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFMUIsU0FBU0M7SUFDdEIsT0FBT0QsMERBQVdBLENBQUM7UUFBRUUsS0FBSztRQUFPQyxTQUFTO0lBQUs7QUFDakQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9PZmZpY2UvRGVza3RvcC9TdHJhdGl4L3N0cmF0aXgtdjMvc3JjL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/createEmotionCache.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/theme */ \"(pages-dir-node)/./src/theme/theme.ts\");\n/* harmony import */ var _createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createEmotionCache */ \"(pages-dir-node)/./src/createEmotionCache.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _theme_theme__WEBPACK_IMPORTED_MODULE_4__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_5__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _theme_theme__WEBPACK_IMPORTED_MODULE_4__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: _theme_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].palette.primary.main\n                        }, void 0, false, {\n                            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.googleapis.com\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\",\n                            crossOrigin: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        this.props.emotionStyleTags\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    }\n}\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    const cache = (0,_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cache);\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 44\n                    }, undefined)\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(' ')}`,\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_document.tsx\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, undefined));\n    return {\n        ...initialProps,\n        emotionStyleTags\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3lEO0FBQ3RCO0FBQy9CO0FBQ29CO0FBRXhDLE1BQU1TLG1CQUFtQlIsc0RBQVFBO0lBQzlDUyxTQUFTO1FBQ1AscUJBQ0UsOERBQUNSLCtDQUFJQTtZQUFDUyxNQUFLOzs4QkFDVCw4REFBQ1IsK0NBQUlBOztzQ0FDSCw4REFBQ1M7NEJBQUtDLE1BQUs7NEJBQWNDLFNBQVNQLDREQUFhLENBQUNTLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7O3NDQUM1RCw4REFBQ0M7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFhQyxNQUFLOzRCQUE0QkMsYUFBWTs7Ozs7O3NDQUNwRSw4REFBQ0g7NEJBQUtFLE1BQUs7NEJBQWlGRCxLQUFJOzs7Ozs7d0JBQzlGLElBQUksQ0FBQ0csS0FBSyxDQUFTQyxnQkFBZ0I7Ozs7Ozs7OEJBRXZDLDhEQUFDQzs7c0NBQ0MsOERBQUNwQiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQUksV0FBV2dCLGVBQWUsR0FBRyxPQUFPQztJQUNsQyxNQUFNQyxxQkFBcUJELElBQUlFLFVBQVU7SUFFekMsTUFBTUMsUUFBUXJCLCtEQUFrQkE7SUFDaEMsTUFBTSxFQUFFc0IsdUJBQXVCLEVBQUUsR0FBR3hCLDJFQUFtQkEsQ0FBQ3VCO0lBRXhESCxJQUFJRSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO1lBQ2pCSSxZQUFZLENBQUNDLE1BQWEsQ0FBQ1Ysc0JBQVUsOERBQUNVO3dCQUFJQyxjQUFjSjt3QkFBUSxHQUFHUCxLQUFLOzs7Ozs7UUFDMUU7SUFFRixNQUFNWSxlQUFlLE1BQU1qQyxvRUFBd0IsQ0FBQ3lCO0lBQ3BELE1BQU1TLGdCQUFnQkwsd0JBQXdCSSxhQUFhRSxJQUFJO0lBQy9ELE1BQU1iLG1CQUFtQlksY0FBY0UsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2pELDhEQUFDQTtZQUNDQyxnQkFBYyxHQUFHRCxNQUFNRSxHQUFHLENBQUMsQ0FBQyxFQUFFRixNQUFNRyxHQUFHLENBQUNDLElBQUksQ0FBQyxNQUFNO1lBRW5EQyx5QkFBeUI7Z0JBQUVDLFFBQVFOLE1BQU1PLEdBQUc7WUFBQztXQUR4Q1AsTUFBTUUsR0FBRzs7Ozs7SUFLbEIsT0FBTztRQUNMLEdBQUdQLFlBQVk7UUFDZlg7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvT2ZmaWNlL0Rlc2t0b3AvU3RyYXRpeC9zdHJhdGl4LXYzL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0LCBEb2N1bWVudENvbnRleHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gJ0BlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2UnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lL3RoZW1lJztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vY3JlYXRlRW1vdGlvbkNhY2hlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc09yaWdpbj1cIlwiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIHsodGhpcy5wcm9wcyBhcyBhbnkpLmVtb3Rpb25TdHlsZVRhZ3N9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5NeURvY3VtZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IERvY3VtZW50Q29udGV4dCkgPT4ge1xuICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcblxuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XG4gICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbiAgICAgIGVuaGFuY2VBcHA6IChBcHA6IGFueSkgPT4gKHByb3BzKSA9PiA8QXBwIGVtb3Rpb25DYWNoZT17Y2FjaGV9IHsuLi5wcm9wc30gLz4sXG4gICAgfSk7XG5cbiAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gIGNvbnN0IGVtb3Rpb25TdHlsZXMgPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhpbml0aWFsUHJvcHMuaHRtbCk7XG4gIGNvbnN0IGVtb3Rpb25TdHlsZVRhZ3MgPSBlbW90aW9uU3R5bGVzLnN0eWxlcy5tYXAoKHN0eWxlKSA9PiAoXG4gICAgPHN0eWxlXG4gICAgICBkYXRhLWVtb3Rpb249e2Ake3N0eWxlLmtleX0gJHtzdHlsZS5pZHMuam9pbignICcpfWB9XG4gICAgICBrZXk9e3N0eWxlLmtleX1cbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGUuY3NzIH19XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgZW1vdGlvblN0eWxlVGFncyxcbiAgfSBhcyBhbnk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiY3JlYXRlRW1vdGlvblNlcnZlciIsInRoZW1lIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiTXlEb2N1bWVudCIsInJlbmRlciIsImxhbmciLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIiwicHJvcHMiLCJlbW90aW9uU3R5bGVUYWdzIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJjYWNoZSIsImV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVtb3Rpb25DYWNoZSIsImluaXRpYWxQcm9wcyIsImVtb3Rpb25TdHlsZXMiLCJodG1sIiwic3R5bGVzIiwibWFwIiwic3R5bGUiLCJkYXRhLWVtb3Rpb24iLCJrZXkiLCJpZHMiLCJqb2luIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_document.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        mode: 'light',\n        primary: {\n            main: '#783C91',\n            dark: '#3F214C',\n            light: '#AA86B9',\n            contrastText: '#FFFFFF'\n        },\n        secondary: {\n            main: '#90789B',\n            light: '#F0E2F6',\n            contrastText: '#FFFFFF'\n        },\n        text: {\n            primary: '#1E002B',\n            secondary: '#676767'\n        },\n        background: {\n            default: '#FFFFFF',\n            paper: '#FFFFFF'\n        },\n        grey: {\n            100: '#EFECF0',\n            200: '#DCD0E1',\n            300: '#CFCFCF',\n            400: '#DFDFDF'\n        }\n    },\n    typography: {\n        fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',\n        h1: {\n            fontWeight: 700,\n            fontSize: '44px',\n            color: '#1E002B'\n        },\n        h2: {\n            fontWeight: 700,\n            fontSize: '33px',\n            color: '#1E002B'\n        },\n        h3: {\n            fontWeight: 700,\n            fontSize: '24px',\n            color: '#1E002B'\n        },\n        h4: {\n            fontWeight: 700,\n            fontSize: '20px',\n            color: '#1E002B'\n        },\n        h5: {\n            fontWeight: 700,\n            fontSize: '15px',\n            color: '#1E002B'\n        },\n        body1: {\n            fontWeight: 400,\n            fontSize: '14px',\n            color: '#1E002B'\n        },\n        body2: {\n            fontWeight: 400,\n            fontSize: '12px',\n            color: '#676767'\n        },\n        button: {\n            fontWeight: 700,\n            fontSize: '14px',\n            textTransform: 'uppercase'\n        }\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    borderRadius: '100px',\n                    height: '41px',\n                    padding: '10px 24px',\n                    textTransform: 'uppercase',\n                    fontWeight: 700\n                }\n            }\n        },\n        MuiTextField: {\n            styleOverrides: {\n                root: {\n                    '& .MuiOutlinedInput-root': {\n                        borderRadius: '4px',\n                        '& fieldset': {\n                            borderColor: '#AA86B9'\n                        },\n                        '&:hover fieldset': {\n                            borderColor: '#783C91'\n                        },\n                        '&.Mui-focused fieldset': {\n                            borderColor: '#783C91'\n                        }\n                    }\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy90aGVtZS90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUVuRCxNQUFNQyxRQUFRRCxpRUFBV0EsQ0FBQztJQUN4QkUsU0FBUztRQUNQQyxNQUFNO1FBQ05DLFNBQVM7WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsY0FBYztRQUNoQjtRQUNBQyxXQUFXO1lBQ1RKLE1BQU07WUFDTkUsT0FBTztZQUNQQyxjQUFjO1FBQ2hCO1FBQ0FFLE1BQU07WUFDSk4sU0FBUztZQUNUSyxXQUFXO1FBQ2I7UUFDQUUsWUFBWTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87UUFDVDtRQUNBQyxNQUFNO1lBQ0osS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxZQUFZO1FBQ1pDLElBQUk7WUFDRkMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBQyxJQUFJO1lBQ0ZILFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFDQUUsSUFBSTtZQUNGSixZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0FHLElBQUk7WUFDRkwsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBSSxJQUFJO1lBQ0ZOLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFDQUssT0FBTztZQUNMUCxZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0FNLE9BQU87WUFDTFIsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBTyxRQUFRO1lBQ05ULFlBQVk7WUFDWkMsVUFBVTtZQUNWUyxlQUFlO1FBQ2pCO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxXQUFXO1lBQ1RDLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSkMsY0FBYztvQkFDZEMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVFAsZUFBZTtvQkFDZlYsWUFBWTtnQkFDZDtZQUNGO1FBQ0Y7UUFDQWtCLGNBQWM7WUFDWkwsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKLDRCQUE0Qjt3QkFDMUJDLGNBQWM7d0JBQ2QsY0FBYzs0QkFDWkksYUFBYTt3QkFDZjt3QkFDQSxvQkFBb0I7NEJBQ2xCQSxhQUFhO3dCQUNmO3dCQUNBLDBCQUEwQjs0QkFDeEJBLGFBQWE7d0JBQ2Y7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlcEMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL09mZmljZS9EZXNrdG9wL1N0cmF0aXgvc3RyYXRpeC12My9zcmMvdGhlbWUvdGhlbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2xpZ2h0JyxcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzc4M0M5MScsXG4gICAgICBkYXJrOiAnIzNGMjE0QycsXG4gICAgICBsaWdodDogJyNBQTg2QjknLFxuICAgICAgY29udHJhc3RUZXh0OiAnI0ZGRkZGRidcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyM5MDc4OUInLFxuICAgICAgbGlnaHQ6ICcjRjBFMkY2JyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNGRkZGRkYnXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAnIzFFMDAyQicsXG4gICAgICBzZWNvbmRhcnk6ICcjNjc2NzY3J1xuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNGRkZGRkYnLFxuICAgICAgcGFwZXI6ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgZ3JleToge1xuICAgICAgMTAwOiAnI0VGRUNGMCcsXG4gICAgICAyMDA6ICcjRENEMEUxJyxcbiAgICAgIDMwMDogJyNDRkNGQ0YnLFxuICAgICAgNDAwOiAnI0RGREZERidcbiAgICB9XG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnUG9wcGlucywgLWFwcGxlLXN5c3RlbSwgUm9ib3RvLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxuICAgIGgxOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzQ0cHgnLFxuICAgICAgY29sb3I6ICcjMUUwMDJCJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnMzNweCcsXG4gICAgICBjb2xvcjogJyMxRTAwMkInXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgIGNvbG9yOiAnIzFFMDAyQidcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgY29sb3I6ICcjMUUwMDJCJ1xuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgICBjb2xvcjogJyMxRTAwMkInXG4gICAgfSxcbiAgICBib2R5MToge1xuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGNvbG9yOiAnIzFFMDAyQidcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgY29sb3I6ICcjNjc2NzY3J1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDBweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnNDFweCcsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHggMjRweCcsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVRleHRGaWVsZDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgJyYgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0FBODZCOSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNzgzQzkxJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyM3ODNDOTEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwibGlnaHQiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsImdyZXkiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImgxIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJoMiIsImgzIiwiaDQiLCJoNSIsImJvZHkxIiwiYm9keTIiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbiIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsInBhZGRpbmciLCJNdWlUZXh0RmllbGQiLCJib3JkZXJDb2xvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/theme/theme.ts\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();