import { type TupleToIntersection } from '@';

export type MediaType<Additions extends Record<string, any>[] = []> = {
  addtions: TupleToIntersection<Additions>;
  extensions: string[];
  parameters: string[];
  subtype: string;
  type: Type;
};

export type Type =
  | 'application'
  | 'audio'
  | 'font'
  | 'example'
  | 'image'
  | 'message'
  | 'model'
  | 'multipart'
  | 'text'
  | 'video';

export namespace Addition {
  export type Magic = {
    magic: Uint8Array;
  };
}
