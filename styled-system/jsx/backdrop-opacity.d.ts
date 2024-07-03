/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropOpacityProperties } from '../patterns/backdrop-opacity';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropOpacityProps extends BackdropOpacityProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropOpacityProperties > {}


export declare const BackdropOpacity: FunctionComponent<BackdropOpacityProps>