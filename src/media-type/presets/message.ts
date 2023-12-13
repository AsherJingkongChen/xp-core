import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'message';

export const messagePresets: MediaTypeOptions[] = [
  /**
   * HTTP - Hypertext Transfer Protocol
   *
   * @link [RFC 9112](https://datatracker.ietf.org/doc/html/rfc9112#media.type.message.http)
   */
  {
    extensions: [],
    parameters: ['version', 'msgtype'],
    subtype: 'http',
    type,
  },
];
