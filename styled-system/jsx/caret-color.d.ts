/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { CaretColorProperties } from '../patterns/caret-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CaretColorProps extends CaretColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof CaretColorProperties > {}


export declare const CaretColor: FunctionComponent<CaretColorProps>