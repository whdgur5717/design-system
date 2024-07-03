/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingBlockStartProperties } from '../patterns/padding-block-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingBlockStartProps extends PaddingBlockStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingBlockStartProperties > {}


export declare const PaddingBlockStart: FunctionComponent<PaddingBlockStartProps>