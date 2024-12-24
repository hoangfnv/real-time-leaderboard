type QueryKey = 'postLeaderboardConfig'

export const QueryKeyFactory: Record<QueryKey, (...args: (string | undefined)[]) => string[]> = {
  postLeaderboardConfig: () => ['postLeaderboardConfig'],
}
