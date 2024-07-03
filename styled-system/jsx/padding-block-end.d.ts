/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingBlockEndProperties } from '../patterns/padding-block-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingBlockEndProps extends PaddingBlockEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingBlockEndProperties > {}


export declare const PaddingBlockEnd: FunctionComponent<PaddingBlockEndProps>