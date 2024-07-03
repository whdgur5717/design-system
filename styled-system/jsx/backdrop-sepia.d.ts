/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropSepiaProperties } from '../patterns/backdrop-sepia';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropSepiaProps extends BackdropSepiaProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropSepiaProperties > {}


export declare const BackdropSepia: FunctionComponent<BackdropSepiaProps>