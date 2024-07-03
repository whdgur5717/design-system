/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TranslateXProperties } from '../patterns/translate-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TranslateXProps extends TranslateXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TranslateXProperties > {}


export declare const TranslateX: FunctionComponent<TranslateXProps>