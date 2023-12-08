export type TupleToIntersection<Tuple extends any[]> = Tuple extends []
  ? {}
  : { [I in keyof Tuple]: Unary<Tuple[I]> }[number] extends Unary<infer E>
    ? E
    : {};

export type Unary<A> = (args: A) => void;
