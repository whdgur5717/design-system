/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapStopProperties } from '../patterns/scroll-snap-stop';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapStopProps extends ScrollSnapStopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapStopProperties > {}


export declare const ScrollSnapStop: FunctionComponent<ScrollSnapStopProps>