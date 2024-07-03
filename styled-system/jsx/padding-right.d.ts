/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PaddingRightProperties } from '../patterns/padding-right';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PaddingRightProps extends PaddingRightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PaddingRightProperties > {}


export declare const PaddingRight: FunctionComponent<PaddingRightProps>