/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FlexShrinkProperties } from '../patterns/flex-shrink';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FlexShrinkProps extends FlexShrinkProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FlexShrinkProperties > {}


export declare const FlexShrink: FunctionComponent<FlexShrinkProps>