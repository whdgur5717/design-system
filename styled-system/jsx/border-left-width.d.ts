/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderLeftWidthProperties } from '../patterns/border-left-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderLeftWidthProps extends BorderLeftWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderLeftWidthProperties > {}


export declare const BorderLeftWidth: FunctionComponent<BorderLeftWidthProps>