"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Attachments.tsx":
/*!****************************************!*\
  !*** ./app/components/Attachments.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst AttachmentsHeaders = (param)=>{\n    let { attachmentsDetails } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-16 my-2\",\n        children: attachmentsDetails && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-lg\",\n                    children: \"Attachments\"\n                }, void 0, false, {\n                    fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Attachments.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                    className: \"max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700\",\n                    children: attachmentsDetails.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col pb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                        className: \"mb-1 text-gray-500 md:text-lg dark:text-gray-400\",\n                                        children: item.fileName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Attachments.tsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: item.attachMimeTag\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Attachments.tsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Attachments.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 5\n                            }, undefined)\n                        }, void 0, false))\n                }, void 0, false, {\n                    fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Attachments.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 6\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Attachments.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AttachmentsHeaders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttachmentsHeaders);\nvar _c;\n$RefreshReg$(_c, \"AttachmentsHeaders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0F0dGFjaG1lbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFNQSxNQUFNQSxxQkFBcUQ7UUFBQyxFQUFDQyxrQkFBa0IsRUFBQztJQUM1RSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkYsb0NBQ0Q7OzhCQUNBLDhEQUFDRztvQkFBR0QsV0FBVTs4QkFBVTs7Ozs7OzhCQUM3Qiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBR1BGLG1CQUFtQkssR0FBRyxDQUFDQyxDQUFBQSxxQkFDbkI7c0NBRVosNEVBQUNMO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQW9ESSxLQUFLRSxRQUFROzs7Ozs7a0RBQy9FLDhEQUFDQzt3Q0FBR1AsV0FBVTtrREFBeUJJLEtBQUtJLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXakU7S0F6Qk1YO0FBMkJOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQXR0YWNobWVudHMudHN4PzUwNGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW50ZXJmYWNlIEF0dGFjaG1lbnRzSW50ZXJmYWNlIHtcbiAgYXR0YWNobWVudHNEZXRhaWxzOiBBcnJheTxhbnk+O1xufVxuXG5jb25zdCBBdHRhY2htZW50c0hlYWRlcnM6IFJlYWN0LkZDPEF0dGFjaG1lbnRzSW50ZXJmYWNlPiA9ICh7YXR0YWNobWVudHNEZXRhaWxzfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTYgbXktMlwiPlxuICAgICAgICAgIHthdHRhY2htZW50c0RldGFpbHMgJiYgXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkF0dGFjaG1lbnRzPC9oMz5cbiAgICAgPGRsIGNsYXNzTmFtZT1cIm1heC13LW1kIHRleHQtZ3JheS05MDAgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmRpdmlkZS1ncmF5LTcwMFwiPlxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0YWNobWVudHNEZXRhaWxzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTNcIj5cbiAgICAgICAgPGR0IGNsYXNzTmFtZT1cIm1iLTEgdGV4dC1ncmF5LTUwMCBtZDp0ZXh0LWxnIGRhcms6dGV4dC1ncmF5LTQwMFwiPntpdGVtLmZpbGVOYW1lfTwvZHQ+XG4gICAgICAgIDxkZCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj57aXRlbS5hdHRhY2hNaW1lVGFnfTwvZGQ+XG4gICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFjaG1lbnRzSGVhZGVyczsiXSwibmFtZXMiOlsiQXR0YWNobWVudHNIZWFkZXJzIiwiYXR0YWNobWVudHNEZXRhaWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkbCIsIm1hcCIsIml0ZW0iLCJkdCIsImZpbGVOYW1lIiwiZGQiLCJhdHRhY2hNaW1lVGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Attachments.tsx\n"));

/***/ })

});