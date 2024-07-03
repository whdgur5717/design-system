/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingProperties } from '../patterns/padding';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingProps extends PaddingProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingProperties > {}


export declare const Padding: FunctionComponent<PaddingProps>