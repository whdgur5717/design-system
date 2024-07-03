/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundPositionProperties } from '../patterns/background-position';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundPositionProps extends BackgroundPositionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundPositionProperties > {}


export declare const BackgroundPosition: FunctionComponent<BackgroundPositionProps>