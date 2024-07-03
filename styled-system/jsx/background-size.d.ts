/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundSizeProperties } from '../patterns/background-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundSizeProps extends BackgroundSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundSizeProperties > {}


export declare const BackgroundSize: FunctionComponent<BackgroundSizeProps>