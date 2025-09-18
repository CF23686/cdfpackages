import React from 'react';
import { IActions } from './TileData';
export interface ITileActionBarProps {
    itemId: string;
    actionList?: IActions[];
    overflowTooltip?: string;
    menuSize?: string;
    disabled?: boolean;
    hasThumbnail?: boolean;
}
declare const TileActionBar: React.FC<ITileActionBarProps>;
export default TileActionBar;
