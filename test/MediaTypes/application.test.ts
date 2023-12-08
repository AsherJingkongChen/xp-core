import { describe, expect, it } from 'bun:test';
import { MediaTypes, JSON } from '@';

describe('JSON/JSON', () => {
  it('The aliases are the same object', () => {
    expect(MediaTypes.Application.JSON).toBe(JSON.JSON);
  });

  it('The schema is correct', () => {
    expect(MediaTypes.Application.JSON.mediatype()).toBe('application/json');
  });
});
