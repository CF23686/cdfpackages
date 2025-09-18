import React from 'react';
import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import { Components, Theme } from '@mui/material';
interface ListItemProps extends MuiListItemProps {
    hasBorder?: boolean;
}
export declare const getMuiListItemThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const ListItem: {
    ({ ...props }: ListItemProps): React.JSX.Element;
    defaultProps: {
        hasBorder: boolean;
    };
};
export * from '@mui/material/ListItem';
export default ListItem;
