/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ObjectFitProperties } from '../patterns/object-fit';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ObjectFitProps extends ObjectFitProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ObjectFitProperties > {}


export declare const ObjectFit: FunctionComponent<ObjectFitProps>