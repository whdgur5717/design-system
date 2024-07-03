/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextAlignProperties } from '../patterns/text-align';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextAlignProps extends TextAlignProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextAlignProperties > {}


export declare const TextAlign: FunctionComponent<TextAlignProps>