/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingBlockProperties } from '../patterns/padding-block';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingBlockProps extends PaddingBlockProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingBlockProperties > {}


export declare const PaddingBlock: FunctionComponent<PaddingBlockProps>