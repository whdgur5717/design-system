/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderLeftRadiusProperties } from '../patterns/border-left-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderLeftRadiusProps extends BorderLeftRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderLeftRadiusProperties > {}


export declare const BorderLeftRadius: FunctionComponent<BorderLeftRadiusProps>