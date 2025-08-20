import { BusinessConfigService } from "@cdf-packages/config";
import { ApiConfigService } from "./api-config.service";
import { ApiConfig } from "./types/api.config";
/**
 * Generates specific ApiConfigService based on configKey given. The provider is registered under the providerSymbol
 * E.g usage,
 *   ApiConfigServiceProvider.getProvider(
       LMS_API_CONFIG_SERVICE, // Now lms Apis configuration is available in this symbols
       configConstants.lmsApis,
     ),
 *
 */
export declare class ApiConfigServiceProvider {
    static getProvider(providerSymbol: symbol, configKey: string, apiUrls?: ApiConfig[]): {
        provide: symbol;
        useFactory: (businessConfig: BusinessConfigService) => ApiConfigService;
        inject: symbol[];
    };
}
