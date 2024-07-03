/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextDecorationProperties } from '../patterns/text-decoration';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextDecorationProps extends TextDecorationProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextDecorationProperties > {}


export declare const TextDecoration: FunctionComponent<TextDecorationProps>