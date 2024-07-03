/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OverscrollBehaviorProperties } from '../patterns/overscroll-behavior';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OverscrollBehaviorProps extends OverscrollBehaviorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OverscrollBehaviorProperties > {}


export declare const OverscrollBehavior: FunctionComponent<OverscrollBehaviorProps>