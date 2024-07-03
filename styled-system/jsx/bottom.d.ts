/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BottomProperties } from '../patterns/bottom';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BottomProps extends BottomProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BottomProperties > {}


export declare const Bottom: FunctionComponent<BottomProps>