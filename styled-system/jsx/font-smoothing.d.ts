/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FontSmoothingProperties } from '../patterns/font-smoothing';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FontSmoothingProps extends FontSmoothingProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FontSmoothingProperties > {}


export declare const FontSmoothing: FunctionComponent<FontSmoothingProps>