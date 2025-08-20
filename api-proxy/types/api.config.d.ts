/**
 * API configuration attributes.
 * Created to avoid hardcoding of API configuration in multiple places.
 *
 * Can be used to configure LMS, SMS, CCP api related
 *
 */
export type ApiConfig = {
    apiName?: string;
    relativeUrl?: string;
    token?: string;
    baseUrl?: string;
    apiKey?: string;
    useUserToken?: boolean;
    headers?: Record<string, string>;
    _endPoint?: string;
};
