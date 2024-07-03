/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderSpacingXProperties } from '../patterns/border-spacing-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderSpacingXProps extends BorderSpacingXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderSpacingXProperties > {}


export declare const BorderSpacingX: FunctionComponent<BorderSpacingXProps>