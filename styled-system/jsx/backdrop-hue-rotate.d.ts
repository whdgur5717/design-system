/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropHueRotateProperties } from '../patterns/backdrop-hue-rotate';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropHueRotateProps extends BackdropHueRotateProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropHueRotateProperties > {}


export declare const BackdropHueRotate: FunctionComponent<BackdropHueRotateProps>