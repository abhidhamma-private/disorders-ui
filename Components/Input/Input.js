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
var typed_components_1 = __importDefault(require("../../typed-components"));
var Container = typed_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  border-bottom: 2px solid ", ";\n  font-size: 20px;\n  width: 100%;\n  padding-bottom: 10px;\n  font-weight: 500;\n  transition: border-bottom 0.1s linear;\n  &:-webkit-autofill {\n    box-shadow: 0 0 0px 1000px white inset !important;\n  }\n  &:focus {\n    border-bottom-color: #2c3e50;\n    outline: none;\n  }\n  &::placeholder {\n    color: ", ";\n    font-weight: 300;\n  }\n"], ["\n  border: none;\n  border-bottom: 2px solid ", ";\n  font-size: 20px;\n  width: 100%;\n  padding-bottom: 10px;\n  font-weight: 500;\n  transition: border-bottom 0.1s linear;\n  &:-webkit-autofill {\n    box-shadow: 0 0 0px 1000px white inset !important;\n  }\n  &:focus {\n    border-bottom-color: #2c3e50;\n    outline: none;\n  }\n  &::placeholder {\n    color: ", ";\n    font-weight: 300;\n  }\n"])), function (props) { return props.theme.greyColor; }, function (props) { return props.theme.greyColor; });
var Input = function (_a) {
    var _b = _a.placeholder, placeholder = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, _d = _a.required, required = _d === void 0 ? true : _d, value = _a.value, _e = _a.name, name = _e === void 0 ? '' : _e, onChange = _a.onChange;
    return (react_1.default.createElement(Container, { name: name, type: type, required: required, value: value, placeholder: placeholder, onChange: onChange }));
};
exports.default = Input;
var templateObject_1;
//# sourceMappingURL=Input.js.map