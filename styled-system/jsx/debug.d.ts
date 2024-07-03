/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DebugProperties } from '../patterns/debug';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DebugProps extends DebugProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DebugProperties > {}


export declare const Debug: FunctionComponent<DebugProps>