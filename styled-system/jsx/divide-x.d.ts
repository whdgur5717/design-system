/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DivideXProperties } from '../patterns/divide-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DivideXProps extends DivideXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DivideXProperties > {}


export declare const DivideX: FunctionComponent<DivideXProps>