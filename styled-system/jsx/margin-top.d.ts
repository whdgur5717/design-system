/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginTopProperties } from '../patterns/margin-top';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginTopProps extends MarginTopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginTopProperties > {}


export declare const MarginTop: FunctionComponent<MarginTopProps>