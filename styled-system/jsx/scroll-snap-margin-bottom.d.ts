/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapMarginBottomProperties } from '../patterns/scroll-snap-margin-bottom';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapMarginBottomProps extends ScrollSnapMarginBottomProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapMarginBottomProperties > {}


export declare const ScrollSnapMarginBottom: FunctionComponent<ScrollSnapMarginBottomProps>