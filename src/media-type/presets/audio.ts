import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'audio';

export const audioPresets: MediaTypeOptions[] = [
  /**
   * MPEG Audio - Motion Picture Experts Group Audio
   *
   * @link [RFC 3003](https://datatracker.ietf.org/doc/html/rfc3003#section-2)
   */
  {
    extensions: ['mp1', 'mp2', 'mp3'],
    subtype: 'mpeg',
    type,
  },
];
