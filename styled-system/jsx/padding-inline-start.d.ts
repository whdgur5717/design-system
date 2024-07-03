/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingInlineStartProperties } from '../patterns/padding-inline-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingInlineStartProps extends PaddingInlineStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingInlineStartProperties > {}


export declare const PaddingInlineStart: FunctionComponent<PaddingInlineStartProps>