/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderRightRadiusProperties } from '../patterns/border-right-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderRightRadiusProps extends BorderRightRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderRightRadiusProperties > {}


export declare const BorderRightRadius: FunctionComponent<BorderRightRadiusProps>