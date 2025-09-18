import React, { ReactNode } from 'react';
import { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel';
import { Theme } from '@mui/material';
import { TooltipPlacement } from '../../Tooltip';
export interface ActionProps {
    href?: string;
    label: string;
    endIcon?: boolean;
    handleClick?(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void;
    disabled?: boolean;
    tooltip?: string;
}
export interface InputLabelAndActionProps extends MuiInputLabelProps {
    actionProps?: ActionProps[];
    helperIconTooltip?: string;
    tooltipPlacement?: TooltipPlacement;
    hiddenLabel?: boolean;
    label?: ReactNode | string;
    isFocus?: boolean;
    fullWidth?: boolean;
    enableHelpHoverEffect?: boolean;
}
export declare const labelFocus: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const MuiInputHelpIcon: import("@emotion/styled").StyledComponent<{
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").SvgIconClasses> | undefined;
    color?: "inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
    fontSize?: "small" | "inherit" | "medium" | "large" | undefined;
    htmlColor?: string | undefined;
    inheritViewBox?: boolean | undefined;
    shapeRendering?: string | undefined;
    sx?: import("@mui/material").SxProps<Theme> | undefined;
    titleAccess?: string | undefined;
    viewBox?: string | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | React.RefObject<SVGSVGElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "color" | "fontSize" | "shapeRendering" | "children" | "sx" | "viewBox" | "htmlColor" | "inheritViewBox" | "titleAccess"> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    enableHelpHoverEffect?: boolean | undefined;
}, {}, {}>;
export declare const StyledInputLabel: import("@emotion/styled").StyledComponent<MuiInputLabelProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const MuiGrid: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<Theme> & {
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").GridClasses> | undefined;
    columns?: import("@mui/system").ResponsiveStyleValue<number> | undefined;
    columnSpacing?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridSpacing> | undefined;
    container?: boolean | undefined;
    direction?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridDirection> | undefined;
    item?: boolean | undefined;
    rowSpacing?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridSpacing> | undefined;
    spacing?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridSpacing> | undefined;
    sx?: import("@mui/material").SxProps<Theme> | undefined;
    wrap?: import("@mui/material").GridWrap | undefined;
    zeroMinWidth?: boolean | undefined;
} & import("@mui/material").RegularBreakpoints & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "direction" | "columns" | "container" | ("border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "children" | "sx" | "wrap" | "spacing" | "columnSpacing" | "item" | "rowSpacing" | "zeroMinWidth" | keyof import("@mui/material").RegularBreakpoints> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledSpan: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const InputLabelAndAction: React.FC<InputLabelAndActionProps>;
export default InputLabelAndAction;
