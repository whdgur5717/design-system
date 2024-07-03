/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TransitionDurationProperties } from '../patterns/transition-duration';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TransitionDurationProps extends TransitionDurationProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TransitionDurationProperties > {}


export declare const TransitionDuration: FunctionComponent<TransitionDurationProps>