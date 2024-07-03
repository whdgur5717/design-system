/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridRowGapProperties } from '../patterns/grid-row-gap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridRowGapProps extends GridRowGapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridRowGapProperties > {}


export declare const GridRowGap: FunctionComponent<GridRowGapProps>