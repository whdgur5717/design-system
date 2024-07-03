/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { WordBreakProperties } from '../patterns/word-break';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface WordBreakProps extends WordBreakProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof WordBreakProperties > {}


export declare const WordBreak: FunctionComponent<WordBreakProps>