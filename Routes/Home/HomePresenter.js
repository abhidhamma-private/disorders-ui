"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_sidebar_1 = __importDefault(require("react-sidebar"));
var Drawer_1 = __importDefault(require("../../Components/Drawer"));
var Header_1 = __importDefault(require("../../Components/Header"));
var Grid_1 = __importDefault(require("../../Components/Grid"));
var Article_1 = __importDefault(require("../../Components/Grid/Article"));
var Agenda_1 = __importDefault(require("../../Components/Grid/Agenda"));
var Info_1 = __importDefault(require("../../Components/Grid/Info"));
var HomePresenter = function (_a) {
    var isMenuOpen = _a.isMenuOpen, toggleMenu = _a.toggleMenu;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_sidebar_1.default, { sidebar: react_1.default.createElement(Drawer_1.default, null), open: isMenuOpen, onSetOpen: toggleMenu, pullRight: true, styles: {
                sidebar: {
                    width: '16.7vw',
                    zIndex: '10',
                },
            } },
            react_1.default.createElement(Header_1.default, { isMenuOpen: isMenuOpen, toggleMenu: toggleMenu }),
            react_1.default.createElement(Grid_1.default, null,
                react_1.default.createElement(Article_1.default, null),
                react_1.default.createElement(Agenda_1.default, null),
                react_1.default.createElement(Info_1.default, null)))));
};
exports.default = HomePresenter;
//# sourceMappingURL=HomePresenter.js.map