"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigService = void 0;
const framework_1 = require("@cdf-packages/framework");
const api_config_errors_1 = require("./types/api-config-errors");
const apis_enum_1 = require("./types/apis.enum");
/**
 * Create set of API Configuration.
 * Each Api Service would have
 * a) apiName - unique name for the service
 * b) relativeUrl - relative url for the service
 * c) baseUrl (optional): base url for the service
 * d) token - token to be used for the service [ optional ]
 * e) apiKey - apiKey to be used for the service [ optional ]
 *
 * [Atleast one of token or apiKey should be present]
 * Configuration DB Entry would be something like this
 * [
 *  {
 *    apiName: "default",
 *    baseUrl: "https://ustgapig.chola.murugappa.com/lmspreprodapi/1.0.0",
 *    relativeUrl: "ReceiptPushToLMS",
 *    token: "common"
 *  },
 *  {
 *    apiName: "receiptPush",
 *    relativeUrl: "/receipts-lms/sendreceipt",
 *    token: "token-specific-to-receipt-push"
 *  },
 * ]
 *
 * Basically it retreives apiName:"default" entry and merges with specific Api settings ( apiName:"receiptPush").
 *
 * Additionally computes the end point which is baseUrl + relativeUrl
 *
 * A call for apiConfigService.getApiConfig("receiptPush") woudl return
 * {
 *    apiName: "receiptPush",
 *    baseUrl: "https://ustgapig.chola.murugappa.com/lmspreprodapi/1.0.0",
 *    relativeUrl: "/receipts-lms/sendreceipt",
 *    token: "token-specific-to-receipt-push",
 *    _endPoint: "https://ustgapig.chola.murugappa.com/lmspreprodapi/1.0.0/receipts-lms/sendreceipt"
 * }
 *
 */
// E.g Lms Url for reference "https://ustgapig.chola.murugappa.com/lmspreprodapi/1.0.0/ReceiptPushToLMS"
//Intentionally not injectable
class ApiConfigService extends framework_1.BaseService {
    constructor(businessConfigService, configKey, apiUrls = []) {
        super();
        this.businessConfigService = businessConfigService;
        this.configKey = configKey;
        this.apiUrls = apiUrls;
    }
    /*
     * Get LMS Configuration
     * @param apiName - LMS Api name
     * @returns LmsConfig
     */
    getApiConfig(apiName = apis_enum_1.Apis.default) {
        // Lets get the configuration table entry for lms
        const allApisConfig = this.businessConfigService.get(this.configKey, []);
        const defaultApiConfig = allApisConfig.find((config) => config.apiName === apis_enum_1.Apis.default);
        if (!defaultApiConfig) {
            this.logger.error(allApisConfig, "defaultApiConfig not found in configuration. Received config");
            // invalid configuration. Likely a dev error. Throw a runtime error
            throw new Error(`Default configuration not found.  Key: ${this.configKey} apiName: ${apis_enum_1.Apis.default}`);
        }
        const serviceConfig = this.apiUrls.find((api) => api.apiName === apiName) || {};
        // check if service has specific override in business config. if so use the same
        const serviceConfigOverride = allApisConfig.find((config) => config.apiName === apiName) || {};
        this.logger.debug(serviceConfigOverride, "serviceConfigOverride received from configuration,if any");
        // check if we have mandatory fields
        const mergedConfig = {
            ...defaultApiConfig,
            ...serviceConfig,
            ...serviceConfigOverride,
        };
        if (!mergedConfig.baseUrl ||
            (!mergedConfig.token && !mergedConfig.apiKey) // atleast apiKey or token should be there
        ) {
            this.logger.error(mergedConfig, `Invalid Api configuration received for ${apiName}. BaseUrl, relativeUrl and either of token, apiKey mandatory`);
            throw new framework_1.BusinessException(api_config_errors_1.ApiConfigErrors.InvalidApiConfiguration, {
                apiName,
            });
        }
        // Ensure no duplicate slashes in the URL
        // strip ending slash in lmsUrl and leading slash in relativeUrl
        mergedConfig._endPoint = framework_1.Utils.mergeBaseAndRelativeUrl(mergedConfig.baseUrl, mergedConfig.relativeUrl);
        this.logger.verbose(mergedConfig, "api config");
        return mergedConfig;
    }
}
exports.ApiConfigService = ApiConfigService;
