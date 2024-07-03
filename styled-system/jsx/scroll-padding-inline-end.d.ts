/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingInlineEndProperties } from '../patterns/scroll-padding-inline-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingInlineEndProps extends ScrollPaddingInlineEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingInlineEndProperties > {}


export declare const ScrollPaddingInlineEnd: FunctionComponent<ScrollPaddingInlineEndProps>