/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundColorProperties } from '../patterns/background-color';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundColorProps extends BackgroundColorProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundColorProperties > {}


export declare const BackgroundColor: FunctionComponent<BackgroundColorProps>