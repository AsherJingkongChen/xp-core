import { deepFreeze, MediaType } from "@";

/**
 * JPEG - Joint Photographic Experts Group
 * 
 * @link [W3C: JPEG](https://www.w3.org/Graphics/JPEG/)
 * @link [IETF: RFC2046](https://datatracker.ietf.org/doc/html/rfc2046)
 */
export const JPEG = deepFreeze<MediaType>({
  extensions: ['jpg', 'jpeg'],
  parameters: [],
  subtype: 'jpeg',
  type: 'image',
});