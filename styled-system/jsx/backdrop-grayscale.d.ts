/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropGrayscaleProperties } from '../patterns/backdrop-grayscale';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropGrayscaleProps extends BackdropGrayscaleProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropGrayscaleProperties > {}


export declare const BackdropGrayscale: FunctionComponent<BackdropGrayscaleProps>