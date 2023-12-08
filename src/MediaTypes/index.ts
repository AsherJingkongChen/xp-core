import { PNG } from '@';

/**
 * **Internet Media Types (MIME Types)**
 * @link [link](https://www.iana.org/assignments/media-types/media-types.xhtml)
 */
export type MediaTypes = (typeof MediaTypes)[keyof typeof MediaTypes];

/**
 * **Internet Media Types (MIME Types)**
 * @link [link](https://www.iana.org/assignments/media-types/media-types.xhtml)
 */
export const MediaTypes = {
  PNG,
};

export * from './image';
export * from './types.d';
