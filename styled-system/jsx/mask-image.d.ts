/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MaskImageProperties } from '../patterns/mask-image';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MaskImageProps extends MaskImageProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MaskImageProperties > {}


export declare const MaskImage: FunctionComponent<MaskImageProps>