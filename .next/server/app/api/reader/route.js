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
exports.id = "app/api/reader/route";
exports.ids = ["app/api/reader/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freader%2Froute&page=%2Fapi%2Freader%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freader%2Froute.ts&appDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freader%2Froute&page=%2Fapi%2Freader%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freader%2Froute.ts&appDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shopstore_Documents_dev_projects_msgtohtml_app_api_reader_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/reader/route.ts */ \"(rsc)/./app/api/reader/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/reader/route\",\n        pathname: \"/api/reader\",\n        filename: \"route\",\n        bundlePath: \"app/api/reader/route\"\n    },\n    resolvedPagePath: \"/Users/shopstore/Documents/dev-projects/msgtohtml/app/api/reader/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shopstore_Documents_dev_projects_msgtohtml_app_api_reader_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/reader/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWFkZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJlYWRlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJlYWRlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNob3BzdG9yZSUyRkRvY3VtZW50cyUyRmRldi1wcm9qZWN0cyUyRm1zZ3RvaHRtbCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzaG9wc3RvcmUlMkZEb2N1bWVudHMlMkZkZXYtcHJvamVjdHMlMkZtc2d0b2h0bWwmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXNndG9odG1sLz82ODE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaG9wc3RvcmUvRG9jdW1lbnRzL2Rldi1wcm9qZWN0cy9tc2d0b2h0bWwvYXBwL2FwaS9yZWFkZXIvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlYWRlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JlYWRlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcmVhZGVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3Nob3BzdG9yZS9Eb2N1bWVudHMvZGV2LXByb2plY3RzL21zZ3RvaHRtbC9hcHAvYXBpL3JlYWRlci9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcmVhZGVyL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freader%2Froute&page=%2Fapi%2Freader%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freader%2Froute.ts&appDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/reader/route.ts":
/*!*********************************!*\
  !*** ./app/api/reader/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_utils_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/utils/reader */ \"(rsc)/./app/utils/reader.ts\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function POST(request) {\n    const formData = await request.formData();\n    const file = formData.get(\"file\");\n    const buffer = Buffer.from(await file.arrayBuffer());\n    const filename = file.name.replaceAll(\" \", \"_\");\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"public/\" + filename), buffer);\n    const readerRes = await (0,_app_utils_reader__WEBPACK_IMPORTED_MODULE_0__.reader)(filename);\n    return Response.json({\n        reader: readerRes\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlYWRlci9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDSDtBQUNoQjtBQUVqQixlQUFlRyxLQUFLQyxPQUFnQjtJQUN2QyxNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7SUFDdkMsTUFBTUMsT0FBWUQsU0FBU0UsR0FBRyxDQUFDO0lBQy9CLE1BQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQyxNQUFNSixLQUFLSyxXQUFXO0lBQ2pELE1BQU1DLFdBQVlOLEtBQUtPLElBQUksQ0FBQ0MsVUFBVSxDQUFDLEtBQUs7SUFDNUMsTUFBTWIsc0RBQVNBLENBQ1hDLGdEQUFTLENBQUNjLFFBQVFDLEdBQUcsSUFBSSxZQUFZTCxXQUNyQ0o7SUFFSixNQUFNVSxZQUFZLE1BQU1sQix5REFBTUEsQ0FBQ1k7SUFDL0IsT0FBT08sU0FBU0MsSUFBSSxDQUFDO1FBQUNwQixRQUFRa0I7SUFBUztBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL21zZ3RvaHRtbC8uL2FwcC9hcGkvcmVhZGVyL3JvdXRlLnRzP2JiZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZGVyIH0gZnJvbSBcIkAvYXBwL3V0aWxzL3JlYWRlclwiXG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSAgZmlsZS5uYW1lLnJlcGxhY2VBbGwoXCIgXCIsIFwiX1wiKTtcbiAgICBhd2FpdCB3cml0ZUZpbGUoXG4gICAgICAgIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpYy9cIiArIGZpbGVuYW1lKSxcbiAgICAgICAgYnVmZmVyXG4gICAgICApO1xuICAgIGNvbnN0IHJlYWRlclJlcyA9IGF3YWl0IHJlYWRlcihmaWxlbmFtZSlcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7cmVhZGVyOiByZWFkZXJSZXN9KVxufSJdLCJuYW1lcyI6WyJyZWFkZXIiLCJ3cml0ZUZpbGUiLCJwYXRoIiwiUE9TVCIsInJlcXVlc3QiLCJmb3JtRGF0YSIsImZpbGUiLCJnZXQiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYXJyYXlCdWZmZXIiLCJmaWxlbmFtZSIsIm5hbWUiLCJyZXBsYWNlQWxsIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJyZWFkZXJSZXMiLCJSZXNwb25zZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/reader/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/utils/reader.ts":
/*!*****************************!*\
  !*** ./app/utils/reader.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reader: () => (/* binding */ reader)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kenjiuno/msgreader */ \"(rsc)/./node_modules/@kenjiuno/msgreader/lib/index.js\");\n/* harmony import */ var _kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function reader(fileName) {\n    const msgFileBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`public/${fileName}`);\n    const testMsg = new (_kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_1___default())(msgFileBuffer);\n    const testMsgInfo = testMsg.getFileData();\n    return testMsgInfo;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvcmVhZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1CO0FBQ3dCO0FBRXBDLGVBQWVFLE9BQU9DLFFBQWdCO0lBQ3pDLE1BQU1DLGdCQUFnQkosc0RBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRUcsU0FBUyxDQUFDO0lBQzFELE1BQU1HLFVBQVUsSUFBSUwsNERBQVNBLENBQUNHO0lBQzlCLE1BQU1HLGNBQWNELFFBQVFFLFdBQVc7SUFDdkMsT0FBT0Q7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL21zZ3RvaHRtbC8uL2FwcC91dGlscy9yZWFkZXIudHM/MTkwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgTXNnUmVhZGVyIGZyb20gJ0BrZW5qaXVuby9tc2dyZWFkZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkZXIoZmlsZU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG1zZ0ZpbGVCdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoYHB1YmxpYy8ke2ZpbGVOYW1lfWApXG4gICAgY29uc3QgdGVzdE1zZyA9IG5ldyBNc2dSZWFkZXIobXNnRmlsZUJ1ZmZlcilcbiAgICBjb25zdCB0ZXN0TXNnSW5mbyA9IHRlc3RNc2cuZ2V0RmlsZURhdGEoKVxuICAgIHJldHVybiB0ZXN0TXNnSW5mb1xufVxuIl0sIm5hbWVzIjpbImZzIiwiTXNnUmVhZGVyIiwicmVhZGVyIiwiZmlsZU5hbWUiLCJtc2dGaWxlQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidGVzdE1zZyIsInRlc3RNc2dJbmZvIiwiZ2V0RmlsZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/reader.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/iconv-lite","vendor-chunks/@kenjiuno","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freader%2Froute&page=%2Fapi%2Freader%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freader%2Froute.ts&appDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshopstore%2FDocuments%2Fdev-projects%2Fmsgtohtml&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();