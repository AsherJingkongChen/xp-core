export type TupleToIntersection<Tuple extends any[]> = Tuple extends []
  ? never
  : { [I in keyof Tuple]: Unary<Tuple[I]> }[number] extends Unary<infer E>
    ? E
    : never;

export type Unary<A1> = (args: A1) => void;
