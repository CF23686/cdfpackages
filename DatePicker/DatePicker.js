"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* ======================================================================== *
 * Copyright 2024, 2025 HCL America Inc.                                    *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
const react_1 = __importDefault(require("react"));
const DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
const dayjs_1 = __importDefault(require("dayjs"));
const uuid_1 = require("uuid");
const PickersDay_1 = require("@mui/x-date-pickers/PickersDay");
const dot_mark_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/dot-mark"));
const calendar_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/calendar"));
const caret__down_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/caret--down"));
const Badge_1 = __importDefault(require("../Badge/Badge"));
const TextField_1 = __importDefault(require("../TextField"));
const DEFAULT_FORMAT = 'MM/DD/YYYY';
const getDatePickerStyle = (theme, customStyles) => {
    return Object.assign(Object.assign(Object.assign({}, theme.typography.body2), { margin: '6px 0px 0px -8px', padding: '0px', height: 'auto', width: '228px', color: `1px solid ${theme.palette.background.paper}`, boxShadow: theme.shadows[1], '& .MuiCalendarPicker-root': {
            width: '228px',
            margin: '0px',
            height: 'auto',
            flexGrow: 1,
        }, '& .MuiTouchRipple-root': {
            color: 'transparent',
            width: '228px',
        }, '& .MuiPickersCalendarHeader-label': Object.assign({ marginRight: '0px' }, theme.typography.subtitle2), '& .MuiPickersCalendarHeader-root': {
            padding: '24px 13px',
            margin: '4px',
            width: 'auto',
        }, '& .MuiPaper-root-MuiPickersPopper-paper .MuiCalendarPicker-viewTransitionContainer': {
            padding: '0px',
            margin: '0px',
            width: '228px',
        }, '& .MuiPickersArrowSwitcher-spacer': {
            width: '4px',
        }, '& .MuiDayPicker-weekContainer': {
            margin: '0px',
            width: '228px',
        }, '& .MuiDayPicker-weekDayLabel': Object.assign(Object.assign({}, theme.typography.body2), { color: theme.palette.text.secondary, margin: '4px 2px', width: '24px', padding: '0px', height: '16px' }), '& .MuiCalendarPicker-viewTransitionContainer': {
            width: '228px',
        }, '& .MuiDayPicker-header': Object.assign(Object.assign({}, theme.typography.body1), { width: '228px' }), '& .MuiIconButton-root': {
            '& .MuiSvgIcon-root': {
                padding: '0px',
                width: '16px',
                height: '16px',
                border: 'none',
            },
        }, '& .MuiDayPicker-monthContainer': {
            height: 'auto',
            position: 'inherit',
            width: '228px',
        }, '& .PrivatePickersSlideTransition-root MuiDayPicker-slideTransition': {
            position: 'inherit',
            width: '228px',
            margin: '4px 16px',
        }, '& .MuiPickersDay-root': Object.assign(Object.assign({ border: 'none', height: '24px', width: '24px', radius: '64px', margin: '4px 2px' }, theme.typography.body2), { '&.MuiPickersDay-today': {
                border: 'none',
                position: 'relative',
            }, '&.MuiPickersDay-dayOutsideMonth': {
                color: theme.palette.text.disabled,
            }, '&:hover': {
                backgroundColor: theme.palette.action.hover,
            }, '&:focus-visible': {
                backgroundColor: 'transparent',
                border: 'none',
                outline: `1px solid ${theme.palette.action.focus}`,
                outlineOffset: '3px',
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    border: 'none',
                    outline: `1px solid ${theme.palette.action.focus}`,
                    outlineOffset: '3px',
                },
            }, '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.tertiary1,
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                },
                '&:focus-visible': {
                    backgroundColor: theme.palette.primary.main,
                    border: 'none',
                    outline: `1px solid ${theme.palette.action.focus}`,
                    outlineOffset: '3px',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                    },
                },
            } }), '& .MuiDayPicker-slideTransition': {
            height: 'auto',
            minHeight: '140px',
            position: 'inherit',
        }, '& .MuiDialogActions-root': {
            display: '-webkit-box',
            padding: '12px 0px',
            justifyContent: 'center',
        }, '& .MuiPickersArrowSwitcher-button': {
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
            },
        } }), customStyles);
};
const DatePicker = (_a) => {
    var props = __rest(_a, []);
    const { customStyles = {} } = props;
    const popperId = (0, uuid_1.v4)();
    const handleOnKeyDownLeft = (event) => {
        var _a;
        if (event.key === 'ArrowRight') {
            const element = event.target;
            if ((_a = element.nextElementSibling) === null || _a === void 0 ? void 0 : _a.nextElementSibling) {
                element.nextElementSibling.nextElementSibling.focus();
            }
        }
    };
    const handleOnKeyDownRight = (event) => {
        var _a;
        if (event.key === 'ArrowLeft') {
            const element = event.target;
            if ((_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.previousElementSibling) {
                element.previousElementSibling.previousElementSibling.focus();
            }
        }
    };
    const formatValue = (value, format) => {
        return value.format(format);
    };
    const focusDialog = () => {
        window.requestAnimationFrame(() => {
            var _a;
            const dialog = (_a = document.querySelector(`#datepickerPopper-${popperId}`)) !== null && _a !== void 0 ? _a : document.querySelector('.MuiPickersPopper-root');
            if (dialog) {
                const focusableElement = dialog.querySelector('button, [tabindex]:not([tabindex="-1"])');
                if (focusableElement instanceof window.HTMLElement) {
                    focusableElement.focus();
                }
                else if (dialog instanceof window.HTMLElement) {
                    dialog.focus();
                }
            }
        });
    };
    const getTextFieldProps = (muiTextFieldProps) => {
        let error = false;
        if (props.value !== null) {
            const day = props.value;
            if (!Number.isNaN(day.day()) && !Number.isNaN(day.month()) && !Number.isNaN(day.year())) {
                const valid = (0, dayjs_1.default)(day, props.format, true).isValid();
                error = !valid;
            }
        }
        const textFieldProps = Object.assign(Object.assign({}, muiTextFieldProps), { inputRef: muiTextFieldProps.inputRef, label: props.label, helperText: props.helperText, enableHelpHoverEffect: props.enableHelpHoverEffect, helperIconTooltip: props.helperIconTooltip, required: props.required, disabled: props.disabled, margin: props.margin, color: props.color, size: props.size, autoComplete: 'off', error: props.error || error, fullWidth: props.fullWidth, unitLabel: props.unitLabel, hiddenLabel: props.hiddenLabel, nonEdit: props.nonEdit, value: props.value !== null ? `${formatValue(props.value, props.format || DEFAULT_FORMAT)}` : '', actionProps: props.actionProps, InputProps: Object.assign({}, muiTextFieldProps.InputProps), inputProps: Object.assign(Object.assign({}, muiTextFieldProps.inputProps), { placeholder: props.format }) });
        return textFieldProps;
    };
    return (react_1.default.createElement(DatePicker_1.DatePicker, Object.assign({}, props, { reduceAnimations: true, autoFocus: false, onOpen: focusDialog, dayOfWeekFormatter: (day) => { return day; }, PaperProps: {
            sx: (theme) => { return getDatePickerStyle(theme, customStyles); },
        }, PopperProps: {
            placement: 'bottom-start',
            id: `datepickerPopper-${popperId}`,
        }, componentsProps: {
            actionBar: { actions: ['today'] },
            leftArrowButton: { onKeyDown: handleOnKeyDownLeft },
            rightArrowButton: { onKeyDown: handleOnKeyDownRight },
        }, components: {
            OpenPickerIcon: calendar_1.default,
            SwitchViewIcon: caret__down_1.default,
        }, renderInput: (params) => {
            const textFieldProps = getTextFieldProps(params);
            return (react_1.default.createElement(TextField_1.default, Object.assign({}, textFieldProps)));
        }, renderDay: (day, _value, DayComponentProps) => {
            return (react_1.default.createElement(Badge_1.default, { key: day.toString(), overlap: "circular", variant: "standard", color: (DayComponentProps.today && DayComponentProps.selected) ? 'default' : 'primary', badgeContent: DayComponentProps.today ? react_1.default.createElement(dot_mark_1.default, { fontSize: "small" }) : undefined, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }, sx: {
                    '& .MuiBadge-badge': {
                        right: '50%',
                        padding: '1px',
                        width: '4px',
                        height: '1px',
                        borderRadius: 'unset',
                        minWidth: '0px',
                        top: '70%',
                        '& .MuiSvgIcon-root': Object.assign(Object.assign(Object.assign({}, (DayComponentProps.today && DayComponentProps.selected) && {
                            fill: (theme) => { return theme.palette.common.white; },
                            width: '2px',
                            height: '2px',
                        }), !(DayComponentProps.today && DayComponentProps.selected) && {
                            fill: 'none',
                            width: '1px',
                            height: '1px',
                        }), { fontSize: '1px' }),
                    },
                } },
                react_1.default.createElement(PickersDay_1.PickersDay, Object.assign({}, DayComponentProps))));
        } })));
};
DatePicker.defaultProps = {
    margin: 'none',
    color: 'primary',
    size: 'medium',
    label: '',
    helperText: '',
    enableHelpHoverEffect: false,
    helperIconTooltip: '',
    format: DEFAULT_FORMAT,
    unitLabel: '',
    required: false,
    disabled: false,
    fullWidth: false,
    hiddenLabel: false,
    nonEdit: false,
    showDaysOutsideCurrentMonth: true,
    error: false,
};
__exportStar(require("@mui/x-date-pickers/DatePicker"), exports);
exports.default = DatePicker;
