/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ClipPathProperties } from '../patterns/clip-path';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ClipPathProps extends ClipPathProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ClipPathProperties > {}


export declare const ClipPath: FunctionComponent<ClipPathProps>