/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BlurProperties } from '../patterns/blur';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BlurProps extends BlurProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BlurProperties > {}


export declare const Blur: FunctionComponent<BlurProps>