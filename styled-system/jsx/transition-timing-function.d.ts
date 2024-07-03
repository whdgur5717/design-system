/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TransitionTimingFunctionProperties } from '../patterns/transition-timing-function';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TransitionTimingFunctionProps extends TransitionTimingFunctionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TransitionTimingFunctionProperties > {}


export declare const TransitionTimingFunction: FunctionComponent<TransitionTimingFunctionProps>