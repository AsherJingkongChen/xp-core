import { JPEG, PNG } from '@';

/**
 * Internet Media Types (MIME Types)
 *
 * @link [IANA: Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
 */
export type MediaTypes = typeof MediaTypes;
export const MediaTypes = {
  Image: {
    /**
     * JPEG/JFIF - Joint Photographic Experts Group File Interchange Format
     *
     * @link [W3C: JPEG](https://www.w3.org/Graphics/JPEG/)
     */
    JPEG: JPEG.JFIF,

    /**
     * PNG - Portable Network Graphics
     *
     * @link [W3C: PNG](https://www.w3.org/TR/PNG/)
     */
    PNG: PNG.PNG,
  },
};

export * from './image';
export * from './types.d';
