/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapMarginTopProperties } from '../patterns/scroll-snap-margin-top';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapMarginTopProps extends ScrollSnapMarginTopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapMarginTopProperties > {}


export declare const ScrollSnapMarginTop: FunctionComponent<ScrollSnapMarginTopProps>