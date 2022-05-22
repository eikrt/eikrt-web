"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game_reviews",{

/***/ "./components/blogposts.js":
/*!*********************************!*\
  !*** ./components/blogposts.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Blogposts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout.js */ \"./components/layout.js\");\n/* harmony import */ var _styles_content_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/content.module.css */ \"./styles/content.module.css\");\n/* harmony import */ var _styles_content_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_content_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Blogposts(props) {\n    var _this2 = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref[0], setPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var url =  true ? \"http://localhost:8080/\".concat(props.blogFile) : 0;\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then(function(res) {\n            setPosts(_toConsumableArray(posts).concat([\n                res.data\n            ]));\n        }).catch(function(error) {\n            console.log(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_content_module_css__WEBPACK_IMPORTED_MODULE_4___default().blog_entry),\n            children: posts && posts.map(function(post, index1) {\n                var _this1 = _this2;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: post.map(function(p, index2) {\n                        var _this = _this1;\n                        if (p.isDateBlogpost) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/\".concat(p.directory, \"/#\").concat(p.heading),\n                                    children: p.heading\n                                }, void 0, false, {\n                                    fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 10\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                lineNumber: 31,\n                                columnNumber: 6\n                            }, _this1);\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: p.lines && Object.values(p.lines).map(function(line, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_content_module_css__WEBPACK_IMPORTED_MODULE_4___default().text_box),\n                                    children: [\n                                        line.type === \"body\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_content_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                                dangerouslySetInnerHTML: {\n                                                    __html: line.line\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 10\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 7\n                                        }, _this),\n                                        line.type === \"h1\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: line.line\n                                        }, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 50\n                                        }, _this),\n                                        line.type === \"h2\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: line.line\n                                        }, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 50\n                                        }, _this),\n                                        line.type === \"h3\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: line.line\n                                        }, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 50\n                                        }, _this),\n                                        line.type === \"h4\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            children: line.line\n                                        }, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 50\n                                        }, _this),\n                                        line.type === \"date\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                children: line.line\n                                            }, void 0, false, {\n                                                fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 55\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 52\n                                        }, _this),\n                                        line.type === \"break\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 53\n                                        }, _this),\n                                        line.type === \"img\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: (_styles_content_module_css__WEBPACK_IMPORTED_MODULE_4___default().blog_img),\n                                            src: \"images/\".concat(line.line)\n                                        }, void 0, false, {\n                                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, _this);\n                            })\n                        }, index2, false, {\n                            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, _this1);\n                    })\n                }, index1, false, {\n                    fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, _this2);\n            })\n        }, void 0, false, {\n            fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/eino/repo/eikrt-web/frontend/components/blogposts.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Blogposts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Blogposts;\nvar _c;\n$RefreshReg$(_c, \"Blogposts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFDQSxJQUFJLENBQUNFLElBQUksS0FBSyxNQUFNLGtCQUFJLDhEQUFDWixHQUFDO3NEQUFDLDRFQUFDb0IsR0FBQzswREFBRVYsSUFBSSxDQUFDQSxJQUFJOzs7OztxREFBSzs7Ozs7aURBQUk7d0NBQ2pEQSxJQUFJLENBQUNFLElBQUksS0FBSyxPQUFPLGtCQUFJLDhEQUFDUyxJQUFFOzs7O2lEQUFFO3dDQUM5QlgsSUFBSSxDQUFDRSxJQUFJLEtBQUssS0FBSyxrQkFDbEIsOERBQUNVLEtBQUc7NENBQUMzQixTQUFTLEVBQUVuQiw0RUFBc0I7NENBQUVnRCxHQUFHLEVBQUUsU0FBUSxDQUFZLE9BQVZkLElBQUksQ0FBQ0EsSUFBSSxDQUFFOzs7OztpREFBUTs7bUNBWmxDWCxLQUFLOzs7O3lDQWMzQyxDQUNOOzZCQUNILENBQUM7MkJBbkJNQSxNQUFLOzs7O2tDQW9CVCxDQUNOO3FCQUNILENBQUM7bUJBOUJNQSxNQUFLOzs7OzBCQStCVCxDQUNOO2FBQ0gsQ0FBQzs7Ozs7Z0JBQ0U7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBM0R1QnRCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jsb2dwb3N0cy5qcz9jNWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0LmpzXCI7XG5pbXBvcnQgY29udGVudFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbnRlbnQubW9kdWxlLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ3Bvc3RzKHByb3BzKSB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTlZJUk9OTUVOVCA9PSBcImRldlwiXG4gICAgICAgID8gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke3Byb3BzLmJsb2dGaWxlfWBcbiAgICAgICAgOiBgaHR0cHM6Ly9laWtydC5jb20vYXBpLyR7cHJvcHMuYmxvZ0ZpbGV9YDtcbiAgICBheGlvc1xuICAgICAgLmdldCh1cmwpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFBvc3RzKFsuLi5wb3N0cywgcmVzLmRhdGFdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudFN0eWxlcy5ibG9nX2VudHJ5fT5cbiAgICAgICAge3Bvc3RzICYmIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3Bvc3QubWFwKChwLCBpbmRleCkgPT4ge1xuXHRcdCAgaWYgKHAuaXNEYXRlQmxvZ3Bvc3QpIHtcblx0XHQgICAgICByZXR1cm4oXG5cdFx0XHQgIDxoMj48YSBocmVmPXtgLyR7cC5kaXJlY3Rvcnl9LyMke3AuaGVhZGluZ31gfT57cC5oZWFkaW5nfTwvYT48L2gyPlxuXHRcdCAgICAgICk7XG5cdFx0ICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtwLmxpbmVzICYmIE9iamVjdC52YWx1ZXMocC5saW5lcykubWFwKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudFN0eWxlcy50ZXh0X2JveH1rZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmUudHlwZSA9PT0gXCJib2R5XCIgJiZcblx0XHRcdCAgIDxwcmU+XG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudFN0eWxlcy5wYXJhZ3JhcGh9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBsaW5lLmxpbmV9fSAvPlxuXHRcdFx0ICAgPC9wcmU+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluZS50eXBlID09PSBcImgxXCIgJiYgPGgxPntsaW5lLmxpbmV9PC9oMT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lLnR5cGUgPT09IFwiaDJcIiAmJiA8aDI+e2xpbmUubGluZX08L2gyPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmUudHlwZSA9PT0gXCJoM1wiICYmIDxoMz57bGluZS5saW5lfTwvaDM+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluZS50eXBlID09PSBcImg0XCIgJiYgPGg0PntsaW5lLmxpbmV9PC9oND59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lLnR5cGUgPT09IFwiZGF0ZVwiICYmIDxwPjxpPntsaW5lLmxpbmV9PC9pPjwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lLnR5cGUgPT09IFwiYnJlYWtcIiAmJiA8YnIvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmUudHlwZSA9PT0gXCJpbWdcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NvbnRlbnRTdHlsZXMuYmxvZ19pbWd9IHNyYz17YGltYWdlcy8ke2xpbmUubGluZX1gfT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJjb250ZW50U3R5bGVzIiwiQmxvZ3Bvc3RzIiwicHJvcHMiLCJwb3N0cyIsInNldFBvc3RzIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0VOVklST05NRU5UIiwiYmxvZ0ZpbGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvZ19lbnRyeSIsIm1hcCIsInBvc3QiLCJpbmRleCIsInAiLCJpc0RhdGVCbG9ncG9zdCIsImgyIiwiYSIsImhyZWYiLCJkaXJlY3RvcnkiLCJoZWFkaW5nIiwibGluZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsaW5lIiwidGV4dF9ib3giLCJ0eXBlIiwicHJlIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMSIsImgzIiwiaDQiLCJpIiwiYnIiLCJpbWciLCJibG9nX2ltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/blogposts.js\n");

/***/ })

});