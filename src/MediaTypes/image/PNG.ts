import { MediaType, deepFreeze } from '@';

export const PNG = deepFreeze<MediaType<[MediaType.Addition.Magic]>>({
  addtions: {
    magic: [
      {
        buffer: new Uint8Array([
          0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
        ]),
        offset: 0,
      },
    ],
  },
  extensions: ['png'],
  parameters: [],
  subtype: 'png',
  type: 'image',
});
