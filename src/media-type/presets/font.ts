import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'font';

export const font = {
  /**
   * WOFF 1.0 - Web Open Font Format 1.0
   *
   * @link [W3C](https://www.w3.org/TR/WOFF/)
   * @link [RFC 8081](https://datatracker.ietf.org/doc/html/rfc8081#section-4.4.5)
   */
  woff: MediaType.register({
    subtype: 'woff',
    type,
  }),
} as const satisfies Record<string, MediaType>;
