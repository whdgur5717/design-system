/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MinInlineSizeProperties } from '../patterns/min-inline-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MinInlineSizeProps extends MinInlineSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MinInlineSizeProperties > {}


export declare const MinInlineSize: FunctionComponent<MinInlineSizeProps>