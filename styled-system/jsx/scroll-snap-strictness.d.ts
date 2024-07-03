/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapStrictnessProperties } from '../patterns/scroll-snap-strictness';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapStrictnessProps extends ScrollSnapStrictnessProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapStrictnessProperties > {}


export declare const ScrollSnapStrictness: FunctionComponent<ScrollSnapStrictnessProps>