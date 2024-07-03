/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineWidthProperties } from '../patterns/border-inline-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineWidthProps extends BorderInlineWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineWidthProperties > {}


export declare const BorderInlineWidth: FunctionComponent<BorderInlineWidthProps>