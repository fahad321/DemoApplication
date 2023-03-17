"use strict";
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 7867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://reqres.in"
});
API.interceptors.request.use((req)=>{
    return req;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rf": () => (/* binding */ getUsers),
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "h8": () => (/* binding */ deleteUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export setCurrentPage */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middleware_api__WEBPACK_IMPORTED_MODULE_1__]);
_middleware_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = "api/users";
const getUsers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("users/getUser", async (test, { rejectWithValue  })=>{
    try {
        var ref;
        const response = await _middleware_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/${url}`);
        return (ref = response.data) === null || ref === void 0 ? void 0 : ref.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const updateUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("users/updateUser", async (user, { rejectWithValue  })=>{
    try {
        const response = await _middleware_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].patch */ .Z.patch(`/${url}/${user.id}`, user);
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const deleteUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("users/deleteUser", async (userId, { rejectWithValue  })=>{
    try {
        const response = await _middleware_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](`/${url}/${userId}`);
        return response.request;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: {
        users: {},
        status: 0,
        error: "",
        loading: false
    },
    reducers: {
        setCurrentPage: (state, action)=>{
            // @ts-ignore
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getUsers.pending, (state)=>{
            state.loading = true;
        }).addCase(getUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload;
        }).addCase(getUsers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(updateUser.pending, (state)=>{
            state.loading = true;
        }).addCase(updateUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.status = 200;
            // @ts-ignore
            state.users = state.users.map((item)=>item.id === action.payload.id ? action.payload : item
            );
        }).addCase(updateUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(deleteUser.pending, (state)=>{
            state.loading = true;
        }).addCase(deleteUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.status = action.payload.status;
            const url1 = action.payload.responseURL;
            const newArray = url1.split("/");
            const index = newArray.length - 1;
            // @ts-ignore
            const id = state.users.findIndex((user)=>user.id === parseInt(newArray[index])
            );
            if (id > -1) {
                // @ts-ignore
                state.users.splice(id, 1);
                // @ts-ignore
                // eslint-disable-next-line no-self-assign
                state.users = state.users;
            }
        }).addCase(deleteUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload.message;
        });
    }
});
const { setCurrentPage  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;