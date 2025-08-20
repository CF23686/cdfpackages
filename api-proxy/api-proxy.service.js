"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProxyService = void 0;
const framework_1 = require("@cdf-packages/framework");
const Sqrl = require("squirrelly");
/**
 * General Purpose Api Proxy Service
 * Retrieves configuration from ApiConfigService
 * Handles determining end point, token and publishes data.
 *
 */
// Intentionally made non injectable, as it clearly needs appropriate ApiConfigService
class ApiProxyService extends framework_1.BaseService {
    constructor(apiConfigService, httpHandler, authContext, defaultTargetServiceName) {
        super();
        this.apiConfigService = apiConfigService;
        this.httpHandler = httpHandler;
        this.authContext = authContext;
        this.defaultTargetServiceName = defaultTargetServiceName;
    }
    //#region public methods
    /**
     * Posts data to LMS
     * @async
     * @param apiName logical API name - e.g receiptPush. This gets translated to actual LMS API Url
     * @param data
     * @returns
     */
    async postData(apiName, data, queryStringParams, customHeaders, customExceptionProcessor, targetServiceName) {
        const apiConfig = this.apiConfigService.getApiConfig(apiName);
        const endPoint = this.buildApiEndPoint(apiConfig, queryStringParams);
        const headers = this.mergeHeaders(apiConfig.headers, customHeaders);
        return await this.httpHandler.postRequest(endPoint, data, this.getToken(apiConfig), headers, customExceptionProcessor, targetServiceName || this.defaultTargetServiceName);
    }
    /**
     * Get data from Lms
     * @param apiName logical API name - e.g receiptPush. This gets translated to actual LMS API Url
     * @param queryStringParams. Query string parameters to be replaced in the URL
     * This will be replaced in the URL as @key@
     *
     * {
     *    agId:'12345'
     * }
     * E.g Endpoint Url: https://lms.com/api/v1/receipt/@agId@
     * Here agId will be replaced with 12345
     * Final Url will be https://lms.com/api/v1/receipt/12345
     * @returns
     */
    async getData(apiName, queryStringParams, customHeaders, customExceptionProcessor, targetServiceName) {
        const apiConfig = this.apiConfigService.getApiConfig(apiName);
        const endPoint = this.buildApiEndPoint(apiConfig, queryStringParams);
        const headers = this.mergeHeaders(apiConfig.headers, customHeaders) || {};
        headers.Authorization = this.getToken(apiConfig);
        return await this.httpHandler.getRequest(endPoint, headers, customExceptionProcessor, targetServiceName || this.defaultTargetServiceName);
    }
    /**
     * Posts data to LMS
     * @async
     * @param apiName logical API name - e.g receiptPush. This gets translated to actual LMS API Url
     * @param data
     * @returns
     */
    async putData(apiName, data, queryStringParams, customHeaders, customExceptionProcessor, targetServiceName) {
        const apiConfig = this.apiConfigService.getApiConfig(apiName);
        const endPoint = this.buildApiEndPoint(apiConfig, queryStringParams);
        const headers = this.mergeHeaders(apiConfig.headers, customHeaders);
        return await this.httpHandler.putRequest(endPoint, data, this.getToken(apiConfig), headers, customExceptionProcessor, targetServiceName || this.defaultTargetServiceName);
    }
    //#endregion public methods
    //#region  private methods
    resolveApiEndPoint(apiName, queryStringParams) {
        const apiConfig = this.apiConfigService.getApiConfig(apiName);
        return this.buildApiEndPoint(apiConfig, queryStringParams);
    }
    buildApiEndPoint(apiConfig, queryStringParams) {
        let endPoint = apiConfig._endPoint;
        if (queryStringParams && Object.keys(queryStringParams).length > 0)
            endPoint = Sqrl.render(endPoint, queryStringParams, { useWith: true });
        return endPoint;
    }
    getToken(apiConfig) {
        return apiConfig.useUserToken
            ? this.authContext.getJwtToken()
            : apiConfig.token;
    }
    /**
     * Merges headers from apiConfig along with customer Headers.
     * Custom headers entries will override apiConfig entries
     * @param apiConfig
     * @param customHeaders
     * @returns
     */
    mergeHeaders(apiConfigHeaders, customHeaders) {
        if (apiConfigHeaders || customHeaders) {
            return { ...(apiConfigHeaders || {}), ...(customHeaders || {}) };
        }
        return null;
    }
}
exports.ApiProxyService = ApiProxyService;
