import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'text';

export const text = {
  /**
   * CSV - Comma-Separated Values
   *
   * @link [RFC 4180](https://datatracker.ietf.org/doc/html/rfc4180#section-3)
   */
  csv: MediaType.register({
    parameters: ['charset', 'header'],
    subtype: 'csv',
    type,
  }),
} as const satisfies Record<string, MediaType>;
