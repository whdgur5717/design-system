/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FontFamilyProperties } from '../patterns/font-family';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FontFamilyProps extends FontFamilyProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FontFamilyProperties > {}


export declare const FontFamily: FunctionComponent<FontFamilyProps>