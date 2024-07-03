/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollBehaviorProperties } from '../patterns/scroll-behavior';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollBehaviorProps extends ScrollBehaviorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollBehaviorProperties > {}


export declare const ScrollBehavior: FunctionComponent<ScrollBehaviorProps>