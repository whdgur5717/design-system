/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginLeftProperties } from '../patterns/margin-left';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginLeftProps extends MarginLeftProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginLeftProperties > {}


export declare const MarginLeft: FunctionComponent<MarginLeftProps>