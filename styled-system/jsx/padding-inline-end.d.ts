/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingInlineEndProperties } from '../patterns/padding-inline-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingInlineEndProps extends PaddingInlineEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingInlineEndProperties > {}


export declare const PaddingInlineEnd: FunctionComponent<PaddingInlineEndProps>