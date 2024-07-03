/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginInlineEndProperties } from '../patterns/scroll-margin-inline-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginInlineEndProps extends ScrollMarginInlineEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginInlineEndProperties > {}


export declare const ScrollMarginInlineEnd: FunctionComponent<ScrollMarginInlineEndProps>