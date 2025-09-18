import React from 'react';
import { LocalizationProviderProps as MuiLocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
export declare const SUPPORTED_LOCALE: string[];
export type PickersLocalizationProviderProps = MuiLocalizationProviderProps & {};
declare const PickersLocalizationProvider: {
    ({ ...props }: PickersLocalizationProviderProps): React.JSX.Element;
    defaultProps: {};
};
export * from '@mui/x-date-pickers/LocalizationProvider';
export default PickersLocalizationProvider;
