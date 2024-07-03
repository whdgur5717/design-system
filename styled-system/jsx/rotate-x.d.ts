/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { RotateXProperties } from '../patterns/rotate-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface RotateXProps extends RotateXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof RotateXProperties > {}


export declare const RotateX: FunctionComponent<RotateXProps>