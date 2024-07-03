/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderStartRadiusProperties } from '../patterns/border-start-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderStartRadiusProps extends BorderStartRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderStartRadiusProperties > {}


export declare const BorderStartRadius: FunctionComponent<BorderStartRadiusProps>