/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DivideStyleProperties } from '../patterns/divide-style';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DivideStyleProps extends DivideStyleProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DivideStyleProperties > {}


export declare const DivideStyle: FunctionComponent<DivideStyleProps>