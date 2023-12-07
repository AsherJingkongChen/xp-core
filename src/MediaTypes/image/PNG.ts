import { type MediaType, type Addition } from '@';

export const PNG: MediaType<[Addition.Magic]> = {
  addtions: {
    magic: new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  },
  extensions: ['png'],
  parameters: [],
  subtype: 'png',
  type: 'image',
};
