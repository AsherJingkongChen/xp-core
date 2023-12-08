import { JPEG, JSON, PDF, PNG } from '@';

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
    JSON,

    /**
     * PDF - Portable Document Format
     *
     * @link [RFC 8118](https://datatracker.ietf.org/doc/html/rfc8118)
     */
    PDF,
  },
  Image: {
    /**
     * JPEG/JFIF - Joint Photographic Experts Group File Interchange Format
     *
     * @link [W3C: JPEG](https://www.w3.org/Graphics/JPEG/)
     */
    JPEG,

    /**
     * PNG - Portable Network Graphics
     *
     * @link [W3C: PNG](https://www.w3.org/TR/PNG/)
     * @link [RFC 2083](https://datatracker.ietf.org/doc/html/rfc2083)
     */
    PNG,
  },
};

export * from './application';
export * from './image';
export * from './types.d';
