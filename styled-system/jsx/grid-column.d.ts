/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridColumnProperties } from '../patterns/grid-column';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridColumnProps extends GridColumnProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridColumnProperties > {}


export declare const GridColumn: FunctionComponent<GridColumnProps>