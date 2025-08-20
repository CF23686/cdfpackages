"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigErrors = void 0;
const framework_1 = require("@cdf-packages/framework");
class ApiConfigErrors extends framework_1.BusinessErrors {
}
exports.ApiConfigErrors = ApiConfigErrors;
ApiConfigErrors.InvalidApiConfiguration = {
    code: "Invalid_API_Configuration",
    message: `Invalid API configuration for service {{it.apiName}}`,
};
