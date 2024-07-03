/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingBottomProperties } from '../patterns/scroll-padding-bottom';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingBottomProps extends ScrollPaddingBottomProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingBottomProperties > {}


export declare const ScrollPaddingBottom: FunctionComponent<ScrollPaddingBottomProps>