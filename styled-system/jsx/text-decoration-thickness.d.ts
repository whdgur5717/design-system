/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextDecorationThicknessProperties } from '../patterns/text-decoration-thickness';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextDecorationThicknessProps extends TextDecorationThicknessProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextDecorationThicknessProperties > {}


export declare const TextDecorationThickness: FunctionComponent<TextDecorationThicknessProps>