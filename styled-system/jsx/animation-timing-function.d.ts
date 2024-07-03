/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AnimationTimingFunctionProperties } from '../patterns/animation-timing-function';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AnimationTimingFunctionProps extends AnimationTimingFunctionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AnimationTimingFunctionProperties > {}


export declare const AnimationTimingFunction: FunctionComponent<AnimationTimingFunctionProps>