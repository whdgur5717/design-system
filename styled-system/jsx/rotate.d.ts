/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { RotateProperties } from '../patterns/rotate';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface RotateProps extends RotateProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof RotateProperties > {}


export declare const Rotate: FunctionComponent<RotateProps>