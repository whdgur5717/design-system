/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBlockStartProperties } from '../patterns/border-block-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBlockStartProps extends BorderBlockStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBlockStartProperties > {}


export declare const BorderBlockStart: FunctionComponent<BorderBlockStartProps>