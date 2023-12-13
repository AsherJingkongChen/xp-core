import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'image';

export const imagePresets: MediaTypeOptions[] = [
  /**
   * JPEG/JFIF - Joint Photographic Experts Group File Interchange Format
   *
   * @link [W3C](https://www.w3.org/Graphics/JPEG/)
   */
  {
    extensions: ['jif', 'jfi', 'jfif', 'jpe', 'jpeg', 'jpg'],
    subtype: 'jpeg',
    type,
  },

  /**
   * PNG - Portable Network Graphics
   *
   * @link [W3C](https://www.w3.org/Graphics/PNG/)
   * @link [RFC 2083](https://datatracker.ietf.org/doc/html/rfc2083#section-8)
   */
  {
    subtype: 'png',
    type,
  },
];
