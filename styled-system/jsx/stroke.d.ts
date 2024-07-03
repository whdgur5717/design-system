/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { StrokeProperties } from '../patterns/stroke';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface StrokeProps extends StrokeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof StrokeProperties > {}


export declare const Stroke: FunctionComponent<StrokeProps>