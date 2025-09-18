import React from 'react';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { Components, Theme } from '@mui/material';
import { ActionProps } from '../prerequisite_components/InputLabelAndAction';
export interface SelectProps extends MuiSelectProps {
    nonEdit?: boolean;
    actionProps?: ActionProps[];
    helperText?: string;
    enableHelpHoverEffect?: boolean;
    helperIconTooltip?: string;
    margin?: 'none' | 'dense';
    color?: 'primary';
    size?: 'medium';
    unitLabel?: string;
    options?: {
        label: string;
    }[];
    hiddenLabel?: boolean;
    value?: string;
}
export declare const getMuiSelectThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const Select: React.FC<SelectProps>;
export * from '@mui/material/Select';
export default Select;
