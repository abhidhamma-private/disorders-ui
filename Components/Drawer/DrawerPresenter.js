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
var styled_components_1 = __importDefault(require("styled-components"));
var Drawer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  width: 16.7vw;\n  height: 100%;\n  right: 0;\n  background-color: #00a8ff;\n  visibility: visible;\n"], ["\n  position: fixed;\n  top: 0;\n  width: 16.7vw;\n  height: 100%;\n  right: 0;\n  background-color: #00a8ff;\n  visibility: visible;\n"])));
var DrawerPresenter = function () { return (react_1.default.createElement(Drawer, null,
    react_1.default.createElement("ul", null,
        react_1.default.createElement("li", null, "1"),
        react_1.default.createElement("li", null, "2"),
        react_1.default.createElement("li", null, "3"),
        react_1.default.createElement("li", null, "4"),
        react_1.default.createElement("li", null, "5")))); };
exports.default = DrawerPresenter;
var templateObject_1;
//# sourceMappingURL=DrawerPresenter.js.map