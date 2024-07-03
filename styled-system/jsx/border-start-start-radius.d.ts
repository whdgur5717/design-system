/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderStartStartRadiusProperties } from '../patterns/border-start-start-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderStartStartRadiusProps extends BorderStartStartRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderStartStartRadiusProperties > {}


export declare const BorderStartStartRadius: FunctionComponent<BorderStartStartRadiusProps>