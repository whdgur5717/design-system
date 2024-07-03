/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderTopProperties } from '../patterns/border-top';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderTopProps extends BorderTopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderTopProperties > {}


export declare const BorderTop: FunctionComponent<BorderTopProps>