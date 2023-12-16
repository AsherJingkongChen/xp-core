import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'application';

export const application = {
  /**
   * JSON - JavaScript Object Notation
   *
   * @link [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259#section-11)
   */
  json: MediaType.register({
    subtype: 'json',
    type,
  }),

  /**
   * PDF - Portable Document Format
   *
   * @link [RFC 8118](https://datatracker.ietf.org/doc/html/rfc8118#section-8)
   */
  pdf: MediaType.register({
    subtype: 'pdf',
    type,
  }),
} as const satisfies Record<string, MediaType>;
