/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { LineClampProperties } from '../patterns/line-clamp';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface LineClampProps extends LineClampProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof LineClampProperties > {}


export declare const LineClamp: FunctionComponent<LineClampProps>