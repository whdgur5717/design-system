/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderRightWidthProperties } from '../patterns/border-right-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderRightWidthProps extends BorderRightWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderRightWidthProperties > {}


export declare const BorderRightWidth: FunctionComponent<BorderRightWidthProps>