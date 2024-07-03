/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineEndWidthProperties } from '../patterns/border-inline-end-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineEndWidthProps extends BorderInlineEndWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineEndWidthProperties > {}


export declare const BorderInlineEndWidth: FunctionComponent<BorderInlineEndWidthProps>