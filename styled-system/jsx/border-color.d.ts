/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderColorProperties } from '../patterns/border-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderColorProps extends BorderColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderColorProperties > {}


export declare const BorderColor: FunctionComponent<BorderColorProps>