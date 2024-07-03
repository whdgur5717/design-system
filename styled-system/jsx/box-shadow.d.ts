/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BoxShadowProperties } from '../patterns/box-shadow';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BoxShadowProps extends BoxShadowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxShadowProperties > {}


export declare const BoxShadow: FunctionComponent<BoxShadowProps>