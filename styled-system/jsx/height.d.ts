/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { HeightProperties } from '../patterns/height';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface HeightProps extends HeightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof HeightProperties > {}


export declare const Height: FunctionComponent<HeightProps>