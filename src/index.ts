import { setupMediaType } from './media-type';

export function setup(): void {
  setupMediaType();
}

export * from './media-type';
export * from './util';
export default setup;
