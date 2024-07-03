/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingInlineProperties } from '../patterns/padding-inline';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingInlineProps extends PaddingInlineProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingInlineProperties > {}


export declare const PaddingInline: FunctionComponent<PaddingInlineProps>