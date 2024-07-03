/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MaskSizeProperties } from '../patterns/mask-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MaskSizeProps extends MaskSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MaskSizeProperties > {}


export declare const MaskSize: FunctionComponent<MaskSizeProps>