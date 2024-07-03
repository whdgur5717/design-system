/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TextSizeAdjustProperties } from '../patterns/text-size-adjust';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TextSizeAdjustProps extends TextSizeAdjustProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TextSizeAdjustProperties > {}


export declare const TextSizeAdjust: FunctionComponent<TextSizeAdjustProps>