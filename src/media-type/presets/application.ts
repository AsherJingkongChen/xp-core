import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'application';

export const applicationPresets: MediaTypeOptions[] = [
  /**
   * JSON - JavaScript Object Notation
   *
   * @link [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259#section-11)
   */
  {
    subtype: 'json',
    type,
  },

  /**
   * PDF - Portable Document Format
   *
   * @link [RFC 8118](https://datatracker.ietf.org/doc/html/rfc8118#section-8)
   */
  {
    subtype: 'pdf',
    type,
  },
];
