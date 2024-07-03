/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineProperties } from '../patterns/border-inline';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineProps extends BorderInlineProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineProperties > {}


export declare const BorderInline: FunctionComponent<BorderInlineProps>