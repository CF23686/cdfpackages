import React, { ReactNode } from 'react';
import { IActions } from './TileData';
export declare const StyledBox: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: React.ReactNode;
    component?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
    ref?: React.Ref<unknown> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | ("border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "children" | "sx" | "ref" | "component"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export interface TilePropsType {
    activeItem?: string;
    itemId: string;
    title: string;
    subTitle: string;
    avatar?: React.ReactNode;
    imageUrl?: string;
    imageAltName?: string;
    hideAvatarIfImageIsLoaded: boolean;
    itemClickedAction?(event: React.MouseEvent<HTMLElement>, tileItemId: string): void;
    handlePreviewAction?(event: React.MouseEvent<HTMLElement>, tileItemId: string): void;
    handleCheckboxChange?(event: React.ChangeEvent<HTMLInputElement>, tileItemId: string, isChecked: boolean): void;
    tileActions?: IActions[];
    ariaLabel?: string;
    ariaLabelledBy?: string;
    overflowTooltip?: string;
    tileRef?: React.Ref<HTMLLIElement>;
    menuSize?: string;
    hasCheckBox: boolean;
    hasThumbnail?: boolean;
    disabled?: boolean;
    syncIcon?: ReactNode;
    hoverPreviewMenu?: string;
}
export declare enum TileTestIds {
    TILE_PREVIEW = "preview-icon-view"
}
declare const Tile: (props: TilePropsType) => React.JSX.Element;
export default Tile;
