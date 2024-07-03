/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VerticalAlignProperties } from '../patterns/vertical-align';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface VerticalAlignProps extends VerticalAlignProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof VerticalAlignProperties > {}


export declare const VerticalAlign: FunctionComponent<VerticalAlignProps>