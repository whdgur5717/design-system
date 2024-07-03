/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GrayscaleProperties } from '../patterns/grayscale';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GrayscaleProps extends GrayscaleProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GrayscaleProperties > {}


export declare const Grayscale: FunctionComponent<GrayscaleProps>