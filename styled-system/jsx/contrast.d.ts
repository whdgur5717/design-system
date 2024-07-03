/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ContrastProperties } from '../patterns/contrast';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ContrastProps extends ContrastProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ContrastProperties > {}


export declare const Contrast: FunctionComponent<ContrastProps>