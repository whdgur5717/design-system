/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GradientViaPositionProperties } from '../patterns/gradient-via-position';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GradientViaPositionProps extends GradientViaPositionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GradientViaPositionProperties > {}


export declare const GradientViaPosition: FunctionComponent<GradientViaPositionProps>