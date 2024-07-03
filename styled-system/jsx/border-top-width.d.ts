/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderTopWidthProperties } from '../patterns/border-top-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderTopWidthProps extends BorderTopWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderTopWidthProperties > {}


export declare const BorderTopWidth: FunctionComponent<BorderTopWidthProps>