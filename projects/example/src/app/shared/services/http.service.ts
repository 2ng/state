import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable, of, timer } from 'rxjs';
import { catchError, map, switchMapTo, tap } from 'rxjs/operators';
import { Loading } from './http/class/loading/loading';
import { LoadingState } from './http/class/loading/loading.interface';
import { HttpGetOptions } from './http/models/http';
import { delayRetry } from './http/utils/delayRetry';

/**
 * Искусственный делей для запросов, для лучшего юзер экспириенса
 */
const UX_DELAY = 600;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  /**
   * Метод возвращает observable типа LoadingState. Он всегда имеет два ключа:
   *  - status: {
   *      pending: boolean;      // флаг загрузки
   *      success: boolean;      // флаг успешного завершения загрузки
   *      error: string | null;  // сообщение ошибки, если есть
   *      attempt: number;       // количество попыток загрузки
   *  };
   *
   *  - response: T | null       // ответ сервера, если есть
   *
   * В методе создаю notifier, который эмитит текущее состояние загрузки:
   *  - Loading.pending() - при старте загрузки
   *  - Loading.attempt(НОМЕР_ПОПЫТКИ) - при попытке реконнекта
   *  - Loading.error(ТЕКСТ_ОШИБКИ) - при ошибке
   *
   * В случае, если загрузка успешна request эмитит Loading.success(РЕСПОНС_СЕРВЕРА)
   * Компличу notifier, так как он больше не нужен
   *
   * TODO(andrey): нужно ли делать notifier = null, notifier.unsubscribe()?
   */
  get<T>(url: string, options?: HttpGetOptions): Observable<LoadingState<T>> {
    const notifier = new BehaviorSubject(Loading.pending());

    const request = this._http.get<T>(url, options).pipe(
      delayRetry(attempt => notifier.next(Loading.attempt(attempt))),
      catchError((err: Error) => of(new Error(err.message))),
      map(resOrErr => (resOrErr instanceof Error ? Loading.error(resOrErr) : Loading.success(resOrErr))),
      tap(() => notifier.complete())
    );

    const delayedRequest = timer(UX_DELAY).pipe(switchMapTo(request));

    return merge(notifier, delayedRequest);
  }
}
