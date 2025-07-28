import { of, OperatorFunction } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { FetchState } from "./fetch-state.type";

/**
 * RxJS operator that maps an Observable<T> into an Observable<FetchState<T>>.
 *
 * Behavior:
 * - Emits `{ data, error: undefined }` on success
 * - Emits `{ data: undefined, error }` on error
 *
 * This allows easy state-driven UI logic like:
 * - `loading`:  when both `data === undefined` and `error === undefined`
 * - `success`:  when `data !== undefined`
 * - `error`:    when `error !== undefined`
 *
 * @returns OperatorFunction<T, FetchState<T>>
 */
export function toFetchState<T>(): OperatorFunction<T, FetchState<T>> {
  return (source$) =>
    source$.pipe(
      map((data) => {
        return { data, error: undefined };
      }),
      catchError((error) => {
        return of({ data: undefined, error });
      }),
    );
}
