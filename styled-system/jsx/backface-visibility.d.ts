/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackfaceVisibilityProperties } from '../patterns/backface-visibility';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackfaceVisibilityProps extends BackfaceVisibilityProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackfaceVisibilityProperties > {}


export declare const BackfaceVisibility: FunctionComponent<BackfaceVisibilityProps>