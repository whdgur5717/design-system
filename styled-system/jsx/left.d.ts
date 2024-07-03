/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { LeftProperties } from '../patterns/left';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface LeftProps extends LeftProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof LeftProperties > {}


export declare const Left: FunctionComponent<LeftProps>