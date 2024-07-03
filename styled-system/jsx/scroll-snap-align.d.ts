/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapAlignProperties } from '../patterns/scroll-snap-align';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapAlignProps extends ScrollSnapAlignProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapAlignProperties > {}


export declare const ScrollSnapAlign: FunctionComponent<ScrollSnapAlignProps>