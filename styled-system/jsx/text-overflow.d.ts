/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextOverflowProperties } from '../patterns/text-overflow';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextOverflowProps extends TextOverflowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextOverflowProperties > {}


export declare const TextOverflow: FunctionComponent<TextOverflowProps>