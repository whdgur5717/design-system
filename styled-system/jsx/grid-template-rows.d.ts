/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridTemplateRowsProperties } from '../patterns/grid-template-rows';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridTemplateRowsProps extends GridTemplateRowsProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridTemplateRowsProperties > {}


export declare const GridTemplateRows: FunctionComponent<GridTemplateRowsProps>