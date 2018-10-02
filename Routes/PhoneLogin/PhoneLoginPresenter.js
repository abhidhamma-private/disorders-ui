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
var Input_1 = __importDefault(require("../../Components/Input"));
var countries_1 = __importDefault(require("../../countries"));
var typed_components_1 = __importDefault(require("../../typed-components"));
var Container = typed_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 30px;\n  padding: 50px 20px;\n"], ["\n  margin-top: 30px;\n  padding: 50px 20px;\n"])));
var BackArrowExtended = typed_components_1.default(BackArrow_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"], ["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"])));
var Title = typed_components_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 25px;\n  margin-bottom: 40px;\n"], ["\n  font-size: 25px;\n  margin-bottom: 40px;\n"])));
var CountrySelect = typed_components_1.default.select(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 20px;\n  color: '#2c3e50';\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  border: 0;\n  font-family: 'Maven Pro';\n  margin-bottom: 20px;\n  width: 90%;\n"], ["\n  font-size: 20px;\n  color: '#2c3e50';\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  border: 0;\n  font-family: 'Maven Pro';\n  margin-bottom: 20px;\n  width: 90%;\n"])));
var CountryOption = typed_components_1.default.option(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var Form = typed_components_1.default.form(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var Button = typed_components_1.default.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);\n  background-color: black;\n  color: white;\n  padding: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  cursor: pointer;\n"], ["\n  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);\n  background-color: black;\n  color: white;\n  padding: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  cursor: pointer;\n"])));
var PhoneLoginPresenter = function (_a) {
    var countryCode = _a.countryCode, phoneNumber = _a.phoneNumber, onInputChange = _a.onInputChange, onSubmit = _a.onSubmit;
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(react_helmet_1.default, null,
            react_1.default.createElement("title", null, "Phone Login | Number")),
        react_1.default.createElement(BackArrowExtended, { backTo: '/' }),
        react_1.default.createElement(Title, null, "Enter your mobile number"),
        react_1.default.createElement(CountrySelect, { value: countryCode, name: 'countryCode', onChange: onInputChange }, countries_1.default.map(function (country, index) { return (react_1.default.createElement(CountryOption, { key: index, value: country.dial_code },
            country.flag,
            " ",
            country.name,
            " (",
            country.dial_code,
            ")")); })),
        react_1.default.createElement(Form, { onSubmit: onSubmit },
            react_1.default.createElement(Input_1.default, { placeholder: '053 690 2129', value: phoneNumber, name: 'phoneNumber', onChange: onInputChange }),
            react_1.default.createElement(Button, null,
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: 'white' },
                    react_1.default.createElement("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" }))))));
};
exports.default = PhoneLoginPresenter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=PhoneLoginPresenter.js.map