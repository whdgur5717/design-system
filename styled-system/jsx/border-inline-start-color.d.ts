/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderInlineStartColorProperties } from '../patterns/border-inline-start-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderInlineStartColorProps extends BorderInlineStartColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderInlineStartColorProperties > {}


export declare const BorderInlineStartColor: FunctionComponent<BorderInlineStartColorProps>