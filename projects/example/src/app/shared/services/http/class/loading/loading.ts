import { LoadingState } from './loading.interface';

export class Loading {
  static idle(): LoadingState {
    return {
      status: {
        pending: false,
        success: false,
        error: null,
        attempt: 0,
      },
      response: null,
    };
  }

  static pending(): LoadingState {
    return {
      status: {
        pending: true,
        success: false,
        error: null,
        attempt: 0,
      },
      response: null,
    };
  }

  static success<T>(response: T): LoadingState<T> {
    return {
      status: {
        pending: false,
        success: false,
        error: null,
        attempt: 0,
      },
      response,
    };
  }

  static error(error: Error): LoadingState {
    return {
      status: {
        pending: false,
        success: false,
        error: error.message,
        attempt: 0,
      },
      response: null,
    };
  }

  static attempt(attempt: number): LoadingState {
    return {
      status: {
        pending: true,
        success: false,
        error: null,
        attempt,
      },
      response: null,
    };
  }
}
