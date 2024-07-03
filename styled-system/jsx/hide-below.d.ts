/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { HideBelowProperties } from '../patterns/hide-below';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface HideBelowProps extends HideBelowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof HideBelowProperties > {}


export declare const HideBelow: FunctionComponent<HideBelowProps>