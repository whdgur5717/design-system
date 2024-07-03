/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextUnderlineOffsetProperties } from '../patterns/text-underline-offset';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextUnderlineOffsetProps extends TextUnderlineOffsetProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextUnderlineOffsetProperties > {}


export declare const TextUnderlineOffset: FunctionComponent<TextUnderlineOffsetProps>