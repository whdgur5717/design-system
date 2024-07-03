/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MaxHeightProperties } from '../patterns/max-height';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MaxHeightProps extends MaxHeightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MaxHeightProperties > {}


export declare const MaxHeight: FunctionComponent<MaxHeightProps>