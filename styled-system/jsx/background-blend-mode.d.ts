/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundBlendModeProperties } from '../patterns/background-blend-mode';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundBlendModeProps extends BackgroundBlendModeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundBlendModeProperties > {}


export declare const BackgroundBlendMode: FunctionComponent<BackgroundBlendModeProps>