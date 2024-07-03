/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapTypeProperties } from '../patterns/scroll-snap-type';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapTypeProps extends ScrollSnapTypeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapTypeProperties > {}


export declare const ScrollSnapType: FunctionComponent<ScrollSnapTypeProps>