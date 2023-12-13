import { describe, expect, it } from 'vitest';
import { MediaType } from '@';

describe('MediaTypeSealed.mediaType', () => {
  it('is an alias of toString()', () => {
    const mediaType = MediaType.register({
      subtype: 'pdf',
      type: 'application',
    });
    expect(mediaType.toString()).toBe('application/pdf');
  });
});
