"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigServiceProvider = void 0;
const config_1 = require("@cdf-packages/config");
const api_config_service_1 = require("./api-config.service");
/**
 * Generates specific ApiConfigService based on configKey given. The provider is registered under the providerSymbol
 * E.g usage,
 *   ApiConfigServiceProvider.getProvider(
       LMS_API_CONFIG_SERVICE, // Now lms Apis configuration is available in this symbols
       configConstants.lmsApis,
     ),
 *
 */
class ApiConfigServiceProvider {
    static getProvider(providerSymbol, configKey, apiUrls = []) {
        return {
            provide: providerSymbol,
            useFactory: (businessConfig) => {
                return new api_config_service_1.ApiConfigService(businessConfig, configKey, apiUrls);
            },
            inject: [config_1.BUSINESS_CONFIG],
        };
    }
}
exports.ApiConfigServiceProvider = ApiConfigServiceProvider;
