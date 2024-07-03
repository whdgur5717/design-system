/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderRightColorProperties } from '../patterns/border-right-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderRightColorProps extends BorderRightColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderRightColorProperties > {}


export declare const BorderRightColor: FunctionComponent<BorderRightColorProps>