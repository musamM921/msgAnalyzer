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

/***/ "(app-pages-browser)/./app/components/Headers.tsx":
/*!************************************!*\
  !*** ./app/components/Headers.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst EmailHeaders = (param)=>{\n    let { headerDetails } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-16 my-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl font-bold\",\n                children: \"Headers\"\n            }, void 0, false, {\n                fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Headers.tsx\",\n                lineNumber: 11,\n                columnNumber: 12\n            }, undefined),\n            headerDetails && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    \"data-prefix\": \"~\",\n                    className: \"text-sky-500\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        style: {\n                            display: \"block\",\n                            marginLeft: \"50px\",\n                            whiteSpace: \"pre-wrap\",\n                            wordWrap: \"break-word\",\n                            overflowWrap: \"break-word\",\n                            wordBreak: \"break-all\"\n                        },\n                        children: headerDetails\n                    }, void 0, false, {\n                        fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Headers.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 59\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Headers.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Headers.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/components/Headers.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = EmailHeaders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailHeaders);\nvar _c;\n$RefreshReg$(_c, \"EmailHeaders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlcnMudHN4IiwibWFwcGluZ3MiOiI7OztBQU1BLE1BQU1BLGVBQTRDO1FBQUMsRUFBQ0MsYUFBYSxFQUFDO0lBQzlELHFCQUVJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFCOzs7Ozs7WUFDbkNGLCtCQUNDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0U7b0JBQUlDLGVBQVk7b0JBQUlILFdBQVU7OEJBQWUsNEVBQUNJO3dCQUFLQyxPQUFPOzRCQUN6REMsU0FBUzs0QkFDVEMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsVUFBVTs0QkFDVkMsY0FBYzs0QkFDZEMsV0FBVzt3QkFDYjtrQ0FBSWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7S0FuQk1EO0FBcUJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlYWRlcnMudHN4P2RlMzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW50ZXJmYWNlIEVtYWlsSGVhZGVyc1Byb3BzIHtcbiAgaGVhZGVyRGV0YWlsczogc3RyaW5nO1xufVxuXG5jb25zdCBFbWFpbEhlYWRlcnM6IFJlYWN0LkZDPEVtYWlsSGVhZGVyc1Byb3BzPiA9ICh7aGVhZGVyRGV0YWlsc30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTE2IG15LThcIj5cbiAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkhlYWRlcnM8L2gzPlxuICAgICAgICAgIHtoZWFkZXJEZXRhaWxzICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2NrdXAtY29kZSBmbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwcmUgZGF0YS1wcmVmaXg9XCJ+XCIgY2xhc3NOYW1lPVwidGV4dC1za3ktNTAwXCI+PGNvZGUgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxuICAgICAgICAgICAgICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsXG4gICAgICAgICAgICAgIHdvcmRCcmVhazogXCJicmVhay1hbGxcIixcbiAgICAgICAgICAgIH19PntoZWFkZXJEZXRhaWxzfTwvY29kZT48L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1haWxIZWFkZXJzOyJdLCJuYW1lcyI6WyJFbWFpbEhlYWRlcnMiLCJoZWFkZXJEZXRhaWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwcmUiLCJkYXRhLXByZWZpeCIsImNvZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0Iiwid2hpdGVTcGFjZSIsIndvcmRXcmFwIiwib3ZlcmZsb3dXcmFwIiwid29yZEJyZWFrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Headers.tsx\n"));

/***/ })

});