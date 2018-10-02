"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.min.css");
var styled_reset_1 = __importDefault(require("styled-reset"));
var theme_1 = __importDefault(require("../../theme"));
var typed_components_1 = require("../../typed-components");
var AppPresenter_1 = __importDefault(require("./AppPresenter"));
var AppQueries_1 = require("./AppQueries");
// tslint:disable-next-line
typed_components_1.injectGlobal(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n", "\n"], ["\n", "\n"])), styled_reset_1.default);
var AppContainer = function (_a) {
    var data = _a.data;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(typed_components_1.ThemeProvider, { theme: theme_1.default },
            react_1.default.createElement(AppPresenter_1.default, { isLoggedIn: data.auth.isLoggedIn })),
        react_1.default.createElement(react_toastify_1.ToastContainer, { draggable: true })));
};
exports.default = react_apollo_1.graphql(AppQueries_1.IS_LOGGED_IN)(AppContainer);
var templateObject_1;
//# sourceMappingURL=AppContainer.js.map