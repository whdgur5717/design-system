/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { RotateYProperties } from '../patterns/rotate-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface RotateYProps extends RotateYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof RotateYProperties > {}


export declare const RotateY: FunctionComponent<RotateYProps>