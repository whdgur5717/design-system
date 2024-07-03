/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginInlineProperties } from '../patterns/scroll-margin-inline';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginInlineProps extends ScrollMarginInlineProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginInlineProperties > {}


export declare const ScrollMarginInline: FunctionComponent<ScrollMarginInlineProps>