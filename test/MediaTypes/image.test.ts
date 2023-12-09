import { describe, expect, it } from 'bun:test';
import { MediaTypes, PNG, JPEG } from '@';

describe('JPEG/JFIF', () => {
  it('The aliases are the same object', () => {
    expect(MediaTypes.Image.JPEG).toBe(JPEG);
  });

  it('The results of mediatype() are correct', () => {
    expect(MediaTypes.Image.JPEG.mediaType()).toBe('image/jpeg');
  });
});

describe('PNG', () => {
  it('The aliases are the same object', () => {
    expect(MediaTypes.Image.PNG).toBe(PNG);
  });

  it('The results of mediatype() are correct', () => {
    expect(MediaTypes.Image.PNG.mediaType()).toBe('image/png');
  });
});
