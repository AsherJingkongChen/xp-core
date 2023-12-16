import { deepFreeze } from '@/util';
import { MediaTypeError } from './error';
import { isType, Type } from './type';

export type MediaTypeLike = {
  extensions: string[];
  parameters: string[];
  subtype: string;
  type: Type;
};

export type MediaTypeOptions = {
  /**
   * @default [this.subtype]
   */
  extensions?: string[];

  /**
   * @default {}
   */
  parameters?: string[];
  subtype: string;
  type: Type | (string & {});
};

class MediaTypeSealed implements MediaTypeLike {
  public readonly extensions: string[];
  public readonly parameters: string[];
  public readonly subtype: string;
  public readonly type: Type;
  public get mediaType(): string {
    return `${this.type}/${this.subtype}`;
  }
  public toString(): string {
    return this.mediaType;
  }
  public constructor(options: MediaTypeOptions) {
    const { extensions, parameters, subtype, type } = options;
    // See RFC 4735
    if (!subtype || subtype === 'example') {
      throw new MediaTypeError(`unrecognized media subtype: ${subtype}`);
    }
    if (!isType(type)) {
      throw new MediaTypeError(`unrecognized media type: ${type}`);
    }
    this.extensions = extensions ?? [subtype];
    this.parameters = parameters ?? [];
    this.subtype = subtype;
    this.type = type;
  }
}

/**
 * Internet Media Type (MIME Type)
 *
 * @link [RFC 2231](https://datatracker.ietf.org/doc/html/rfc2231)
 * @link [RFC 6838](https://datatracker.ietf.org/doc/html/rfc6838)
 */
export type MediaType = MediaTypeSealed;
export namespace MediaType {
  const registeredTypes = new Map<string, MediaTypeSealed>();

  /**
   * @returns If the media type is already registered, the existing instance is returned.
   */
  export function register(options: MediaTypeOptions): MediaTypeSealed {
    const newMediaType = deepFreeze(new MediaTypeSealed(options));
    const oldMediaType = registeredTypes.get(newMediaType.mediaType);
    if (oldMediaType) {
      return oldMediaType;
    } else {
      registeredTypes.set(newMediaType.mediaType, newMediaType);
      return newMediaType;
    }
  }
  /**
   * @returns If the media type is already registered, return true. Otherwise, return false.
   */
  export function isAvailable(value: MediaTypeLike): boolean {
    return (
      value instanceof MediaTypeSealed &&
      registeredTypes.has(value.mediaType)
    );
  }
}
