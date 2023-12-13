import { MediaType } from './media-type';
import { presets } from './presets';

export function setupMediaType(): void {
  for (const optionsList of Object.values(presets)) {
    for (const options of optionsList) {
      MediaType.register(options);
    }
  }
}

export * from './error';
export * from './media-type';
export * from './presets';
export * from './type';
