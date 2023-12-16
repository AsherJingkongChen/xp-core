import { describe, expect, it, beforeAll } from 'vitest';
import setup, { MediaType, MediaTypeError } from '@';

beforeAll(() => {
  setup();
});

describe('MediaType', () => {
  it('can not create an instance with new', () => {
    const instance = new (MediaType as any)();
    const { name } = instance.constructor;
    expect(name).toBe('MediaType');
    expect(instance).not.toBeInstanceOf(MediaType);
  });
});

describe('MediaType.register', () => {
  it('disallows an invalid type', () => {
    const truthyFailure = () => {
      MediaType.register({
        subtype: 'unknown',
        type: 'unknown',
      });
    };
    const falsyFailure = () => {
      MediaType.register({
        subtype: 'unknown',
        type: '',
      });
    };
    // See RFC 4735
    const exampleFailure = () => {
      MediaType.register({
        subtype: 'unknown',
        type: 'example',
      });
    };
    expect(truthyFailure).toThrow(MediaTypeError);
    expect(falsyFailure).toThrow(MediaTypeError);
    expect(exampleFailure).toThrow(MediaTypeError);
  });

  it('disallows an invalid subtype', () => {
    const emptyFailure = () => {
      MediaType.register({
        subtype: '',
        type: 'application',
      });
    };
    const carelessNullyFailure = () => {
      MediaType.register({
        subtype: undefined as any,
        type: 'application',
      });
    };
    // See RFC 4735
    const exampleFailure = () => {
      MediaType.register({
        subtype: 'example',
        type: 'application',
      });
    };
    expect(emptyFailure).toThrow(MediaTypeError);
    expect(carelessNullyFailure).toThrow(MediaTypeError);
    expect(exampleFailure).toThrow(MediaTypeError);
  });
});

describe('MediaType.isAvailable', () => {
  it('returns true for a newly registered media type', () => {
    const mediaType = MediaType.register({
      subtype: 'pdf',
      type: 'application',
    });
    expect(MediaType.isAvailable(mediaType)).toBe(true);
  });
});
