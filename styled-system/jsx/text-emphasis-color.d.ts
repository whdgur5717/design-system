/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextEmphasisColorProperties } from '../patterns/text-emphasis-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextEmphasisColorProps extends TextEmphasisColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextEmphasisColorProperties > {}


export declare const TextEmphasisColor: FunctionComponent<TextEmphasisColorProps>