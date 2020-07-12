import { OperatorFunction, Subject } from 'rxjs';

export class NgEffect<T, A, B, C, D, E, F, G, H, I> {
  private _subject = new Subject();

  constructor(
    op1?: OperatorFunction<T, A>,
    op2?: OperatorFunction<A, B>,
    op3?: OperatorFunction<B, C>,
    op4?: OperatorFunction<C, D>,
    op5?: OperatorFunction<D, E>,
    op6?: OperatorFunction<E, F>,
    op7?: OperatorFunction<F, G>,
    op8?: OperatorFunction<G, H>,
    op9?: OperatorFunction<H, I>,
    ...operations: OperatorFunction<any, any>[]
  );
  constructor(...operations: OperatorFunction<any, any>[]) {
    // @ts-ignore
    this._subject.pipe(...operations).subscribe();
  }

  next(d?: T) {
    this._subject.next();
  }

  unsubscribe() {
    this._subject.unsubscribe();
  }
}
