/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FontVariantNumericProperties } from '../patterns/font-variant-numeric';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FontVariantNumericProps extends FontVariantNumericProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FontVariantNumericProperties > {}


export declare const FontVariantNumeric: FunctionComponent<FontVariantNumericProps>