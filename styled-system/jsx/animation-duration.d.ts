/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AnimationDurationProperties } from '../patterns/animation-duration';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AnimationDurationProps extends AnimationDurationProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AnimationDurationProperties > {}


export declare const AnimationDuration: FunctionComponent<AnimationDurationProps>