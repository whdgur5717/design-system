/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderEndStartRadiusProperties } from '../patterns/border-end-start-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderEndStartRadiusProps extends BorderEndStartRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderEndStartRadiusProperties > {}


export declare const BorderEndStartRadius: FunctionComponent<BorderEndStartRadiusProps>