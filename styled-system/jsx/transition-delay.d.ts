/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TransitionDelayProperties } from '../patterns/transition-delay';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TransitionDelayProps extends TransitionDelayProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TransitionDelayProperties > {}


export declare const TransitionDelay: FunctionComponent<TransitionDelayProps>