/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { StrokeWidthProperties } from '../patterns/stroke-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface StrokeWidthProps extends StrokeWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof StrokeWidthProperties > {}


export declare const StrokeWidth: FunctionComponent<StrokeWidthProps>