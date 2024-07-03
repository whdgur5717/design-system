/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TableLayoutProperties } from '../patterns/table-layout';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TableLayoutProps extends TableLayoutProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TableLayoutProperties > {}


export declare const TableLayout: FunctionComponent<TableLayoutProps>