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
var react_apollo_1 = require("react-apollo");
var react_toastify_1 = require("react-toastify");
var PhoneLoginPresenter_1 = __importDefault(require("./PhoneLoginPresenter"));
var PhoneQueries_1 = require("./PhoneQueries");
var PhoneSignInMutation = /** @class */ (function (_super) {
    __extends(PhoneSignInMutation, _super);
    function PhoneSignInMutation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PhoneSignInMutation;
}(react_apollo_1.Mutation));
var PhoneLoginContainer = /** @class */ (function (_super) {
    __extends(PhoneLoginContainer, _super);
    function PhoneLoginContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            countryCode: '+82',
            phoneNumber: '',
        };
        _this.onInputChange = function (event) {
            var _a;
            var _b = event.target, name = _b.name, value = _b.value;
            _this.setState((_a = {},
                _a[name] = value,
                _a));
        };
        return _this;
    }
    PhoneLoginContainer.prototype.render = function () {
        var _this = this;
        var _a = this.state, countryCode = _a.countryCode, phoneNumber = _a.phoneNumber;
        return (react_1.default.createElement(PhoneSignInMutation, { mutation: PhoneQueries_1.PHONE_SIGN_IN, variables: {
                phoneNumber: "" + countryCode + phoneNumber,
            } }, function (mutation, _a) {
            var loading = _a.loading;
            var onSubmit = function (event) {
                event.preventDefault();
                var isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test("" + countryCode + phoneNumber);
                if (isValid) {
                    return;
                }
                else {
                    react_toastify_1.toast.error('Please write valid Number');
                }
                // tslint:disable-next-line
                console.log(isValid);
            };
            return (react_1.default.createElement(PhoneLoginPresenter_1.default, { countryCode: countryCode, phoneNumber: phoneNumber, onInputChange: _this.onInputChange, onSubmit: onSubmit }));
        }));
    };
    return PhoneLoginContainer;
}(react_1.default.Component));
exports.default = PhoneLoginContainer;
//# sourceMappingURL=PhoneLoginContainer.js.map