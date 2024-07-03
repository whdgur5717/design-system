/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginLeftProperties } from '../patterns/scroll-margin-left';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginLeftProps extends ScrollMarginLeftProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginLeftProperties > {}


export declare const ScrollMarginLeft: FunctionComponent<ScrollMarginLeftProps>