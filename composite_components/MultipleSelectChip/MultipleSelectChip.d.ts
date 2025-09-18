import * as React from 'react';
import { AutocompleteProps } from '../../Autocomplete';
/**
 * Props that will be used for MultipleSelectChip its extension of SelectProps
 *
 * @interface MultipleSelectChipProps
 */
export interface MultipleSelectChipProps<T, Multiple, DisableClearable, FreeSolo> extends AutocompleteProps<T, boolean, boolean, boolean> {
    emptyOptions?: boolean;
}
declare const MultipleSelectChip: {
    <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>({ ...props }: MultipleSelectChipProps<T, Multiple, DisableClearable, FreeSolo>): React.JSX.Element;
    defaultProps: {
        emptyOptions: boolean;
    };
};
export default MultipleSelectChip;
