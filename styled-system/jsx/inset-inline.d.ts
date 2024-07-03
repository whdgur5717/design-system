/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InsetInlineProperties } from '../patterns/inset-inline';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InsetInlineProps extends InsetInlineProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InsetInlineProperties > {}


export declare const InsetInline: FunctionComponent<InsetInlineProps>