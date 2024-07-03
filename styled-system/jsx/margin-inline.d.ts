/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginInlineProperties } from '../patterns/margin-inline';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginInlineProps extends MarginInlineProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginInlineProperties > {}


export declare const MarginInline: FunctionComponent<MarginInlineProps>