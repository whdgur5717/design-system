/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineStartWidthProperties } from '../patterns/border-inline-start-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineStartWidthProps extends BorderInlineStartWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineStartWidthProperties > {}


export declare const BorderInlineStartWidth: FunctionComponent<BorderInlineStartWidthProps>