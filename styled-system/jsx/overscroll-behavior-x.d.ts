/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OverscrollBehaviorXProperties } from '../patterns/overscroll-behavior-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OverscrollBehaviorXProps extends OverscrollBehaviorXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OverscrollBehaviorXProperties > {}


export declare const OverscrollBehaviorX: FunctionComponent<OverscrollBehaviorXProps>