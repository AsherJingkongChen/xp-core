import { BunFile, file } from 'bun';
import { describe, expect, it } from 'bun:test';
import { PNG, MagicClassifier } from '../../src';
import { fileURLToPath } from 'url';

function getFile(relativePath: string): BunFile {
  const absolutePath = fileURLToPath(
    new URL(relativePath, import.meta.url),
  );
  const blob = file(absolutePath);
  return blob;
}

describe('png', () => {
  it('The media type can be determined by Bun.File', () => {
    const blob = getFile('../data/vue-logo.png');
    expect(blob.type).toBe(`${PNG.type}/${PNG.subtype}`);
  });

  it('The media type can be determined by magic numbers', async () => {
    const blob = getFile('../data/vue-logo.png');
    const mediaTypes = await MagicClassifier.classify(blob);
    expect(mediaTypes).toContain(PNG);
  });

  it('The media has an invalid magic numbers', async () => {
    const blob = getFile('../data/vue-logo-broken-in-magic.png');
    const mediaTypes = await MagicClassifier.classify(blob);
    expect(mediaTypes).not.toContain(PNG);
  });
});
