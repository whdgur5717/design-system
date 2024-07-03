/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundGradientProperties } from '../patterns/background-gradient';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundGradientProps extends BackgroundGradientProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundGradientProperties > {}


export declare const BackgroundGradient: FunctionComponent<BackgroundGradientProps>