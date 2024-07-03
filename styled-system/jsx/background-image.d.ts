/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundImageProperties } from '../patterns/background-image';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundImageProps extends BackgroundImageProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundImageProperties > {}


export declare const BackgroundImage: FunctionComponent<BackgroundImageProps>