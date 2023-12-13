import { MediaTypeOptions, Type } from '@/media-type';

const type: Type = 'model';

export const modelPresets: MediaTypeOptions[] = [
  /**
   * U3D - Universal 3D File Format
   *
   * @link [ECMA 363](https://ecma-international.org/publications-and-standards/standards/ecma-363/)
   * @link [IANA Assignment](https://www.iana.org/assignments/media-types/model/u3d)
   */
  {
    subtype: 'u3d',
    type,
  },
];
