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
var BackArrow_1 = __importDefault(require("../../Components/BackArrow"));
var typed_components_1 = __importDefault(require("../../typed-components"));
var Container = typed_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 30px;\n  padding: 50px 20px;\n"], ["\n  margin-top: 30px;\n  padding: 50px 20px;\n"])));
var Title = typed_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 25px;\n  margin-bottom: 40px;\n"], ["\n  font-size: 25px;\n  margin-bottom: 40px;\n"])));
var Link = typed_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var Icon = typed_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-right: 10px;\n"], ["\n  margin-right: 10px;\n"])));
var BackArrowExtended = typed_components_1.default(BackArrow_1.default)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"], ["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"])));
var SocialLoginPresenter = function () { return (react_1.default.createElement(Container, null,
    react_1.default.createElement(react_helmet_1.default, null,
        react_1.default.createElement("title", null, "Social Login | Nuber")),
    react_1.default.createElement(Title, null, "Choose an account"),
    react_1.default.createElement(BackArrowExtended, { backTo: '/' }),
    react_1.default.createElement(Link, null,
        react_1.default.createElement(Icon, null,
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "#344EA1" },
                react_1.default.createElement("path", { d: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" }))),
        "Facebook"))); };
exports.default = SocialLoginPresenter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=SocialLoginPresenter.js.map