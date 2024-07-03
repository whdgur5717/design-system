/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextShadowColorProperties } from '../patterns/text-shadow-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextShadowColorProps extends TextShadowColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextShadowColorProperties > {}


export declare const TextShadowColor: FunctionComponent<TextShadowColorProps>