/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TransitionProperties } from '../patterns/transition';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TransitionProps extends TransitionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TransitionProperties > {}


export declare const Transition: FunctionComponent<TransitionProps>