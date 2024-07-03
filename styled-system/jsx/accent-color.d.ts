/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AccentColorProperties } from '../patterns/accent-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AccentColorProps extends AccentColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AccentColorProperties > {}


export declare const AccentColor: FunctionComponent<AccentColorProps>