/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundPositionXProperties } from '../patterns/background-position-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundPositionXProps extends BackgroundPositionXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundPositionXProperties > {}


export declare const BackgroundPositionX: FunctionComponent<BackgroundPositionXProps>