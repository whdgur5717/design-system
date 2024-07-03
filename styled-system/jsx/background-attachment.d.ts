/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackgroundAttachmentProperties } from '../patterns/background-attachment';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackgroundAttachmentProps extends BackgroundAttachmentProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackgroundAttachmentProperties > {}


export declare const BackgroundAttachment: FunctionComponent<BackgroundAttachmentProps>