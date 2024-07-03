/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginInlineEndProperties } from '../patterns/margin-inline-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginInlineEndProps extends MarginInlineEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginInlineEndProperties > {}


export declare const MarginInlineEnd: FunctionComponent<MarginInlineEndProps>