/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TransformOriginProperties } from '../patterns/transform-origin';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TransformOriginProps extends TransformOriginProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TransformOriginProperties > {}


export declare const TransformOrigin: FunctionComponent<TransformOriginProps>