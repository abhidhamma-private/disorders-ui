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
var Article = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 50px;\n  background-color: #27ae60;\n  grid-area: article;\n"], ["\n  font-size: 50px;\n  background-color: #27ae60;\n  grid-area: article;\n"])));
var Todo = styled_components_1.default.iframe(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"])));
var ArticlePresenter = function () { return (react_1.default.createElement(Article, null,
    react_1.default.createElement(Todo, { src: "https://todolist-6d8d9.firebaseapp.com/" }))); };
exports.default = ArticlePresenter;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ArticlePresenter.js.map