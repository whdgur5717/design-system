/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundRepeatProperties } from '../patterns/background-repeat';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundRepeatProps extends BackgroundRepeatProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundRepeatProperties > {}


export declare const BackgroundRepeat: FunctionComponent<BackgroundRepeatProps>