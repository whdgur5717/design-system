/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DropShadowProperties } from '../patterns/drop-shadow';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DropShadowProps extends DropShadowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DropShadowProperties > {}


export declare const DropShadow: FunctionComponent<DropShadowProps>