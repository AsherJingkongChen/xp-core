export class MediaTypeError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'MediaTypeError';
  }
}
