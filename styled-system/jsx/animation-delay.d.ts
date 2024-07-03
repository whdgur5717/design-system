/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AnimationDelayProperties } from '../patterns/animation-delay';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AnimationDelayProps extends AnimationDelayProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AnimationDelayProperties > {}


export declare const AnimationDelay: FunctionComponent<AnimationDelayProps>