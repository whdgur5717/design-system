/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ColorProperties } from '../patterns/color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ColorProps extends ColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ColorProperties > {}


export declare const Color: FunctionComponent<ColorProps>