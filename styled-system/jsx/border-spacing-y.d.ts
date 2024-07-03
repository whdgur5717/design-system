/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderSpacingYProperties } from '../patterns/border-spacing-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderSpacingYProps extends BorderSpacingYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderSpacingYProperties > {}


export declare const BorderSpacingY: FunctionComponent<BorderSpacingYProps>