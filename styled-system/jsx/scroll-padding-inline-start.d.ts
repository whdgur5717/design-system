/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingInlineStartProperties } from '../patterns/scroll-padding-inline-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingInlineStartProps extends ScrollPaddingInlineStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingInlineStartProperties > {}


export declare const ScrollPaddingInlineStart: FunctionComponent<ScrollPaddingInlineStartProps>