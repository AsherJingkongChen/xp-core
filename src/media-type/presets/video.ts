import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'video';

export const video = {
  /**
   * MP4 - MPEG-4 Video File Format
   *
   * @link [RFC 4337](https://datatracker.ietf.org/doc/html/rfc4337#section-3.1)
   */
  mp4: MediaType.register({
    extensions: ['m4v', 'mp4', 'mpg4'],
    subtype: 'mp4',
    type,
  }),
} as const satisfies Record<string, MediaType>;
