import { BusinessConfigService } from "@cdf-packages/config";
import { BaseService } from "@cdf-packages/framework";
import { ApiConfig } from "./types/api.config";
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
export declare class ApiConfigService extends BaseService {
    private readonly businessConfigService;
    readonly configKey: string;
    readonly apiUrls: ApiConfig[];
    constructor(businessConfigService: BusinessConfigService, configKey: string, apiUrls?: ApiConfig[]);
    getApiConfig(apiName?: string): ApiConfig;
}
