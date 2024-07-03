/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridColumnGapProperties } from '../patterns/grid-column-gap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridColumnGapProps extends GridColumnGapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridColumnGapProperties > {}


export declare const GridColumnGap: FunctionComponent<GridColumnGapProps>