/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InsetBlockEndProperties } from '../patterns/inset-block-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InsetBlockEndProps extends InsetBlockEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InsetBlockEndProperties > {}


export declare const InsetBlockEnd: FunctionComponent<InsetBlockEndProps>