/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBlockStartColorProperties } from '../patterns/border-block-start-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBlockStartColorProps extends BorderBlockStartColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBlockStartColorProperties > {}


export declare const BorderBlockStartColor: FunctionComponent<BorderBlockStartColorProps>