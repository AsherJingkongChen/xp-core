import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'video';

export const videoPresets: MediaTypeOptions[] = [
  /**
   * MP4 - MPEG-4 Video File Format
   *
   * @link [RFC 4337](https://datatracker.ietf.org/doc/html/rfc4337#section-3.1)
   */
  {
    extensions: ['m4v', 'mp4', 'mpg4'],
    subtype: 'mp4',
    type,
  },
];
