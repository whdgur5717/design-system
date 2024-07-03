/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FontWeightProperties } from '../patterns/font-weight';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FontWeightProps extends FontWeightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FontWeightProperties > {}


export declare const FontWeight: FunctionComponent<FontWeightProps>