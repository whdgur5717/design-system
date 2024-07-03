/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginInlineStartProperties } from '../patterns/scroll-margin-inline-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginInlineStartProps extends ScrollMarginInlineStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginInlineStartProperties > {}


export declare const ScrollMarginInlineStart: FunctionComponent<ScrollMarginInlineStartProps>