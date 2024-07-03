/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderTopColorProperties } from '../patterns/border-top-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderTopColorProps extends BorderTopColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderTopColorProperties > {}


export declare const BorderTopColor: FunctionComponent<BorderTopColorProps>