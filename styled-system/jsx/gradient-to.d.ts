/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GradientToProperties } from '../patterns/gradient-to';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GradientToProps extends GradientToProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GradientToProperties > {}


export declare const GradientTo: FunctionComponent<GradientToProps>