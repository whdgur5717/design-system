/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderLeftColorProperties } from '../patterns/border-left-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderLeftColorProps extends BorderLeftColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderLeftColorProperties > {}


export declare const BorderLeftColor: FunctionComponent<BorderLeftColorProps>