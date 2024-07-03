/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { RightProperties } from '../patterns/right';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface RightProps extends RightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof RightProperties > {}


export declare const Right: FunctionComponent<RightProps>