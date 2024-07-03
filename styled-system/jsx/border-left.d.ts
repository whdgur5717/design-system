/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderLeftProperties } from '../patterns/border-left';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderLeftProps extends BorderLeftProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderLeftProperties > {}


export declare const BorderLeft: FunctionComponent<BorderLeftProps>