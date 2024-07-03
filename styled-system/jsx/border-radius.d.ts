/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderRadiusProperties } from '../patterns/border-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderRadiusProps extends BorderRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderRadiusProperties > {}


export declare const BorderRadius: FunctionComponent<BorderRadiusProps>