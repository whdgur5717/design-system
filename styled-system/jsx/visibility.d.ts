/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VisibilityProperties } from '../patterns/visibility';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface VisibilityProps extends VisibilityProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof VisibilityProperties > {}


export declare const Visibility: FunctionComponent<VisibilityProps>