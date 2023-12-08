import { deepFreeze, MediaType } from '@';

export type PDF = typeof PDF;
export const PDF = deepFreeze<MediaType>({
  extensions: ['pdf'],
  parameters: [],
  subtype: 'pdf',
  type: 'application',
  mediaType: () => 'application/pdf',
});
