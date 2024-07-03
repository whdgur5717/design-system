/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingBlockStartProperties } from '../patterns/scroll-padding-block-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingBlockStartProps extends ScrollPaddingBlockStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingBlockStartProperties > {}


export declare const ScrollPaddingBlockStart: FunctionComponent<ScrollPaddingBlockStartProps>