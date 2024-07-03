/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropBlurProperties } from '../patterns/backdrop-blur';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropBlurProps extends BackdropBlurProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropBlurProperties > {}


export declare const BackdropBlur: FunctionComponent<BackdropBlurProps>