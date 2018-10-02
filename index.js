"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_dom_1 = __importDefault(require("react-dom"));
var apollo_1 = __importDefault(require("./apollo"));
var App_1 = __importDefault(require("./Components/App"));
require("./global-styles");
react_dom_1.default.render(react_1.default.createElement(react_apollo_1.ApolloProvider, { client: apollo_1.default },
    react_1.default.createElement(App_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map