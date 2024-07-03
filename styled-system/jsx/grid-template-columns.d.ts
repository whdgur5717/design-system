/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridTemplateColumnsProperties } from '../patterns/grid-template-columns';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridTemplateColumnsProps extends GridTemplateColumnsProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridTemplateColumnsProperties > {}


export declare const GridTemplateColumns: FunctionComponent<GridTemplateColumnsProps>