/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderSpacingProperties } from '../patterns/border-spacing';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderSpacingProps extends BorderSpacingProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderSpacingProperties > {}


export declare const BorderSpacing: FunctionComponent<BorderSpacingProps>