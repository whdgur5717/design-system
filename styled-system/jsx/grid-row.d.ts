/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridRowProperties } from '../patterns/grid-row';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridRowProps extends GridRowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridRowProperties > {}


export declare const GridRow: FunctionComponent<GridRowProps>