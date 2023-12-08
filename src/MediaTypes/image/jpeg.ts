import { deepFreeze, MediaType } from '@';

export namespace JPEG {
  export type JFIF = typeof JFIF;
  export const JFIF = deepFreeze<MediaType>({
    extensions: ['jif', 'jfi', 'jfif', 'jpe', 'jpeg', 'jpg'],
    parameters: [],
    subtype: 'jpeg',
    type: 'image',

    mediatype: () => 'image/jpeg',
  });
}
