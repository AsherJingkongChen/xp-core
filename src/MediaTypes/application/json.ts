import { deepFreeze, MediaType } from '@';

export namespace JSON {
  export type JSON = typeof JSON;
  export const JSON = deepFreeze<MediaType>({
    extensions: ['json'],
    parameters: [],
    subtype: 'json',
    type: 'application',

    mediatype: () => 'application/json',
  });
}
