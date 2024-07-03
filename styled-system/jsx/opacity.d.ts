/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OpacityProperties } from '../patterns/opacity';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OpacityProps extends OpacityProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OpacityProperties > {}


export declare const Opacity: FunctionComponent<OpacityProps>