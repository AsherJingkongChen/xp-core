import { MediaType, MediaTypes } from '@/MediaTypes';

export const MagicClassifier = {
  accept: [MediaTypes.PNG],

  async classify(file: Partial<File>): Promise<MediaType[]> {
    let candicates: MediaType[] = [];
    if (file.slice === undefined) {
      return [];
    }
    for (const mediaType of this.accept.values()) {
      for (const { offset, buffer } of mediaType.addtions.magic) {
        const slice = file.slice(offset, offset + buffer.length);
        const testBuffer = new Uint8Array(await slice.arrayBuffer());
        if (buffer.length !== testBuffer.length) {
          continue;
        }
        let doContinue = false;
        for (let i = 0; i < buffer.length; i++) {
          if (buffer[i] !== testBuffer[i]) {
            doContinue = true;
            break;
          }
        }
        if (doContinue) {
          continue;
        }
        candicates.push(mediaType);
      }
    }
    return candicates;
  },
};
