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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FileInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FileInput */ \"(app-pages-browser)/./app/components/FileInput.tsx\");\n/* harmony import */ var _components_Headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Headers */ \"(app-pages-browser)/./app/components/Headers.tsx\");\n/* harmony import */ var _components_Attachments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Attachments */ \"(app-pages-browser)/./app/components/Attachments.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onDataExtracted: (details)=>setDetails(details)\n            }, void 0, false, {\n                fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Headers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                headerDetails: details === null || details === void 0 ? void 0 : details.headers\n            }, void 0, false, {\n                fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Attachments__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                attachmentsDetails: details === null || details === void 0 ? void 0 : details.attachments\n            }, void 0, false, {\n                fileName: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"Y1sBlBV699et8ERQZKjqkMIPBMI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFDYztBQUNDO0FBQ1U7QUFFMUQsTUFBTUksT0FBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBTTtJQUU1QyxxQkFDRTs7MEJBRUUsOERBQUNDLDZEQUFTQTtnQkFBQ00saUJBQWlCLENBQUNGLFVBQWlCQyxXQUFXRDs7Ozs7OzBCQUd6RCw4REFBQ0gsMkRBQVlBO2dCQUFDTSxhQUFhLEVBQUVILG9CQUFBQSw4QkFBQUEsUUFBU0ksT0FBTzs7Ozs7OzBCQUM3Qyw4REFBQ04sK0RBQWtCQTtnQkFBQ08sa0JBQWtCLEVBQUVMLG9CQUFBQSw4QkFBQUEsUUFBU00sV0FBVzs7Ozs7Ozs7QUFJbEU7R0FkTVA7S0FBQUE7QUFnQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSBcIi4vY29tcG9uZW50cy9GaWxlSW5wdXRcIjtcbmltcG9ydCBFbWFpbEhlYWRlcnMgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJzXCI7XG5pbXBvcnQgQXR0YWNobWVudHNIZWFkZXJzIGZyb20gXCIuL2NvbXBvbmVudHMvQXR0YWNobWVudHNcIjtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlPGFueT4obnVsbClcblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxGaWxlSW5wdXQgb25EYXRhRXh0cmFjdGVkPXsoZGV0YWlsczogYW55KSA9PiBzZXREZXRhaWxzKGRldGFpbHMpfSAvPlxuXG4gICAgICB7LyogUmVzdWx0cyAqL31cbiAgICAgIDxFbWFpbEhlYWRlcnMgaGVhZGVyRGV0YWlscz17ZGV0YWlscz8uaGVhZGVyc30gLz5cbiAgICAgIDxBdHRhY2htZW50c0hlYWRlcnMgYXR0YWNobWVudHNEZXRhaWxzPXtkZXRhaWxzPy5hdHRhY2htZW50c30gLz5cbiAgICAgIFxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZpbGVJbnB1dCIsIkVtYWlsSGVhZGVycyIsIkF0dGFjaG1lbnRzSGVhZGVycyIsIkhvbWUiLCJkZXRhaWxzIiwic2V0RGV0YWlscyIsIm9uRGF0YUV4dHJhY3RlZCIsImhlYWRlckRldGFpbHMiLCJoZWFkZXJzIiwiYXR0YWNobWVudHNEZXRhaWxzIiwiYXR0YWNobWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});