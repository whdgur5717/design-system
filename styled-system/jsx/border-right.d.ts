/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderRightProperties } from '../patterns/border-right';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderRightProps extends BorderRightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderRightProperties > {}


export declare const BorderRight: FunctionComponent<BorderRightProps>