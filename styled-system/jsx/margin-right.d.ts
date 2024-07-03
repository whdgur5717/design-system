/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginRightProperties } from '../patterns/margin-right';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginRightProps extends MarginRightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginRightProperties > {}


export declare const MarginRight: FunctionComponent<MarginRightProps>