/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GradientFromPositionProperties } from '../patterns/gradient-from-position';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GradientFromPositionProps extends GradientFromPositionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GradientFromPositionProperties > {}


export declare const GradientFromPosition: FunctionComponent<GradientFromPositionProps>