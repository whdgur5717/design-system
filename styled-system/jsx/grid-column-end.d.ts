/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridColumnEndProperties } from '../patterns/grid-column-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridColumnEndProps extends GridColumnEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridColumnEndProperties > {}


export declare const GridColumnEnd: FunctionComponent<GridColumnEndProps>