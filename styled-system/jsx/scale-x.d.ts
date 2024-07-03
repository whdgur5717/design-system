/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScaleXProperties } from '../patterns/scale-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScaleXProps extends ScaleXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScaleXProperties > {}


export declare const ScaleX: FunctionComponent<ScaleXProps>