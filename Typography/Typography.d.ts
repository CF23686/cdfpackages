import React from 'react';
import { Components, Theme } from '@mui/material';
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body1bold?: true;
        body1italic?: true;
        body2bold?: true;
        body2italic?: true;
    }
}
declare const Typography: React.FC<import("@mui/system").SystemProps<Theme> & {
    align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").TypographyClasses> | undefined;
    gutterBottom?: boolean | undefined;
    noWrap?: boolean | undefined;
    paragraph?: boolean | undefined;
    sx?: import("@mui/material").SxProps<Theme> | undefined;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | "body1bold" | "body1italic" | "body2bold" | "body2italic" | undefined;
    variantMapping?: Partial<Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | "body1bold" | "body1italic" | "body2bold" | "body2italic", string>> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | ("border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "align" | "children" | "gutterBottom" | "noWrap" | "paragraph" | "sx" | "variant" | "variantMapping"> & {
    component?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
}>;
export declare const getMuiTypographyThemeOverrides: () => Components<Omit<Theme, 'components'>>;
export * from '@mui/material/Typography';
export default Typography;
