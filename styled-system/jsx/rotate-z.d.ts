/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { RotateZProperties } from '../patterns/rotate-z';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface RotateZProps extends RotateZProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof RotateZProperties > {}


export declare const RotateZ: FunctionComponent<RotateZProps>