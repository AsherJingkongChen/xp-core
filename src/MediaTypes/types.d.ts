export type MediaType<Parameters extends string[] = []> = {
  extensions: string[];
  parameters: Parameters;
  subtype: string;
  type: Type;
  mediatype(parameters?: { [K in Parameters[number]]?: string }): string;
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
