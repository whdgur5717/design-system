/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridColumnStartProperties } from '../patterns/grid-column-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridColumnStartProps extends GridColumnStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridColumnStartProperties > {}


export declare const GridColumnStart: FunctionComponent<GridColumnStartProps>