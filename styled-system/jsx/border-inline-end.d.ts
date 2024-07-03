/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineEndProperties } from '../patterns/border-inline-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineEndProps extends BorderInlineEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineEndProperties > {}


export declare const BorderInlineEnd: FunctionComponent<BorderInlineEndProps>