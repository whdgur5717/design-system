/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextTransformProperties } from '../patterns/text-transform';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextTransformProps extends TextTransformProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextTransformProperties > {}


export declare const TextTransform: FunctionComponent<TextTransformProps>