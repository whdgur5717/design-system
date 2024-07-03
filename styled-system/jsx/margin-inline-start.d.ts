/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginInlineStartProperties } from '../patterns/margin-inline-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginInlineStartProps extends MarginInlineStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginInlineStartProperties > {}


export declare const MarginInlineStart: FunctionComponent<MarginInlineStartProps>