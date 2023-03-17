exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 4098:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "AuthButton_component__p8Z2V"
};


/***/ }),

/***/ 9679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ primary_PrimaryLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/navigation/footer/Footer.tsx

const Footer = ({ className , ...footerProps })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        ...footerProps,
        className: `w-full p-5 bg-slate-100 text-slate-500 ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Canada"
        })
    });
};
/* harmony default export */ const footer_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./state/auth/AuthContext.tsx
var AuthContext = __webpack_require__(3802);
// EXTERNAL MODULE: ./components/buttons/auth/AuthButton.module.css
var AuthButton_module = __webpack_require__(4098);
var AuthButton_module_default = /*#__PURE__*/__webpack_require__.n(AuthButton_module);
;// CONCATENATED MODULE: ./components/buttons/auth/AuthButton.tsx




const AuthButton = ({ className , ...buttonProps })=>{
    const { authenticated , login , logOut  } = (0,external_react_.useContext)(AuthContext/* default */.Z);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: authenticated ? logOut : login,
        className: `${(AuthButton_module_default()).container} ${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`,
        ...buttonProps,
        children: authenticated ? "Sign Out" : "Sign In"
    });
};
/* harmony default export */ const auth_AuthButton = (AuthButton);

;// CONCATENATED MODULE: ./components/navigation/header/Header.tsx



const Header = ({ className , ...headerProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        ...headerProps,
        className: `w-full flex flex-row justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-x-5 m-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:underline",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/card",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:underline",
                            children: "Card"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/users",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:underline",
                            children: "Users"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://mail.google.com/mail/u/0/?tab=rm#inbox",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:underline ",
                            children: "Gmail"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-x-5 m-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:underline ",
                            children: "Gmail"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:underline sm:inline",
                            children: "Images"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(auth_AuthButton, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./components/layouts/primary/PrimaryLayout.tsx




const PrimaryLayout = ({ children , justify ="items-center" , ...divProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "NextJs Fullstack App Template"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ...divProps,
                className: `min-h-screen flex flex-col ${justify}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "px-5",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "m-auto"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const primary_PrimaryLayout = (PrimaryLayout);


/***/ }),

/***/ 3802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultValue = {
    authenticated: false,
    login: ()=>undefined
    ,
    logOut: ()=>undefined
};
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultValue);
const AuthProvider = ({ children  })=>{
    const { 0: authenticated , 1: setAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue.authenticated);
    const login = ()=>setAuthenticated(true)
    ;
    const logOut = ()=>setAuthenticated(false)
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            authenticated,
            login,
            logOut
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ })

};
;