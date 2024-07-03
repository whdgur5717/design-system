/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropBrightnessProperties } from '../patterns/backdrop-brightness';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropBrightnessProps extends BackdropBrightnessProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropBrightnessProperties > {}


export declare const BackdropBrightness: FunctionComponent<BackdropBrightnessProps>