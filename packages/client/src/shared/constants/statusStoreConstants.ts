export type StatusType = 'init' | 'loading' | 'success' | 'error';

interface IStatus {
  success: StatusType;
  loading: StatusType;
  init: StatusType;
  error: StatusType;
}

export const statusStore: IStatus = {
  success: 'success',
  loading: 'loading',
  init: 'init',
  error: 'error',
};

export const EmptyResponseFromServer = 0;
