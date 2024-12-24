import { QueryKeyFactory } from "@/external-adapter/utils-react-query/queryKeyFactory.ts";
import {
  postLeaderboardConfig,
  PostLeaderboardConfigBody
} from "@/external-resource/leaderboard-service/postLeaderboardConfig.ts";
import { useMutation } from "@tanstack/react-query";

export function usePostLeaderboardConfig() {
  const mutation = useMutation({
    mutationKey: QueryKeyFactory.postLeaderboardConfig(),
    mutationFn: (param: PostLeaderboardConfigBody) => postLeaderboardConfig(param),
  })

  return {
    sent: mutation.mutateAsync,
    state: mutation.status,
  }
}
