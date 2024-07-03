/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScaleYProperties } from '../patterns/scale-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScaleYProps extends ScaleYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScaleYProperties > {}


export declare const ScaleY: FunctionComponent<ScaleYProps>