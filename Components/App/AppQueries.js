"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_boost_1 = require("apollo-boost");
exports.IS_LOGGED_IN = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    auth {\n      isLoggedIn @client\n    }\n  }\n"], ["\n  {\n    auth {\n      isLoggedIn @client\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=AppQueries.js.map