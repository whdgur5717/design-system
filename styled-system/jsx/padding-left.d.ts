/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingLeftProperties } from '../patterns/padding-left';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingLeftProps extends PaddingLeftProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingLeftProperties > {}


export declare const PaddingLeft: FunctionComponent<PaddingLeftProps>