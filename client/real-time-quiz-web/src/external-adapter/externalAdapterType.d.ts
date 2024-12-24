export type ExternalFetchResultStatus = 'not-start' | 'loading' | 'error' | 'success'

export type FetchOption = {
  enable: boolean,
}

export type ExternalFetchResult<T, E> = {
  data: T | undefined,
  status: ExternalFetchResultStatus,
  error: E | null,
  refetch: () => Promise<unknown>,
}

