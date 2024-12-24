export type LeaderboardServerErrorCode = 'WrongResponseType' | 'LackOfParam'
export type LeaderboardServerApiResponse<T, U = undefined> = {
  status: 'success',
  data: T,
  metadata: U,
}
| {
  status: 'error',
  errorCode: BlogServerErrorCode,
  detail: string,
}
