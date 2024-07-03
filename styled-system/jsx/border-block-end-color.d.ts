/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBlockEndColorProperties } from '../patterns/border-block-end-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBlockEndColorProps extends BorderBlockEndColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBlockEndColorProperties > {}


export declare const BorderBlockEndColor: FunctionComponent<BorderBlockEndColorProps>