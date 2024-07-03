/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InsetBlockStartProperties } from '../patterns/inset-block-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InsetBlockStartProps extends InsetBlockStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InsetBlockStartProperties > {}


export declare const InsetBlockStart: FunctionComponent<InsetBlockStartProps>