import { JSON, JPEG, PNG } from '@';

/**
 * Internet Media Types (MIME Types)
 *
 * @link [IANA: Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
 */
export type MediaTypes = typeof MediaTypes;
export const MediaTypes = {
  Application: {
    /**
     * JSON - JavaScript Object Notation
     *
     * @link [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259)
     */
    JSON: JSON.JSON,
  },
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
     * @link [RFC 2083](https://datatracker.ietf.org/doc/html/rfc2083)
     */
    PNG: PNG.PNG,
  },
};

export * from './application';
export * from './image';
export * from './types.d';
