/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapMarginLeftProperties } from '../patterns/scroll-snap-margin-left';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapMarginLeftProps extends ScrollSnapMarginLeftProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapMarginLeftProperties > {}


export declare const ScrollSnapMarginLeft: FunctionComponent<ScrollSnapMarginLeftProps>