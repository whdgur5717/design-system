/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AnimationProperties } from '../patterns/animation';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AnimationProps extends AnimationProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AnimationProperties > {}


export declare const Animation: FunctionComponent<AnimationProps>