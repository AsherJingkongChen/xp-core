import { MediaTypeOptions, Type } from '@/media-type';
import { applicationPresets } from './application';
import { audioPresets } from './audio';
import { fontPresets } from './font';
import { imagePresets } from './image';
import { messagePresets } from './message';
import { modelPresets } from './model';
import { multipartPresets } from './multipart';
import { textPresets } from './text';
import { videoPresets } from './video';

export const presets: Record<Type, MediaTypeOptions[]> = {
  application: applicationPresets,
  audio: audioPresets,
  font: fontPresets,
  image: imagePresets,
  message: messagePresets,
  model: modelPresets,
  multipart: multipartPresets,
  text: textPresets,
  video: videoPresets,
};

export default presets;
