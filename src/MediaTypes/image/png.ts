import { deepFreeze, MediaType } from '@';

export type PNG = typeof PNG;
export const PNG = deepFreeze<MediaType>({
  extensions: ['png'],
  parameters: [],
  subtype: 'png',
  type: 'image',
  mediaType: () => 'image/png',
});
