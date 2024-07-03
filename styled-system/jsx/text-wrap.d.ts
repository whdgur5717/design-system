/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextWrapProperties } from '../patterns/text-wrap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextWrapProps extends TextWrapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextWrapProperties > {}


export declare const TextWrap: FunctionComponent<TextWrapProps>