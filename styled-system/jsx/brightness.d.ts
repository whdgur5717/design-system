/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BrightnessProperties } from '../patterns/brightness';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BrightnessProps extends BrightnessProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BrightnessProperties > {}


export declare const Brightness: FunctionComponent<BrightnessProps>