/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingBottomProperties } from '../patterns/padding-bottom';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingBottomProps extends PaddingBottomProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingBottomProperties > {}


export declare const PaddingBottom: FunctionComponent<PaddingBottomProps>