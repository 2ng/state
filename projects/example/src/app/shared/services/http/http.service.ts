import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Request } from './class/loading/request';
import { RequestState } from './class/loading/loading.interface';
import { HttpGetOptions } from './models/http';
import { delayRetry } from './utils/delayRetry';

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
   * Метод возвращает observable типа RequestState. Он всегда имеет два ключа:
   *  - status: {
   *      pending: boolean;      // флаг загрузки
   *      success: boolean;      // флаг успешного завершения загрузки
   *      error: string | null;  // сообщение ошибки, если есть
   *      attempt: number;       // количество попыток загрузки
   *      progress:  {          // прогресс загрузки
   *        loaded?: number;
   *        total?: number;
   *      }
   *  };
   *
   *  - response: T | null       // ответ сервера, если есть
   *
   * На каждое событие HttpEventType эмитится объект:
   *  - Request.pending() - при старте загрузки
   *  - Request.attempt(НОМЕР_ПОПЫТКИ) - при попытке реконнекта
   *  - Request.progress(ПРОГРЕСС_ЭВЕНТ) - при прогрессе загрузки
   *  - Request.error(ТЕКСТ_ОШИБКИ) - при ошибке
   *  - Request.success(РЕСПОНС_СЕРВЕРА)
   *
   * Для запроса использую кастомный pipe оператор delayRetry,
   * который перезапускает запрос с определенной задержкой указанное колиичество раз.
   * По умолчанию задержка 2000, кол-во попыток - 3
   *
   */
  get<T>(url: string, options?: HttpGetOptions): Observable<RequestState<T>> {
    return this._http
      .get<T>(url, {
        ...options,
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        delayRetry(),
        catchError((err: Error) => of(new Error(err.message))),
        switchMap(reqOrErr => {
          if (reqOrErr instanceof Error) {
            return of(Request.error(reqOrErr));
          }

          const { event, attempt } = reqOrErr;

          if (
            event.type === HttpEventType.Sent ||
            event.type === HttpEventType.ResponseHeader
          ) {
            return of(Request.pending(attempt));
          }

          if (event.type === HttpEventType.DownloadProgress) {
            return attempt ? of(Request.pending(attempt)) : of(Request.progress(event));
          }

          if (event.type === HttpEventType.Response) {
            return timer(UX_DELAY).pipe(map(() => Request.success(event)));
          }
        })
      );
  }
}
