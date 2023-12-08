import { deepFreeze, MediaType } from '@';

export namespace PNG {
  export type PNG = typeof PNG;
  export const PNG = deepFreeze<MediaType>({
    extensions: ['png'],
    parameters: [],
    subtype: 'png',
    type: 'image',

    mediatype: () => 'image/png',
  });
}
