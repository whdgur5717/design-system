/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BoxSizingProperties } from '../patterns/box-sizing';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BoxSizingProps extends BoxSizingProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxSizingProperties > {}


export declare const BoxSizing: FunctionComponent<BoxSizingProps>