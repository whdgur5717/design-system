/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderProperties } from '../patterns/border';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderProps extends BorderProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderProperties > {}


export declare const Border: FunctionComponent<BorderProps>