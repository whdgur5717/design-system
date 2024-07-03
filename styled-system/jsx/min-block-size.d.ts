/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MinBlockSizeProperties } from '../patterns/min-block-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MinBlockSizeProps extends MinBlockSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MinBlockSizeProperties > {}


export declare const MinBlockSize: FunctionComponent<MinBlockSizeProps>