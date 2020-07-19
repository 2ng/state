import { RequestState } from './loading.interface';
import { HttpProgressEvent, HttpResponse } from '@angular/common/http';

export class Request {
  static idle(): RequestState {
    return {
      status: {
        pending: false,
        success: false,
        error: null,
        attempt: null
      },
      response: null
    };
  }

  static pending(attempt?: number): RequestState {
    return {
      status: {
        pending: true,
        success: false,
        error: null,
        attempt
      },
      response: null
    };
  }

  static success<T>(response: HttpResponse<T>): RequestState<T> {
    return {
      status: {
        pending: false,
        success: true,
        error: null,
        attempt: null
      },
      response: response.body
    };
  }

  static error(error: Error): RequestState {
    return {
      status: {
        pending: false,
        success: false,
        error: error.message,
        attempt: null
      },
      response: null
    };
  }

  static progress(progress: HttpProgressEvent): RequestState {
    return {
      status: {
        pending: true,
        success: false,
        error: null,
        attempt: null,
        progress: progress
      },
      response: null
    };
  }
}
