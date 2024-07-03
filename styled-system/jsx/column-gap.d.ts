/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ColumnGapProperties } from '../patterns/column-gap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ColumnGapProps extends ColumnGapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ColumnGapProperties > {}


export declare const ColumnGap: FunctionComponent<ColumnGapProps>