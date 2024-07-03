/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MaskProperties } from '../patterns/mask';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MaskProps extends MaskProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MaskProperties > {}


export declare const Mask: FunctionComponent<MaskProps>