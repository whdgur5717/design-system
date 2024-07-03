/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridGapProperties } from '../patterns/grid-gap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridGapProps extends GridGapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridGapProperties > {}


export declare const GridGap: FunctionComponent<GridGapProps>