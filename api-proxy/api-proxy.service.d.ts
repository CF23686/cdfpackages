import { BaseService, HttpHandlers } from "@cdf-packages/framework";
import { ApiConfigService } from ".";
import { AuthContext } from "@cdf-packages/auth";
/**
 * General Purpose Api Proxy Service
 * Retrieves configuration from ApiConfigService
 * Handles determining end point, token and publishes data.
 *
 */
export declare class ApiProxyService extends BaseService {
    private readonly apiConfigService;
    private readonly httpHandler;
    private readonly authContext;
    private readonly defaultTargetServiceName?;
    constructor(apiConfigService: ApiConfigService, httpHandler: HttpHandlers, authContext: AuthContext, defaultTargetServiceName?: string);
    /**
     * Posts data to LMS
     * @async
     * @param apiName logical API name - e.g receiptPush. This gets translated to actual LMS API Url
     * @param data
     * @returns
     */
    postData<TResponse extends object = object>(apiName: string, data: object, queryStringParams?: object, customHeaders?: {
        [key: string]: string;
    }, customExceptionProcessor?: (e: unknown) => void, targetServiceName?: string): Promise<TResponse>;
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
    getData<TResponse extends object = object>(apiName: string, queryStringParams?: object, customHeaders?: Record<string, string>, customExceptionProcessor?: (e: unknown) => void, targetServiceName?: string): Promise<TResponse>;
    /**
     * Posts data to LMS
     * @async
     * @param apiName logical API name - e.g receiptPush. This gets translated to actual LMS API Url
     * @param data
     * @returns
     */
    putData<TResponse extends object = object>(apiName: string, data: object, queryStringParams?: object, customHeaders?: Record<string, string>, customExceptionProcessor?: (e: unknown) => void, targetServiceName?: string): Promise<TResponse>;
    resolveApiEndPoint(apiName: string, queryStringParams?: {
        [key: string]: number | string | boolean;
    } | object): string;
    private buildApiEndPoint;
    private getToken;
    /**
     * Merges headers from apiConfig along with customer Headers.
     * Custom headers entries will override apiConfig entries
     * @param apiConfig
     * @param customHeaders
     * @returns
     */
    mergeHeaders(apiConfigHeaders: Record<string, string>, customHeaders?: Record<string, string>): Record<string, string>;
}
