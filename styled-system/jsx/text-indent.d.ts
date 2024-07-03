/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextIndentProperties } from '../patterns/text-indent';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextIndentProps extends TextIndentProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextIndentProperties > {}


export declare const TextIndent: FunctionComponent<TextIndentProps>