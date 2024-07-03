/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBottomProperties } from '../patterns/border-bottom';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBottomProps extends BorderBottomProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBottomProperties > {}


export declare const BorderBottom: FunctionComponent<BorderBottomProps>