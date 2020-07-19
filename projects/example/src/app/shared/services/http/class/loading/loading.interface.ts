import { HttpProgressEvent } from '@angular/common/http';

export interface RequestStatus {
  pending: boolean;
  success: boolean;
  error: string;
  attempt: number;
  progress?: HttpProgressEvent;
}

export interface RequestState<T = any> {
  status: RequestStatus;
  response: T | null;
}
