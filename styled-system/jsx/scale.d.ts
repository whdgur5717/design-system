/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScaleProperties } from '../patterns/scale';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScaleProps extends ScaleProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScaleProperties > {}


export declare const Scale: FunctionComponent<ScaleProps>