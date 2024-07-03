/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TranslateYProperties } from '../patterns/translate-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TranslateYProps extends TranslateYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TranslateYProperties > {}


export declare const TranslateY: FunctionComponent<TranslateYProps>