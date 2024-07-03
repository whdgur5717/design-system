/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OverscrollBehaviorYProperties } from '../patterns/overscroll-behavior-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OverscrollBehaviorYProps extends OverscrollBehaviorYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OverscrollBehaviorYProperties > {}


export declare const OverscrollBehaviorY: FunctionComponent<OverscrollBehaviorYProps>