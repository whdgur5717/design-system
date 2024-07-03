/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { PositionProperties } from '../patterns/position';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface PositionProps extends PositionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof PositionProperties > {}


export declare const Position: FunctionComponent<PositionProps>