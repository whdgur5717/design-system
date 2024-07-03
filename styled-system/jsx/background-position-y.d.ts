/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundPositionYProperties } from '../patterns/background-position-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundPositionYProps extends BackgroundPositionYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundPositionYProperties > {}


export declare const BackgroundPositionY: FunctionComponent<BackgroundPositionYProps>