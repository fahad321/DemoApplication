"use strict";
(() => {
var exports = {};
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 1473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ results),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layouts/primary/PrimaryLayout.tsx + 3 modules
var PrimaryLayout = __webpack_require__(9679);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/utility/search-result/SearchResult.tsx


const SearchResult = ({ url , title , text , className , ...divProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...divProps,
        className: `flex flex-col w-5/6 max-w-screen-md space-y-1 ${className} `,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: url,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "cursor:pointer hover:underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: url
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-blue-600 text-xl ",
                            children: title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: text
            })
        ]
    });
};
/* harmony default export */ const search_result_SearchResult = (SearchResult);

;// CONCATENATED MODULE: ./pages/results/index.tsx



const getServerSideProps = async ({ query ,  })=>{
    let searchResults = [];
    const searchTerm = query.search;
    if (searchTerm && searchTerm.length > 0) {
        const response = await fetch(`http://localhost:3000/api/search`, {
            body: JSON.stringify({
                searchTerm
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        searchResults = await response.json();
    }
    return {
        props: {
            // Will be passed to the page component as props
            searchResults,
            searchTerm
        }
    };
};
const Results = ({ searchResults , searchTerm  })=>{
    const hasResults = searchResults.length > 0;
    console.log(searchTerm);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "flex flex-col items-center gap-y-5",
            children: hasResults ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex flex-col space-y-8`,
                children: searchResults.map((result, idx)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(search_result_SearchResult, {
                        ...result
                    }, idx);
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "No results found."
            })
        })
    });
};
/* harmony default export */ const results = (Results);
Results.getLayout = (page)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(PrimaryLayout/* default */.Z, {
        justify: "items-start",
        children: page
    });
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,679], () => (__webpack_exec__(1473)));
module.exports = __webpack_exports__;

})();