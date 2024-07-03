/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { LineHeightProperties } from '../patterns/line-height';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface LineHeightProps extends LineHeightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof LineHeightProperties > {}


export declare const LineHeight: FunctionComponent<LineHeightProps>