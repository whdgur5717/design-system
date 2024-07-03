/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { HueRotateProperties } from '../patterns/hue-rotate';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface HueRotateProps extends HueRotateProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof HueRotateProperties > {}


export declare const HueRotate: FunctionComponent<HueRotateProps>