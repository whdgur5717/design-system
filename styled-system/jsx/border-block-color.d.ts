/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBlockColorProperties } from '../patterns/border-block-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBlockColorProps extends BorderBlockColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBlockColorProperties > {}


export declare const BorderBlockColor: FunctionComponent<BorderBlockColorProps>