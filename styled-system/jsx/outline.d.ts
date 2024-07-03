/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OutlineProperties } from '../patterns/outline';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OutlineProps extends OutlineProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OutlineProperties > {}


export declare const Outline: FunctionComponent<OutlineProps>