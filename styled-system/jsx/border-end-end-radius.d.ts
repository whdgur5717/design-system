/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderEndEndRadiusProperties } from '../patterns/border-end-end-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderEndEndRadiusProps extends BorderEndEndRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderEndEndRadiusProperties > {}


export declare const BorderEndEndRadius: FunctionComponent<BorderEndEndRadiusProps>