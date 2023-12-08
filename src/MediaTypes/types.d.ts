import { TupleToIntersection } from '@';

export type MediaType = {
  extensions: string[];
  parameters: string[];
  subtype: string;
  type: Type;

  mediatype(parameters?: Record<keyof any, any>): string;
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
