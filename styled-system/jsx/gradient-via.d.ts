/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GradientViaProperties } from '../patterns/gradient-via';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GradientViaProps extends GradientViaProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GradientViaProperties > {}


export declare const GradientVia: FunctionComponent<GradientViaProps>