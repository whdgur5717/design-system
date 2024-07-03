/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginProperties } from '../patterns/margin';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginProps extends MarginProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginProperties > {}


export declare const Margin: FunctionComponent<MarginProps>