/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AnimationNameProperties } from '../patterns/animation-name';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AnimationNameProps extends AnimationNameProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AnimationNameProperties > {}


export declare const AnimationName: FunctionComponent<AnimationNameProps>