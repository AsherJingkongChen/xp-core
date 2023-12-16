import { describe, expect, it } from 'vitest';
import { MediaType, MediaTypeError } from '@';

describe('MediaType', () => {
  it('can not register with an invalid type', () => {
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

  it('can not register with an invalid subtype', () => {
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

  it('validates a newly registered media type with .isAvailable()', () => {
    const mediaType = MediaType.register({
      subtype: 'vnd.xp.test',
      type: 'application',
    });
    expect(MediaType.isAvailable(mediaType)).toBe(true);
  });

  it('.mediaType is an alias of toString()', () => {
    const mediaType = MediaType.register({
      subtype: 'pdf',
      type: 'application',
    });
    expect(mediaType.toString()).toBe('application/pdf');
  });
});
