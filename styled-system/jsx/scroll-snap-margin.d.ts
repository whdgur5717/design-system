/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapMarginProperties } from '../patterns/scroll-snap-margin';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapMarginProps extends ScrollSnapMarginProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapMarginProperties > {}


export declare const ScrollSnapMargin: FunctionComponent<ScrollSnapMarginProps>