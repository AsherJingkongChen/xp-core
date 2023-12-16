import { MediaType } from '../media-type';
import { Type } from '../type';

const type: Type = 'model';

export const modelPresets = {
  /**
   * U3D - Universal 3D File Format
   *
   * @link [ECMA 363](https://ecma-international.org/publications-and-standards/standards/ecma-363/)
   * @link [IANA Assignment](https://www.iana.org/assignments/media-types/model/u3d)
   */
  u3d: MediaType.register({
    subtype: 'u3d',
    type,
  }),
} as const satisfies Record<string, MediaType>;
