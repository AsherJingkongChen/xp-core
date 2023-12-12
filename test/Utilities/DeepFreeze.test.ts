import { describe, expect, it } from 'vitest';
import { deepFreeze } from '@';

describe('deepFreeze()', () => {
  it('Freeze the property of an object', () => {
    const obj = deepFreeze({ a: 1 });

    expect(() => {
      (obj as any).a = 2;
    }).toThrow();
    expect(obj.a).toBe(1);
  });

  it('Freeze the second level property of an object', () => {
    const obj = deepFreeze({ a: { a: 1 } });

    expect(() => {
      (obj as any).a.a = 2;
    }).toThrow();
    expect(obj.a.a).toBe(1);
  });
});
