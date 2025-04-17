interface Result<T> {
  code: number;
  data: T;
  message: string;
}

export function resultSuccess<T>(data: T): Result<T> {
  return {
    code: 0,
    data,
    message: 'success'
  }
}

export function resultError(message = 'error', code = -1): Result<null> {
  return {
    code,
    data: null,
    message
  }
} 