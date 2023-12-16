import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'image';

export const image = {
  /**
   * JPEG/JFIF - Joint Photographic Experts Group File Interchange Format
   *
   * @link [W3C](https://www.w3.org/Graphics/JPEG/)
   */
  jpeg: MediaType.register({
    extensions: ['jif', 'jfi', 'jfif', 'jpe', 'jpeg', 'jpg'],
    subtype: 'jpeg',
    type,
  }),

  /**
   * PNG - Portable Network Graphics
   *
   * @link [W3C](https://www.w3.org/Graphics/PNG/)
   * @link [RFC 2083](https://datatracker.ietf.org/doc/html/rfc2083#section-8)
   */
  png: MediaType.register({
    subtype: 'png',
    type,
  }),
} as const satisfies Record<string, MediaType>;
