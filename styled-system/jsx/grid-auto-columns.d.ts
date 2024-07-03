/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridAutoColumnsProperties } from '../patterns/grid-auto-columns';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridAutoColumnsProps extends GridAutoColumnsProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridAutoColumnsProperties > {}


export declare const GridAutoColumns: FunctionComponent<GridAutoColumnsProps>