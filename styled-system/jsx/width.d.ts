/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { WidthProperties } from '../patterns/width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface WidthProps extends WidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof WidthProperties > {}


export declare const Width: FunctionComponent<WidthProps>