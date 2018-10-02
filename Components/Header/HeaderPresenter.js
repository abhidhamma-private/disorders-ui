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
var Header = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  background-color: rgba(255, 255, 255, 0.6);\n  height: 50px;\n  width: 100%;\n  border-bottom: #eeeeee;\n  border-width: 0 0 1px;\n"], ["\n  position: fixed;\n  background-color: rgba(255, 255, 255, 0.6);\n  height: 50px;\n  width: 100%;\n  border-bottom: #eeeeee;\n  border-width: 0 0 1px;\n"])));
var Row = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-areas: '. brand menu .';\n  grid-template-columns: 1fr 1fr 3fr 1fr;\n  grid-template-rows: 50px;\n\n  @media (max-width: 850px) {\n    display: grid;\n    grid-template-areas: 'brand . . menu';\n    grid-template-columns: 1fr 1fr 1fr 3fr;\n    grid-template-rows: 50px;\n  }\n"], ["\n  display: grid;\n  grid-template-areas: '. brand menu .';\n  grid-template-columns: 1fr 1fr 3fr 1fr;\n  grid-template-rows: 50px;\n\n  @media (max-width: 850px) {\n    display: grid;\n    grid-template-areas: 'brand . . menu';\n    grid-template-columns: 1fr 1fr 1fr 3fr;\n    grid-template-rows: 50px;\n  }\n"])));
var Column = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-around;\n  &:nth-child(1) {\n    grid-area: brand;\n    justify-content: flex-start;\n  }\n  &:nth-child(2) {\n    grid-area: menu;\n    justify-content: flex-end;\n  }\n"], ["\n  display: flex;\n  justify-content: space-around;\n  &:nth-child(1) {\n    grid-area: brand;\n    justify-content: flex-start;\n  }\n  &:nth-child(2) {\n    grid-area: menu;\n    justify-content: flex-end;\n  }\n"])));
var Brand = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-self: center;\n  font-weight: 900;\n  font-size: 30px;\n  margin-bottom: 7px;\n  margin-left: 10px;\n"], ["\n  align-self: center;\n  font-weight: 900;\n  font-size: 30px;\n  margin-bottom: 7px;\n  margin-left: 10px;\n"])));
var Login = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-self: center;\n  flex-wrap: wrap;\n  font-size: 15px;\n  margin-right: 10px;\n"], ["\n  align-self: center;\n  flex-wrap: wrap;\n  font-size: 15px;\n  margin-right: 10px;\n"])));
var Menu = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  align-self: center;\n  font-weight: 900;\n  font-size: 20px;\n  height: 50px;\n  width: 40px;\n  transform: rotate(90deg);\n  margin-right: 15px;\n  text-align: center;\n"], ["\n  align-self: center;\n  font-weight: 900;\n  font-size: 20px;\n  height: 50px;\n  width: 40px;\n  transform: rotate(90deg);\n  margin-right: 15px;\n  text-align: center;\n"])));
var HeaderPresenter = function (_a) {
    var isMenuOpen = _a.isMenuOpen, toggleMenu = _a.toggleMenu;
    return (react_1.default.createElement(Header, null,
        react_1.default.createElement(Row, null,
            react_1.default.createElement(Column, null,
                react_1.default.createElement(Brand, null, ":):")),
            react_1.default.createElement(Column, null,
                react_1.default.createElement(Login, null, "Sign up / Sign in"),
                react_1.default.createElement(Menu, { onClick: toggleMenu }, "|||")))));
};
exports.default = HeaderPresenter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=HeaderPresenter.js.map