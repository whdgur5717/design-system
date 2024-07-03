/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MinHeightProperties } from '../patterns/min-height';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MinHeightProps extends MinHeightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MinHeightProperties > {}


export declare const MinHeight: FunctionComponent<MinHeightProps>