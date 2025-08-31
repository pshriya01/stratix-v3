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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/createEmotionCache.ts":
/*!***********************************!*\
  !*** ./src/createEmotionCache.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFMUIsU0FBU0M7SUFDdEIsT0FBT0QsMERBQVdBLENBQUM7UUFBRUUsS0FBSztRQUFPQyxTQUFTO0lBQUs7QUFDakQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9PZmZpY2UvRGVza3RvcC9TdHJhdGl4L3N0cmF0aXgtdjMvc3JjL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/createEmotionCache.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CssBaseline,ThemeProvider!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../createEmotionCache */ \"(pages-dir-node)/./src/createEmotionCache.ts\");\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/theme */ \"(pages-dir-node)/./src/theme/theme.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_3__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_4__, _theme_theme__WEBPACK_IMPORTED_MODULE_5__, _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_3__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_4__, _theme_theme__WEBPACK_IMPORTED_MODULE_5__, _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nfunction MyApp(props) {\n    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"initial-scale=1, width=device-width\"\n                }, void 0, false, {\n                    fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n                theme: _theme_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__.CssBaseline, {}, void 0, false, {\n                        fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Office/Desktop/Stratix/stratix-v3/src/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFRjtBQUNnQztBQUNGO0FBQ0o7QUFDcEI7QUFFbkMsTUFBTU8seUJBQXlCRiwrREFBa0JBO0FBSWxDLFNBQVNHLE1BQU1DLEtBQWlCO0lBQzdDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxlQUFlSixzQkFBc0IsRUFBRUssU0FBUyxFQUFFLEdBQUdIO0lBQ3hFLHFCQUNFLDhEQUFDUCx5REFBYUE7UUFBQ1csT0FBT0Y7OzBCQUNwQiw4REFBQ1Ysa0RBQUlBOzBCQUNILDRFQUFDYTtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDYix3R0FBYUE7Z0JBQUNHLE9BQU9BLG9EQUFLQTs7a0NBQ3pCLDhEQUFDRixzR0FBV0E7Ozs7O2tDQUNaLDhEQUFDTTt3QkFBVyxHQUFHRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9PZmZpY2UvRGVza3RvcC9TdHJhdGl4L3N0cmF0aXgtdjMvc3JjL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciwgRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ3NzQmFzZWxpbmUgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vY3JlYXRlRW1vdGlvbkNhY2hlJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS90aGVtZSc7XG5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblxudHlwZSBNeUFwcFByb3BzID0gQXBwUHJvcHMgJiB7IGVtb3Rpb25DYWNoZT86IEVtb3Rpb25DYWNoZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wczogTXlBcHBQcm9wcykge1xuICBjb25zdCB7IENvbXBvbmVudCwgZW1vdGlvbkNhY2hlID0gY2xpZW50U2lkZUVtb3Rpb25DYWNoZSwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiQ2FjaGVQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsInRoZW1lIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        mode: 'light',\n        primary: {\n            main: '#783C91',\n            dark: '#3F214C',\n            light: '#AA86B9',\n            contrastText: '#FFFFFF'\n        },\n        secondary: {\n            main: '#90789B',\n            light: '#F0E2F6',\n            contrastText: '#FFFFFF'\n        },\n        text: {\n            primary: '#1E002B',\n            secondary: '#676767'\n        },\n        background: {\n            default: '#FFFFFF',\n            paper: '#FFFFFF'\n        },\n        grey: {\n            100: '#EFECF0',\n            200: '#DCD0E1',\n            300: '#CFCFCF',\n            400: '#DFDFDF'\n        }\n    },\n    typography: {\n        fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',\n        h1: {\n            fontWeight: 700,\n            fontSize: '44px',\n            color: '#1E002B'\n        },\n        h2: {\n            fontWeight: 700,\n            fontSize: '33px',\n            color: '#1E002B'\n        },\n        h3: {\n            fontWeight: 700,\n            fontSize: '24px',\n            color: '#1E002B'\n        },\n        h4: {\n            fontWeight: 700,\n            fontSize: '20px',\n            color: '#1E002B'\n        },\n        h5: {\n            fontWeight: 700,\n            fontSize: '15px',\n            color: '#1E002B'\n        },\n        body1: {\n            fontWeight: 400,\n            fontSize: '14px',\n            color: '#1E002B'\n        },\n        body2: {\n            fontWeight: 400,\n            fontSize: '12px',\n            color: '#676767'\n        },\n        button: {\n            fontWeight: 700,\n            fontSize: '14px',\n            textTransform: 'uppercase'\n        }\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    borderRadius: '100px',\n                    height: '41px',\n                    padding: '10px 24px',\n                    textTransform: 'uppercase',\n                    fontWeight: 700\n                }\n            }\n        },\n        MuiTextField: {\n            styleOverrides: {\n                root: {\n                    '& .MuiOutlinedInput-root': {\n                        borderRadius: '4px',\n                        '& fieldset': {\n                            borderColor: '#AA86B9'\n                        },\n                        '&:hover fieldset': {\n                            borderColor: '#783C91'\n                        },\n                        '&.Mui-focused fieldset': {\n                            borderColor: '#783C91'\n                        }\n                    }\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy90aGVtZS90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUVuRCxNQUFNQyxRQUFRRCxpRUFBV0EsQ0FBQztJQUN4QkUsU0FBUztRQUNQQyxNQUFNO1FBQ05DLFNBQVM7WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsY0FBYztRQUNoQjtRQUNBQyxXQUFXO1lBQ1RKLE1BQU07WUFDTkUsT0FBTztZQUNQQyxjQUFjO1FBQ2hCO1FBQ0FFLE1BQU07WUFDSk4sU0FBUztZQUNUSyxXQUFXO1FBQ2I7UUFDQUUsWUFBWTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87UUFDVDtRQUNBQyxNQUFNO1lBQ0osS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxZQUFZO1FBQ1pDLElBQUk7WUFDRkMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBQyxJQUFJO1lBQ0ZILFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFDQUUsSUFBSTtZQUNGSixZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0FHLElBQUk7WUFDRkwsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBSSxJQUFJO1lBQ0ZOLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFDQUssT0FBTztZQUNMUCxZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0FNLE9BQU87WUFDTFIsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUNBTyxRQUFRO1lBQ05ULFlBQVk7WUFDWkMsVUFBVTtZQUNWUyxlQUFlO1FBQ2pCO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxXQUFXO1lBQ1RDLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSkMsY0FBYztvQkFDZEMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVFAsZUFBZTtvQkFDZlYsWUFBWTtnQkFDZDtZQUNGO1FBQ0Y7UUFDQWtCLGNBQWM7WUFDWkwsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKLDRCQUE0Qjt3QkFDMUJDLGNBQWM7d0JBQ2QsY0FBYzs0QkFDWkksYUFBYTt3QkFDZjt3QkFDQSxvQkFBb0I7NEJBQ2xCQSxhQUFhO3dCQUNmO3dCQUNBLDBCQUEwQjs0QkFDeEJBLGFBQWE7d0JBQ2Y7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlcEMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL09mZmljZS9EZXNrdG9wL1N0cmF0aXgvc3RyYXRpeC12My9zcmMvdGhlbWUvdGhlbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2xpZ2h0JyxcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzc4M0M5MScsXG4gICAgICBkYXJrOiAnIzNGMjE0QycsXG4gICAgICBsaWdodDogJyNBQTg2QjknLFxuICAgICAgY29udHJhc3RUZXh0OiAnI0ZGRkZGRidcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyM5MDc4OUInLFxuICAgICAgbGlnaHQ6ICcjRjBFMkY2JyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNGRkZGRkYnXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAnIzFFMDAyQicsXG4gICAgICBzZWNvbmRhcnk6ICcjNjc2NzY3J1xuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNGRkZGRkYnLFxuICAgICAgcGFwZXI6ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgZ3JleToge1xuICAgICAgMTAwOiAnI0VGRUNGMCcsXG4gICAgICAyMDA6ICcjRENEMEUxJyxcbiAgICAgIDMwMDogJyNDRkNGQ0YnLFxuICAgICAgNDAwOiAnI0RGREZERidcbiAgICB9XG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnUG9wcGlucywgLWFwcGxlLXN5c3RlbSwgUm9ib3RvLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxuICAgIGgxOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzQ0cHgnLFxuICAgICAgY29sb3I6ICcjMUUwMDJCJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnMzNweCcsXG4gICAgICBjb2xvcjogJyMxRTAwMkInXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgIGNvbG9yOiAnIzFFMDAyQidcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgY29sb3I6ICcjMUUwMDJCJ1xuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgICBjb2xvcjogJyMxRTAwMkInXG4gICAgfSxcbiAgICBib2R5MToge1xuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGNvbG9yOiAnIzFFMDAyQidcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgY29sb3I6ICcjNjc2NzY3J1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDBweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnNDFweCcsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHggMjRweCcsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVRleHRGaWVsZDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgJyYgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0FBODZCOSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNzgzQzkxJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyM3ODNDOTEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwibGlnaHQiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsImdyZXkiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImgxIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJoMiIsImgzIiwiaDQiLCJoNSIsImJvZHkxIiwiYm9keTIiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbiIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsInBhZGRpbmciLCJNdWlUZXh0RmllbGQiLCJib3JkZXJDb2xvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/theme/theme.ts\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js":
/*!*******************************************************************************************************!*\
  !*** __barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ _Users_Office_Desktop_Stratix_stratix_v3_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _Users_Office_Desktop_Stratix_stratix_v3_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@mui/material/esm/styles/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__, _Users_Office_Desktop_Stratix_stratix_v3_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__, _Users_Office_Desktop_Stratix_stratix_v3_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUNzc0Jhc2VsaW5lLFRoZW1lUHJvdmlkZXIhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMrRCIsInNvdXJjZXMiOlsiL1VzZXJzL09mZmljZS9EZXNrdG9wL1N0cmF0aXgvc3RyYXRpeC12My9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9lc20vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENzc0Jhc2VsaW5lIH0gZnJvbSBcIi4vQ3NzQmFzZWxpbmUvaW5kZXguanNcIlxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIvVXNlcnMvT2ZmaWNlL0Rlc2t0b3AvU3RyYXRpeC9zdHJhdGl4LXYzL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2VzbS9zdHlsZXMvaW5kZXguanNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/DefaultPropsProvider");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();