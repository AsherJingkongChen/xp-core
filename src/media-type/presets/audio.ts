import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'audio';

export const audio = {
  /**
   * MPEG Audio - Motion Picture Experts Group Audio
   *
   * @link [RFC 3003](https://datatracker.ietf.org/doc/html/rfc3003#section-2)
   */
  mpeg: MediaType.register({
    extensions: ['mp1', 'mp2', 'mp3'],
    subtype: 'mpeg',
    type,
  }),
 } as const satisfies Record<string, MediaType>;
