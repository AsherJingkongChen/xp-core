export type Type = (typeof Type)[number];
export const Type = [
  'application',
  'audio',
  'font',
  'image',
  'message',
  'model',
  'multipart',
  'text',
  'video',
] as const;

export function isType(value: any): value is Type {
  return Type.includes(value);
}
