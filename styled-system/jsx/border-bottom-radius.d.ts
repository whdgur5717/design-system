/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBottomRadiusProperties } from '../patterns/border-bottom-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBottomRadiusProps extends BorderBottomRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBottomRadiusProperties > {}


export declare const BorderBottomRadius: FunctionComponent<BorderBottomRadiusProps>