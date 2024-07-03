/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GradientFromProperties } from '../patterns/gradient-from';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GradientFromProps extends GradientFromProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GradientFromProperties > {}


export declare const GradientFrom: FunctionComponent<GradientFromProps>