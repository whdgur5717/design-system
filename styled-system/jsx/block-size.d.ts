/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BlockSizeProperties } from '../patterns/block-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BlockSizeProps extends BlockSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BlockSizeProperties > {}


export declare const BlockSize: FunctionComponent<BlockSizeProps>