/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SepiaProperties } from '../patterns/sepia';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface SepiaProps extends SepiaProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof SepiaProperties > {}


export declare const Sepia: FunctionComponent<SepiaProps>