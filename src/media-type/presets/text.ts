import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'text';

export const textPresets: MediaTypeOptions[] = [
  /**
   * CSV - Comma-Separated Values
   *
   * @link [RFC 4180](https://datatracker.ietf.org/doc/html/rfc4180#section-3)
   */
  {
    parameters: ['charset', 'header'],
    subtype: 'csv',
    type,
  },
];
