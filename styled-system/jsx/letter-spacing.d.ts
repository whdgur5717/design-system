/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { LetterSpacingProperties } from '../patterns/letter-spacing';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface LetterSpacingProps extends LetterSpacingProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof LetterSpacingProperties > {}


export declare const LetterSpacing: FunctionComponent<LetterSpacingProps>