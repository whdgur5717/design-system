/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SaturateProperties } from '../patterns/saturate';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface SaturateProps extends SaturateProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof SaturateProperties > {}


export declare const Saturate: FunctionComponent<SaturateProps>