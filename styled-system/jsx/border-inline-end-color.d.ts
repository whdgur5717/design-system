/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineEndColorProperties } from '../patterns/border-inline-end-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineEndColorProps extends BorderInlineEndColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineEndColorProperties > {}


export declare const BorderInlineEndColor: FunctionComponent<BorderInlineEndColorProps>