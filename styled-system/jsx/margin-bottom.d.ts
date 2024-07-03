/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginBottomProperties } from '../patterns/margin-bottom';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginBottomProps extends MarginBottomProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginBottomProperties > {}


export declare const MarginBottom: FunctionComponent<MarginBottomProps>