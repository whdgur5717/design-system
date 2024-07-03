/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderEndRadiusProperties } from '../patterns/border-end-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderEndRadiusProps extends BorderEndRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderEndRadiusProperties > {}


export declare const BorderEndRadius: FunctionComponent<BorderEndRadiusProps>