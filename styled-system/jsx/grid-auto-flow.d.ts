/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridAutoFlowProperties } from '../patterns/grid-auto-flow';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridAutoFlowProps extends GridAutoFlowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridAutoFlowProperties > {}


export declare const GridAutoFlow: FunctionComponent<GridAutoFlowProps>