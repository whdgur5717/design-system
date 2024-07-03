/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineColorProperties } from '../patterns/border-inline-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineColorProps extends BorderInlineColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineColorProperties > {}


export declare const BorderInlineColor: FunctionComponent<BorderInlineColorProps>