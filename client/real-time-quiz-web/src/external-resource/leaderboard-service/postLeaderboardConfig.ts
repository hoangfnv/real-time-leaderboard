import { LeaderboardServerApiResponse } from "@/external-adapter/leaderboard-service/type";
import { LeaderboardServicePost } from "@/external-resource/leaderboard-service/index.ts";

export type PostLeaderboardConfigBody = {
  from: number,
  to: number,
}

export async function postLeaderboardConfig(body: PostLeaderboardConfigBody): Promise<void> {
  const response = await LeaderboardServicePost<LeaderboardServerApiResponse<never>>(
    '/leaderboard-config',
    {
      headers: {
        'Content-Type': 'application/json',  // Set the content type to JSON
      },
      body: JSON.stringify(body)
    }
  )
  if (response.status === 'success') {
    return
  }
  if (response.status === 'error') {
    throw response.errorCode;
  }
  throw new Error('The response has wrong type')
}
