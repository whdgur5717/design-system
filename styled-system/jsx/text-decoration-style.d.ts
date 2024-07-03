/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextDecorationStyleProperties } from '../patterns/text-decoration-style';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextDecorationStyleProps extends TextDecorationStyleProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextDecorationStyleProperties > {}


export declare const TextDecorationStyle: FunctionComponent<TextDecorationStyleProps>