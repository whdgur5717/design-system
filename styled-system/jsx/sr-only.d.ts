/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SrOnlyProperties } from '../patterns/sr-only';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface SrOnlyProps extends SrOnlyProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof SrOnlyProperties > {}


export declare const SrOnly: FunctionComponent<SrOnlyProps>