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
var react_helmet_1 = __importDefault(require("react-helmet"));
var react_router_dom_1 = require("react-router-dom");
var bg_png_1 = __importDefault(require("../../images/bg.png"));
var typed_components_1 = __importDefault(require("../../typed-components"));
var Container = typed_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n"], ["\n  height: 100vh;\n"])));
var Header = typed_components_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 70%;\n  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),\n    url(", ");\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  height: 70%;\n  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),\n    url(", ");\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), bg_png_1.default);
var Logo = typed_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 110px;\n  height: 110px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 25px;\n"], ["\n  width: 110px;\n  height: 110px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 25px;\n"])));
var Title = typed_components_1.default.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var Footer = typed_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var Subtitle = typed_components_1.default.h2(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 30px;\n"], ["\n  font-size: 30px;\n"])));
var FakeInput = typed_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 50px 0px;\n  font-size: 25px;\n  font-weight: 300;\n"], ["\n  margin: 50px 0px;\n  font-size: 25px;\n  font-weight: 300;\n"])));
var PhoneLogin = typed_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: 20px;\n"], ["\n  padding: 20px;\n"])));
var Grey = typed_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n  margin-left: 10px;\n"], ["\n  color: ", ";\n  margin-left: 10px;\n"])), function (props) { return props.theme.greyColor; });
var SocialLogin = typed_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  padding: 30px 20px;\n"], ["\n  border-top: 1px solid ", ";\n  padding: 30px 20px;\n"])), function (props) { return props.theme.greyColor; });
var SocialLink = typed_components_1.default.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 20px;\n"], ["\n  color: ", ";\n  font-size: 20px;\n"])), function (props) { return props.theme.blueColor; });
var LoginPresenter = function () { return (react_1.default.createElement(Container, null,
    react_1.default.createElement(react_helmet_1.default, null,
        react_1.default.createElement("title", null, "Login | Nuber")),
    react_1.default.createElement(Header, null,
        react_1.default.createElement(Logo, null,
            react_1.default.createElement(Title, null, "Nuber"))),
    react_1.default.createElement(Footer, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: '/phone-login' },
            react_1.default.createElement(PhoneLogin, null,
                react_1.default.createElement(Subtitle, null, "Get moving with Nuber"),
                react_1.default.createElement(FakeInput, null,
                    "\uD83C\uDDF0\uD83C\uDDF7 +82 ",
                    react_1.default.createElement(Grey, null, "Enter your mobile number")))),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/social-login' },
            react_1.default.createElement(SocialLogin, null,
                react_1.default.createElement(SocialLink, null, "Or connect with social")))))); };
exports.default = LoginPresenter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=LoginPresenter.js.map