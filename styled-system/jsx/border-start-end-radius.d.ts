/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderStartEndRadiusProperties } from '../patterns/border-start-end-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderStartEndRadiusProps extends BorderStartEndRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderStartEndRadiusProperties > {}


export declare const BorderStartEndRadius: FunctionComponent<BorderStartEndRadiusProps>