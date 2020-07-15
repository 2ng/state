export interface LoadingStatus {
  pending: boolean;
  success: boolean;
  error: string;
  attempt: number;
}

export interface LoadingState<T = any> {
  status: LoadingStatus;
  response: T | null;
}
