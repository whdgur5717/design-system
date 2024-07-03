/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingTopProperties } from '../patterns/scroll-padding-top';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingTopProps extends ScrollPaddingTopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingTopProperties > {}


export declare const ScrollPaddingTop: FunctionComponent<ScrollPaddingTopProps>