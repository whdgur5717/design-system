/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingTopProperties } from '../patterns/padding-top';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingTopProps extends PaddingTopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingTopProperties > {}


export declare const PaddingTop: FunctionComponent<PaddingTopProps>