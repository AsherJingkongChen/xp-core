import { deepFreeze, MediaType } from '@';

export type JSON = typeof JSON;
export const JSON = deepFreeze<MediaType>({
  extensions: ['json'],
  parameters: [],
  subtype: 'json',
  type: 'application',
  mediaType: () => 'application/json',
});

