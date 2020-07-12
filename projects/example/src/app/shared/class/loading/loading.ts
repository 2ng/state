import { LoadingState } from './loading.interface';

export class Loading {
  static idle(): LoadingState {
    return {
      pending: false,
      success: false,
      error: false,
      attempt: 0,
    };
  }

  static pending(): LoadingState {
    return {
      pending: true,
      success: false,
      error: false,
      attempt: 0,
    };
  }

  static success(): LoadingState {
    return {
      pending: false,
      success: true,
      error: false,
      attempt: 0,
    };
  }

  static error(): LoadingState {
    return {
      pending: false,
      success: false,
      error: true,
      attempt: 0,
    };
  }

  static attempt(attempt: number): LoadingState {
    return {
      pending: true,
      success: false,
      error: false,
      attempt,
    };
  }
}
