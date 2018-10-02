"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_boost_1 = require("apollo-boost");
exports.PHONE_SIGN_IN = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation startPhoneVerification($phoneNumber: String!) {\n    StartPhoneVerification(phoneNumber: $phoneNumber) {\n      ok\n      error\n    }\n  }\n"], ["\n  mutation startPhoneVerification($phoneNumber: String!) {\n    StartPhoneVerification(phoneNumber: $phoneNumber) {\n      ok\n      error\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=PhoneQueries.js.map