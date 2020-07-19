import { Observable, of, throwError, timer } from 'rxjs';
import { delayWhen, map, retryWhen, switchMap, tap } from 'rxjs/operators';
import { HttpEvent } from '@angular/common/http';

/**
 * Кастомный pipe оператор, который перезапускает запрос с определенной задержкой
 * указанное колиичество раз.
 * Выбрасывает ошибку при достижении последней попытки
 */
export function delayRetry<T>(delayMs = 2000, maxAttempt = 3) {
  let attempt = 0;

  return (
    src: Observable<HttpEvent<T>>
  ): Observable<{ event: HttpEvent<T>; attempt: number }> =>
    src.pipe(
      retryWhen((errors: Observable<Error>) =>
        errors.pipe(
          delayWhen(() => (++attempt <= maxAttempt ? timer(delayMs) : of(0))),
          switchMap(err => (attempt > maxAttempt ? throwError(err) : of(null)))
        )
      ),
      map(event => ({ event, attempt }))
    );
}
