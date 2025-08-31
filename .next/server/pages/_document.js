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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFMUIsU0FBU0M7SUFDdEIsT0FBT0QsMERBQVdBLENBQUM7UUFBRUUsS0FBSztRQUFPQyxTQUFTO0lBQUs7QUFDakQiLCJzb3VyY2VzIjpbIi9hcHAvY29kZS9zcmMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJywgcHJlcGVuZDogdHJ1ZSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDYWNoZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImtleSIsInByZXBlbmQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/createEmotionCache.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/theme */ \"(pages-dir-node)/./src/theme/theme.ts\");\n/* harmony import */ var _createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createEmotionCache */ \"(pages-dir-node)/./src/createEmotionCache.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _theme_theme__WEBPACK_IMPORTED_MODULE_4__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_5__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _theme_theme__WEBPACK_IMPORTED_MODULE_4__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: _theme_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].palette.primary.main\n                        }, void 0, false, {\n                            fileName: \"/app/code/src/pages/_document.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.googleapis.com\"\n                        }, void 0, false, {\n                            fileName: \"/app/code/src/pages/_document.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\",\n                            crossOrigin: \"\"\n                        }, void 0, false, {\n                            fileName: \"/app/code/src/pages/_document.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/app/code/src/pages/_document.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        this.props.emotionStyleTags\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/code/src/pages/_document.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/app/code/src/pages/_document.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/app/code/src/pages/_document.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/code/src/pages/_document.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/code/src/pages/_document.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    }\n}\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    const cache = (0,_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cache);\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"/app/code/src/pages/_document.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 44\n                    }, undefined)\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(' ')}`,\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"/app/code/src/pages/_document.tsx\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, undefined));\n    return {\n        ...initialProps,\n        emotionStyleTags\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3lEO0FBQ3RCO0FBQy9CO0FBQ29CO0FBRXhDLE1BQU1TLG1CQUFtQlIsc0RBQVFBO0lBQzlDUyxTQUFTO1FBQ1AscUJBQ0UsOERBQUNSLCtDQUFJQTtZQUFDUyxNQUFLOzs4QkFDVCw4REFBQ1IsK0NBQUlBOztzQ0FDSCw4REFBQ1M7NEJBQUtDLE1BQUs7NEJBQWNDLFNBQVNQLDREQUFhLENBQUNTLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7O3NDQUM1RCw4REFBQ0M7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFhQyxNQUFLOzRCQUE0QkMsYUFBWTs7Ozs7O3NDQUNwRSw4REFBQ0g7NEJBQUtFLE1BQUs7NEJBQWlGRCxLQUFJOzs7Ozs7d0JBQzlGLElBQUksQ0FBQ0csS0FBSyxDQUFTQyxnQkFBZ0I7Ozs7Ozs7OEJBRXZDLDhEQUFDQzs7c0NBQ0MsOERBQUNwQiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQUksV0FBV2dCLGVBQWUsR0FBRyxPQUFPQztJQUNsQyxNQUFNQyxxQkFBcUJELElBQUlFLFVBQVU7SUFFekMsTUFBTUMsUUFBUXJCLCtEQUFrQkE7SUFDaEMsTUFBTSxFQUFFc0IsdUJBQXVCLEVBQUUsR0FBR3hCLDJFQUFtQkEsQ0FBQ3VCO0lBRXhESCxJQUFJRSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO1lBQ2pCSSxZQUFZLENBQUNDLE1BQWEsQ0FBQ1Ysc0JBQVUsOERBQUNVO3dCQUFJQyxjQUFjSjt3QkFBUSxHQUFHUCxLQUFLOzs7Ozs7UUFDMUU7SUFFRixNQUFNWSxlQUFlLE1BQU1qQyxvRUFBd0IsQ0FBQ3lCO0lBQ3BELE1BQU1TLGdCQUFnQkwsd0JBQXdCSSxhQUFhRSxJQUFJO0lBQy9ELE1BQU1iLG1CQUFtQlksY0FBY0UsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2pELDhEQUFDQTtZQUNDQyxnQkFBYyxHQUFHRCxNQUFNRSxHQUFHLENBQUMsQ0FBQyxFQUFFRixNQUFNRyxHQUFHLENBQUNDLElBQUksQ0FBQyxNQUFNO1lBRW5EQyx5QkFBeUI7Z0JBQUVDLFFBQVFOLE1BQU1PLEdBQUc7WUFBQztXQUR4Q1AsTUFBTUUsR0FBRzs7Ozs7SUFLbEIsT0FBTztRQUNMLEdBQUdQLFlBQVk7UUFDZlg7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvYXBwL2NvZGUvc3JjL3BhZ2VzL19kb2N1bWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQsIERvY3VtZW50Q29udGV4dCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUvdGhlbWUnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gLz5cbiAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwiXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgeyh0aGlzLnByb3BzIGFzIGFueSkuZW1vdGlvblN0eWxlVGFnc31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG5cbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogRG9jdW1lbnRDb250ZXh0KSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgZW5oYW5jZUFwcDogKEFwcDogYW55KSA9PiAocHJvcHMpID0+IDxBcHAgZW1vdGlvbkNhY2hlPXtjYWNoZX0gey4uLnByb3BzfSAvPixcbiAgICB9KTtcblxuICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgY29uc3QgZW1vdGlvblN0eWxlcyA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGluaXRpYWxQcm9wcy5odG1sKTtcbiAgY29uc3QgZW1vdGlvblN0eWxlVGFncyA9IGVtb3Rpb25TdHlsZXMuc3R5bGVzLm1hcCgoc3R5bGUpID0+IChcbiAgICA8c3R5bGVcbiAgICAgIGRhdGEtZW1vdGlvbj17YCR7c3R5bGUua2V5fSAke3N0eWxlLmlkcy5qb2luKCcgJyl9YH1cbiAgICAgIGtleT17c3R5bGUua2V5fVxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZS5jc3MgfX1cbiAgICAvPlxuICApKTtcblxuICByZXR1cm4ge1xuICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICBlbW90aW9uU3R5bGVUYWdzLFxuICB9IGFzIGFueTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJjcmVhdGVFbW90aW9uU2VydmVyIiwidGhlbWUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJNeURvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NPcmlnaW4iLCJwcm9wcyIsImVtb3Rpb25TdHlsZVRhZ3MiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImNhY2hlIiwiZXh0cmFjdENyaXRpY2FsVG9DaHVua3MiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW1vdGlvbkNhY2hlIiwiaW5pdGlhbFByb3BzIiwiZW1vdGlvblN0eWxlcyIsImh0bWwiLCJzdHlsZXMiLCJtYXAiLCJzdHlsZSIsImRhdGEtZW1vdGlvbiIsImtleSIsImlkcyIsImpvaW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_document.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        mode: 'light',\n        primary: {\n            main: '#783C91',\n            dark: '#3F214C',\n            light: '#AA86B9',\n            contrastText: '#FFFFFF'\n        },\n        secondary: {\n            main: '#90789B',\n            light: '#F0E2F6',\n            contrastText: '#FFFFFF'\n        },\n        text: {\n            primary: '#1E002B',\n            secondary: '#676767'\n        },\n        background: {\n            default: '#FFFFFF',\n            paper: '#FFFFFF'\n        },\n        grey: {\n            100: '#EFECF0',\n            200: '#DCD0E1',\n            300: '#CFCFCF',\n            400: '#DFDFDF'\n        }\n    },\n    typography: {\n        fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',\n        h1: {\n            fontWeight: 700,\n            fontSize: '44px',\n            color: '#1E002B'\n        },\n        h2: {\n            fontWeight: 700,\n            fontSize: '33px',\n            color: '#1E002B'\n        },\n        h3: {\n            fontWeight: 700,\n            fontSize: '24px',\n            color: '#1E002B'\n        },\n        h4: {\n            fontWeight: 700,\n            fontSize: '20px',\n            color: '#1E002B'\n        },\n        h5: {\n            fontWeight: 700,\n            fontSize: '15px',\n            color: '#1E002B'\n        },\n        body1: {\n            fontWeight: 400,\n            fontSize: '14px',\n            color: '#1E002B'\n        },\n        body2: {\n            fontWeight: 400,\n            fontSize: '12px',\n            color: '#676767'\n        },\n        button: {\n            fontWeight: 700,\n            fontSize: '14px',\n            textTransform: 'uppercase'\n        }\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    borderRadius: '100px',\n                    height: '41px',\n                    padding: '10px 24px',\n                    textTransform: 'uppercase',\n                    fontWeight: 700\n                }\n            }\n        },\n        MuiTextField: {\n            styleOverrides: {\n                root: {\n                    '& .MuiOutlinedInput-root': {\n                        borderRadius: '4px',\n                        '& fieldset': {\n                            borderColor: '#AA86B9'\n                        },\n                        '&:hover fieldset': {\n                            borderColor: '#783C91'\n                        },\n                        '&.Mui-focused fieldset': {\n                            borderColor: '#783C91'\n                        }\n                    }\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy90aGVtZS90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUVuRCxNQUFNQyxRQUFRRCxpRUFBV0EsQ0FBQztJQUN4QkUsU0FBUztRQUNQQyxNQUFNO1FBQ05DLFNBQVM7WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsY0FBYztRQUNoQjtRQUNBQyxXQUFXO1lBQ1RKLE1BQU07WUFDTkUsT0FBTztZQUNQQyxjQUFjO1FBQ2hCO1FBQ0FFLE1BQU07WUFDSk4sU0FBUztZQUNUSyxXQUFXO1FBQ2I7UUFDQUUsWUFBWTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87UUFDVDtRQUNBQyxNQUFNO1lBQ0osS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxZQUFZO1FBQ1pDLElBQUk7WUFDRkMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBQyxJQUFJO1lBQ0ZILFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFDQUUsSUFBSTtZQUNGSixZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0FHLElBQUk7WUFDRkwsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBSSxJQUFJO1lBQ0ZOLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFDQUssT0FBTztZQUNMUCxZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0FNLE9BQU87WUFDTFIsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBTyxRQUFRO1lBQ05ULFlBQVk7WUFDWkMsVUFBVTtZQUNWUyxlQUFlO1FBQ2pCO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxXQUFXO1lBQ1RDLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSkMsY0FBYztvQkFDZEMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVFAsZUFBZTtvQkFDZlYsWUFBWTtnQkFDZDtZQUNGO1FBQ0Y7UUFDQWtCLGNBQWM7WUFDWkwsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKLDRCQUE0Qjt3QkFDMUJDLGNBQWM7d0JBQ2QsY0FBYzs0QkFDWkksYUFBYTt3QkFDZjt3QkFDQSxvQkFBb0I7NEJBQ2xCQSxhQUFhO3dCQUNmO3dCQUNBLDBCQUEwQjs0QkFDeEJBLGFBQWE7d0JBQ2Y7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlcEMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL2FwcC9jb2RlL3NyYy90aGVtZS90aGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnbGlnaHQnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjNzgzQzkxJyxcbiAgICAgIGRhcms6ICcjM0YyMTRDJyxcbiAgICAgIGxpZ2h0OiAnI0FBODZCOScsXG4gICAgICBjb250cmFzdFRleHQ6ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzkwNzg5QicsXG4gICAgICBsaWdodDogJyNGMEUyRjYnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI0ZGRkZGRidcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHByaW1hcnk6ICcjMUUwMDJCJyxcbiAgICAgIHNlY29uZGFyeTogJyM2NzY3NjcnXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnI0ZGRkZGRicsXG4gICAgICBwYXBlcjogJyNGRkZGRkYnXG4gICAgfSxcbiAgICBncmV5OiB7XG4gICAgICAxMDA6ICcjRUZFQ0YwJyxcbiAgICAgIDIwMDogJyNEQ0QwRTEnLFxuICAgICAgMzAwOiAnI0NGQ0ZDRicsXG4gICAgICA0MDA6ICcjREZERkRGJ1xuICAgIH1cbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zLCAtYXBwbGUtc3lzdGVtLCBSb2JvdG8sIEhlbHZldGljYSwgc2Fucy1zZXJpZicsXG4gICAgaDE6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnNDRweCcsXG4gICAgICBjb2xvcjogJyMxRTAwMkInXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6ICczM3B4JyxcbiAgICAgIGNvbG9yOiAnIzFFMDAyQidcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgY29sb3I6ICcjMUUwMDJCJ1xuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICBjb2xvcjogJyMxRTAwMkInXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICAgIGNvbG9yOiAnIzFFMDAyQidcbiAgICB9LFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgY29sb3I6ICcjMUUwMDJCJ1xuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBjb2xvcjogJyM2NzY3NjcnXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIE11aUJ1dHRvbjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMHB4JyxcbiAgICAgICAgICBoZWlnaHQ6ICc0MXB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyNHB4JyxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiA3MDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpVGV4dEZpZWxkOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgJyYgLk11aU91dGxpbmVkSW5wdXQtcm9vdCc6IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAnJiBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQUE4NkI5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyM3ODNDOTEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyYuTXVpLWZvY3VzZWQgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzc4M0M5MSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJwcmltYXJ5IiwibWFpbiIsImRhcmsiLCJsaWdodCIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsInRleHQiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInBhcGVyIiwiZ3JleSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImgyIiwiaDMiLCJoNCIsImg1IiwiYm9keTEiLCJib2R5MiIsImJ1dHRvbiIsInRleHRUcmFuc2Zvcm0iLCJjb21wb25lbnRzIiwiTXVpQnV0dG9uIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwicGFkZGluZyIsIk11aVRleHRGaWVsZCIsImJvcmRlckNvbG9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/theme/theme.ts\n");

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