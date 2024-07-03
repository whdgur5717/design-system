/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextShadowProperties } from '../patterns/text-shadow';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextShadowProps extends TextShadowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextShadowProperties > {}


export declare const TextShadow: FunctionComponent<TextShadowProps>