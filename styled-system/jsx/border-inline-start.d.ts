/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineStartProperties } from '../patterns/border-inline-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineStartProps extends BorderInlineStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineStartProperties > {}


export declare const BorderInlineStart: FunctionComponent<BorderInlineStartProps>