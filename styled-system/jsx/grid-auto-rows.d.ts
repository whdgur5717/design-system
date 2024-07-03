/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridAutoRowsProperties } from '../patterns/grid-auto-rows';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridAutoRowsProps extends GridAutoRowsProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridAutoRowsProperties > {}


export declare const GridAutoRows: FunctionComponent<GridAutoRowsProps>