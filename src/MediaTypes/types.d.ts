import { TupleToIntersection } from '@';

export type MediaType<AdditionTuple extends Record<keyof any, any>[] = []> = {
  addtions: TupleToIntersection<AdditionTuple>;
  extensions: string[];
  parameters: string[];
  subtype: string;
  type: Type;
};

export namespace MediaType {
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
      magic: {
        buffer: Uint8Array;
        offset: number;
      }[];
    };
  }
}
