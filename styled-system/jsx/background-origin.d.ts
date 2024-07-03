/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundOriginProperties } from '../patterns/background-origin';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundOriginProps extends BackgroundOriginProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundOriginProperties > {}


export declare const BackgroundOrigin: FunctionComponent<BackgroundOriginProps>