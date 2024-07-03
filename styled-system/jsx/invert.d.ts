/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InvertProperties } from '../patterns/invert';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InvertProps extends InvertProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InvertProperties > {}


export declare const Invert: FunctionComponent<InvertProps>