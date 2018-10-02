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
var Info_1 = __importDefault(require("./Info"));
var Agenda_1 = __importDefault(require("./Agenda"));
var Article_1 = __importDefault(require("./Article"));
var Grid = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-areas: '. agenda article info .';\n  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;\n  padding-top: 50px;\n  grid-template-rows: 1000px;\n  width: 100vw;\n\n  @media (max-width: 850px) {\n    display: grid;\n    grid-template-areas:\n      'article'\n      'agenda'\n      'info';\n    grid-template-columns: 1fr;\n    grid-template-rows: 500px 500px 500px;\n    padding-top: 50px;\n\n    & > {\n      display: flex;\n      justify-content: space-around;\n    }\n  }\n"], ["\n  display: grid;\n  grid-template-areas: '. agenda article info .';\n  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;\n  padding-top: 50px;\n  grid-template-rows: 1000px;\n  width: 100vw;\n\n  @media (max-width: 850px) {\n    display: grid;\n    grid-template-areas:\n      'article'\n      'agenda'\n      'info';\n    grid-template-columns: 1fr;\n    grid-template-rows: 500px 500px 500px;\n    padding-top: 50px;\n\n    & > {\n      display: flex;\n      justify-content: space-around;\n    }\n  }\n"])));
var GridPresenter = function () { return (react_1.default.createElement(Grid, null,
    react_1.default.createElement(Article_1.default, null),
    react_1.default.createElement(Agenda_1.default, null),
    react_1.default.createElement(Info_1.default, null))); };
exports.default = GridPresenter;
var templateObject_1;
//# sourceMappingURL=GridPresenter.js.map