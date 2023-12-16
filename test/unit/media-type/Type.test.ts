import { describe, expect, it } from 'vitest';
import { isType, Type } from '@';

describe('Type', () => {
  it('has 9 types', () => {
    const { length } = Type;
    expect(length).toBe(9);
  });

  it('knows if a type is available', () => {
    expect(isType('application')).toBe(true);
    expect(isType('audio')).toBe(true);
    expect(isType('example')).toBe(false);
    expect(isType('font')).toBe(true);
    expect(isType('image')).toBe(true);
    expect(isType('message')).toBe(true);
    expect(isType('model')).toBe(true);
    expect(isType('multipart')).toBe(true);
    expect(isType('text')).toBe(true);
    expect(isType('video')).toBe(true);
    expect(isType('unknown')).toBe(false);
    expect(isType('')).toBe(false);
    expect(isType({})).toBe(false);
    expect(isType(0)).toBe(false);
    expect(isType(1)).toBe(false);
    expect(isType(false)).toBe(false);
    expect(isType(true)).toBe(false);
    expect(isType(null)).toBe(false);
    expect(isType(undefined)).toBe(false);
  });
});
