import { Observable, of, throwError, timer } from 'rxjs';
import { delayWhen, retryWhen, switchMap, tap } from 'rxjs/operators';

/**
 * Кастомный pipe оператор, который перезапускает запрос с определенной задержкой
 * указанное колиичество раз. На каждую попытку вызывает коллбек, передает ему текущий номер попытки.
 * Выбрасывает ошибку при достижении последней попытки
 */
export function delayRetry(
  cb: (attempt?: number) => void,
  delayMs = 2000,
  maxAttempt = 3
) {
  let attempt = 0;

  return <T>(src: Observable<T>): Observable<T | Error> =>
    src.pipe(
      retryWhen((errors: Observable<Error>) =>
        errors.pipe(
          tap(() => (++attempt <= maxAttempt ? cb(attempt) : null)),
          delayWhen(() => (attempt <= maxAttempt ? timer(delayMs) : of(0))),
          switchMap(err => (attempt > maxAttempt ? throwError(err) : of(null)))
        )
      )
    );
}
