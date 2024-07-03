/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropInvertProperties } from '../patterns/backdrop-invert';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropInvertProps extends BackdropInvertProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropInvertProperties > {}


export declare const BackdropInvert: FunctionComponent<BackdropInvertProps>