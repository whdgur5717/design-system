/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBottomRightRadiusProperties } from '../patterns/border-bottom-right-radius';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBottomRightRadiusProps extends BorderBottomRightRadiusProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBottomRightRadiusProperties > {}


export declare const BorderBottomRightRadius: FunctionComponent<BorderBottomRightRadiusProps>