/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TranslateProperties } from '../patterns/translate';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TranslateProps extends TranslateProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TranslateProperties > {}


export declare const Translate: FunctionComponent<TranslateProps>