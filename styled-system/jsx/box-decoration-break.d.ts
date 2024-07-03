/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BoxDecorationBreakProperties } from '../patterns/box-decoration-break';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BoxDecorationBreakProps extends BoxDecorationBreakProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxDecorationBreakProperties > {}


export declare const BoxDecorationBreak: FunctionComponent<BoxDecorationBreakProps>