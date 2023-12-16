import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'message';

export const message = {
  /**
   * HTTP - Hypertext Transfer Protocol
   *
   * @link [RFC 9112](https://datatracker.ietf.org/doc/html/rfc9112#media.type.message.http)
   */
  http: MediaType.register({
    extensions: [],
    parameters: ['version', 'msgtype'],
    subtype: 'http',
    type,
  }),
} as const satisfies Record<string, MediaType>;
