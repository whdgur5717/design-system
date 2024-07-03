/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundClipProperties } from '../patterns/background-clip';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundClipProps extends BackgroundClipProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundClipProperties > {}


export declare const BackgroundClip: FunctionComponent<BackgroundClipProps>