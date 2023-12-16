import { describe, expect, it } from 'vitest';
import { MediaTypeError } from '@';

describe('MediaTypeError', () => {
  it('is a subclass of Error', () => {
    const inherits = MediaTypeError.prototype instanceof Error;
    const identical = MediaTypeError === Error;
    expect(inherits || identical).toBe(true);
  });

  it('has correct name', () => {
    const { name } = new MediaTypeError('test');
    expect(name).toBe('MediaTypeError');
  });
});
