/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderWidthProperties } from '../patterns/border-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderWidthProps extends BorderWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderWidthProperties > {}


export declare const BorderWidth: FunctionComponent<BorderWidthProps>