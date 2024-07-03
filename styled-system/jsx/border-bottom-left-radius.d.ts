/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBottomLeftRadiusProperties } from '../patterns/border-bottom-left-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBottomLeftRadiusProps extends BorderBottomLeftRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBottomLeftRadiusProperties > {}


export declare const BorderBottomLeftRadius: FunctionComponent<BorderBottomLeftRadiusProps>