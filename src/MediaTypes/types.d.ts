import { TupleToIntersection } from '@';

export type MediaType = {
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
}
