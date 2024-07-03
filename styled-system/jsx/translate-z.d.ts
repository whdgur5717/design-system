/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TranslateZProperties } from '../patterns/translate-z';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TranslateZProps extends TranslateZProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TranslateZProperties > {}


export declare const TranslateZ: FunctionComponent<TranslateZProps>