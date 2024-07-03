/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MaxBlockSizeProperties } from '../patterns/max-block-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MaxBlockSizeProps extends MaxBlockSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MaxBlockSizeProperties > {}


export declare const MaxBlockSize: FunctionComponent<MaxBlockSizeProps>