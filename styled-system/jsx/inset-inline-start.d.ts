/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InsetInlineStartProperties } from '../patterns/inset-inline-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InsetInlineStartProps extends InsetInlineStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InsetInlineStartProperties > {}


export declare const InsetInlineStart: FunctionComponent<InsetInlineStartProps>