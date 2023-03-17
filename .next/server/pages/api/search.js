"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 5285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./lib/search/database.json
const database_namespaceObject = JSON.parse('[{"url":"https://en.wikipedia.org/wiki/Cat","title":"This is a link to a search result about cats","text":"Did you know their whiskers can sense vibrations in the air?  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result."},{"url":"https://en.wikipedia.org/wiki/Dog","title":"This is a link to a search result about dogs","text":"They sure do love to bark.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result."},{"url":"https://en.wikipedia.org/wiki/Cats_%26_Dogs","title":"This is a link to a search result about both cats and dogs","text":"Both of them have tails.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result."},{"url":"https://en.wikipedia.org/wiki/Broccoli","title":"This is a link to a search result about broccoli","text":"Broccoli was invented by crossing cauliflower with pea seeds.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result."},{"url":"https://en.wikipedia.org/wiki/Cauliflower","title":"This is a link to a search result about cauliflower","text":"Who invented cauliflower?  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result."}]');
;// CONCATENATED MODULE: ./pages/api/search/index.ts

function handler(req, res) {
    const { body: { searchTerm  } ,  } = req;
    if (req.method === "POST" && searchTerm && searchTerm.length > 0) {
        // Creates a regex search pattern for a case insensitive match from the user's search term
        const searchPattern = new RegExp(searchTerm, "i");
        const filteredResults = database_namespaceObject.filter((result)=>{
            return(// Check the user's search term again either the title or the text of the database entry
            searchPattern.test(result.title) || searchPattern.test(result.text));
        });
        res.status(200).json(filteredResults);
    } else {
        res.status(400).json([]);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5285));
module.exports = __webpack_exports__;

})();