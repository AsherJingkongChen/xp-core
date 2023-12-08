import { deepFreeze, MediaType } from '@';

/**
 * PNG - Portable Network Graphics
 * 
 * @link [W3C: PNG](https://www.w3.org/TR/PNG/)
 * @link [IETF: RFC2083](https://datatracker.ietf.org/doc/html/rfc2083)
 */
export const PNG = deepFreeze<MediaType>({
  extensions: ['png'],
  parameters: [],
  subtype: 'png',
  type: 'image',
});
