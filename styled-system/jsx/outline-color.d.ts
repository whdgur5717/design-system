/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OutlineColorProperties } from '../patterns/outline-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OutlineColorProps extends OutlineColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OutlineColorProperties > {}


export declare const OutlineColor: FunctionComponent<OutlineColorProps>