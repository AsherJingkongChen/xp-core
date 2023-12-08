import { describe, expect, it } from 'bun:test';
import { MediaTypes, PNG, JPEG } from '@';

describe('JPEG/JFIF', () => {
  it('The aliases are the same object', () => {
    expect(MediaTypes.Image.JPEG).toBe(JPEG.JFIF);
  });

  it('The schema is correct', () => {
    expect(MediaTypes.Image.JPEG.mediatype()).toBe('image/jpeg');
  });
});

describe('PNG', () => {
  it('The aliases are the same object', () => {
    expect(MediaTypes.Image.PNG).toBe(PNG.PNG);
  });

  it('The result of mediatype() is correct', () => {
    expect(MediaTypes.Image.PNG.mediatype()).toBe('image/png');
  });
});
