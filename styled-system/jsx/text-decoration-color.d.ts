/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextDecorationColorProperties } from '../patterns/text-decoration-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextDecorationColorProps extends TextDecorationColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextDecorationColorProperties > {}


export declare const TextDecorationColor: FunctionComponent<TextDecorationColorProps>