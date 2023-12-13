export function deepFreeze<T extends Record<keyof any, any>>(
  value: T,
): Readonly<T> {
  if (value && typeof value === 'object' && !ArrayBuffer.isView(value)) {
    Object.values(Object.freeze(value)).forEach(deepFreeze);
  }
  return value;
}
