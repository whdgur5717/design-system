/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GradientToPositionProperties } from '../patterns/gradient-to-position';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GradientToPositionProps extends GradientToPositionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GradientToPositionProperties > {}


export declare const GradientToPosition: FunctionComponent<GradientToPositionProps>