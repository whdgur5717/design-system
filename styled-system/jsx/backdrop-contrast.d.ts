/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropContrastProperties } from '../patterns/backdrop-contrast';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropContrastProps extends BackdropContrastProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropContrastProperties > {}


export declare const BackdropContrast: FunctionComponent<BackdropContrastProps>