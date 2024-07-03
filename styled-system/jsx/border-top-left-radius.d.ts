/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderTopLeftRadiusProperties } from '../patterns/border-top-left-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderTopLeftRadiusProps extends BorderTopLeftRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderTopLeftRadiusProperties > {}


export declare const BorderTopLeftRadius: FunctionComponent<BorderTopLeftRadiusProps>