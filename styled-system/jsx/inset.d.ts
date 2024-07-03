/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InsetProperties } from '../patterns/inset';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InsetProps extends InsetProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InsetProperties > {}


export declare const Inset: FunctionComponent<InsetProps>