/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingInlineProperties } from '../patterns/scroll-padding-inline';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingInlineProps extends ScrollPaddingInlineProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingInlineProperties > {}


export declare const ScrollPaddingInline: FunctionComponent<ScrollPaddingInlineProps>