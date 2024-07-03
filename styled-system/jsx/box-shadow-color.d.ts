/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BoxShadowColorProperties } from '../patterns/box-shadow-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BoxShadowColorProps extends BoxShadowColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxShadowColorProperties > {}


export declare const BoxShadowColor: FunctionComponent<BoxShadowColorProps>