/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DivideColorProperties } from '../patterns/divide-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DivideColorProps extends DivideColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DivideColorProperties > {}


export declare const DivideColor: FunctionComponent<DivideColorProps>