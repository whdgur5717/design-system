/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderTopRightRadiusProperties } from '../patterns/border-top-right-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderTopRightRadiusProps extends BorderTopRightRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderTopRightRadiusProperties > {}


export declare const BorderTopRightRadius: FunctionComponent<BorderTopRightRadiusProps>