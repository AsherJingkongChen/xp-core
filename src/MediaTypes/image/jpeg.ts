import { deepFreeze, MediaType } from '@';

export type JPEG = typeof JPEG;
export const JPEG = deepFreeze<MediaType>({
  extensions: ['jif', 'jfi', 'jfif', 'jpe', 'jpeg', 'jpg'],
  parameters: [],
  subtype: 'jpeg',
  type: 'image',
  mediatype: () => 'image/jpeg',
});
