"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var AddPlace_1 = __importDefault(require("../../Routes/AddPlace"));
var EditAccount_1 = __importDefault(require("../../Routes/EditAccount"));
var FindAddress_1 = __importDefault(require("../../Routes/FindAddress"));
var Login_1 = __importDefault(require("../../Routes/Login"));
var PhoneLogin_1 = __importDefault(require("../../Routes/PhoneLogin"));
var Places_1 = __importDefault(require("../../Routes/Places"));
var Ride_1 = __importDefault(require("../../Routes/Ride"));
var Settings_1 = __importDefault(require("../../Routes/Settings"));
var SocialLogin_1 = __importDefault(require("../../Routes/SocialLogin"));
var VerifyPhone_1 = __importDefault(require("../../Routes/VerifyPhone"));
var Home_1 = __importDefault(require("../../Routes/Home"));
var AppPresenter = function (_a) {
    var isLoggedIn = _a.isLoggedIn;
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null, isLoggedIn ? react_1.default.createElement(LoggedInRoutes, null) : react_1.default.createElement(LoggedOutRoutes, null)));
};
var LoggedOutRoutes = function () { return (react_1.default.createElement(react_router_dom_1.Switch, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Home_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/phone-login', component: PhoneLogin_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/verify-phone/:number', component: VerifyPhone_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/social-login', component: SocialLogin_1.default }),
    react_1.default.createElement(react_router_dom_1.Redirect, { from: '*', to: '/' }))); };
var LoggedInRoutes = function () { return (react_1.default.createElement(react_router_dom_1.Switch, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Login_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/ride', exact: true, component: Ride_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/edit-account', exact: true, component: EditAccount_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/settings', exact: true, component: Settings_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/places', exact: true, component: Places_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/add-place', exact: true, component: AddPlace_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/find-address', exact: true, component: FindAddress_1.default }),
    react_1.default.createElement(react_router_dom_1.Redirect, { from: '*', to: '/' }))); };
AppPresenter.propTypes = {
    isLoggedIn: prop_types_1.default.bool.isRequired,
};
exports.default = AppPresenter;
//# sourceMappingURL=AppPresenter.js.map