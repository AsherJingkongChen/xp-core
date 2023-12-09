import { describe, expect, it } from 'bun:test';
import { MediaTypes, JSON, PDF } from '@';

describe('JSON', () => {
  it('The aliases are the same object', () => {
    expect(MediaTypes.Application.JSON).toBe(JSON);
  });

  it('The results of mediatype() are correct', () => {
    expect(MediaTypes.Application.JSON.mediaType()).toBe('application/json');
  });
});

describe('PDF', () => {
  it('The aliases are the same object', () => {
    expect(MediaTypes.Application.PDF).toBe(PDF);
  });

  it('The results of mediatype() are correct', () => {
    expect(MediaTypes.Application.PDF.mediaType()).toBe('application/pdf');
  });
});
