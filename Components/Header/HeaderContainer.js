"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HeaderPresenter_1 = __importDefault(require("./HeaderPresenter"));
var HeaderContainer = /** @class */ (function (_super) {
    __extends(HeaderContainer, _super);
    function HeaderContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMenuOpen: false,
        };
        _this.toggleMenu = function () {
            _this.setState(function (state) {
                return {
                    isMenuOpen: !state.isMenuOpen,
                };
            });
        };
        return _this;
    }
    HeaderContainer.prototype.render = function () {
        var isMenuOpen = this.state.isMenuOpen;
        return (react_1.default.createElement(HeaderPresenter_1.default, { isMenuOpen: isMenuOpen, toggleMenu: this.toggleMenu }));
    };
    return HeaderContainer;
}(react_1.default.Component));
exports.default = HeaderContainer;
//# sourceMappingURL=HeaderContainer.js.map