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
var react_router_dom_1 = require("react-router-dom");
var typed_components_1 = __importDefault(require("../../typed-components"));
var Container = typed_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: scale(0.8);\n"], ["\n  transform: scale(0.8);\n"])));
var BackArrow = function (_a) {
    var backTo = _a.backTo, className = _a.className;
    return (react_1.default.createElement(Container, { className: className },
        react_1.default.createElement(react_router_dom_1.Link, { to: backTo },
            react_1.default.createElement("svg", { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd" },
                react_1.default.createElement("path", { d: "M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" })))));
};
exports.default = BackArrow;
var templateObject_1;
//# sourceMappingURL=BackArrow.js.map