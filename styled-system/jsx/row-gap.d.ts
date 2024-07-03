/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { RowGapProperties } from '../patterns/row-gap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface RowGapProps extends RowGapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof RowGapProperties > {}


export declare const RowGap: FunctionComponent<RowGapProps>