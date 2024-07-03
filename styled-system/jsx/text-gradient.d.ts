/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextGradientProperties } from '../patterns/text-gradient';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextGradientProps extends TextGradientProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextGradientProperties > {}


export declare const TextGradient: FunctionComponent<TextGradientProps>