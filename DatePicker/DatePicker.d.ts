import React from 'react';
import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { ActionProps } from '../prerequisite_components/InputLabelAndAction/InputLabelAndAction';
export interface DatePickerProps<TInputDate, TDate> extends Omit<MuiDatePickerProps<TInputDate, TDate>, 'renderInput'> {
    label?: string;
    helperText?: string;
    enableHelpHoverEffect?: boolean;
    helperIconTooltip?: string;
    format?: string;
    margin?: 'none' | 'dense';
    color?: 'primary';
    size?: 'medium';
    unitLabel?: string;
    required?: boolean;
    disabled?: boolean;
    hiddenLabel?: boolean;
    nonEdit?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    actionProps?: ActionProps[];
    customStyles?: React.CSSProperties | {
        [key: string]: React.CSSProperties;
    };
}
declare const DatePicker: {
    <TInputDate, TDate>({ ...props }: DatePickerProps<TInputDate, TDate>): React.JSX.Element;
    defaultProps: {
        margin: string;
        color: string;
        size: string;
        label: string;
        helperText: string;
        enableHelpHoverEffect: boolean;
        helperIconTooltip: string;
        format: string;
        unitLabel: string;
        required: boolean;
        disabled: boolean;
        fullWidth: boolean;
        hiddenLabel: boolean;
        nonEdit: boolean;
        showDaysOutsideCurrentMonth: boolean;
        error: boolean;
    };
};
export * from '@mui/x-date-pickers/DatePicker';
export default DatePicker;
