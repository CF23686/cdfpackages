"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProxyModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const auth_1 = require("@cdf-packages/auth");
const framework_1 = require("@cdf-packages/framework");
let ApiProxyModule = class ApiProxyModule {
};
exports.ApiProxyModule = ApiProxyModule;
exports.ApiProxyModule = ApiProxyModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [auth_1.AuthModule],
        providers: [framework_1.FrameworkModule],
        exports: [],
    })
], ApiProxyModule);
