/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBottomColorProperties } from '../patterns/border-bottom-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBottomColorProps extends BorderBottomColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBottomColorProperties > {}


export declare const BorderBottomColor: FunctionComponent<BorderBottomColorProps>