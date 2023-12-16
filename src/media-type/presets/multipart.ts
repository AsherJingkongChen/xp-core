import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'multipart';

export const multipart = {
  /**
   * Form Data
   *
   * @link [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578#section-8)
   */
  formData: MediaType.register({
    extensions: [],
    parameters: ['boundary'],
    subtype: 'form-data',
    type,
  }),
} as const satisfies Record<string, MediaType>;
