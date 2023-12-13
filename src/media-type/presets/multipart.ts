import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'multipart';

export const multipartPresets: MediaTypeOptions[] = [
  /**
   * Form Data
   *
   * @link [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578#section-8)
   */
  {
    extensions: [],
    parameters: ['boundary'],
    subtype: 'form-data',
    type,
  },
];
