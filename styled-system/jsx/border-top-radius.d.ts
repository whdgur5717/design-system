/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderTopRadiusProperties } from '../patterns/border-top-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderTopRadiusProps extends BorderTopRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderTopRadiusProperties > {}


export declare const BorderTopRadius: FunctionComponent<BorderTopRadiusProps>