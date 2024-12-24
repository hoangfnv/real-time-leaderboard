import { LeaderboardServerErrorCode } from "@/external-adapter/leaderboard-service/type";
import { usePostLeaderboardConfig } from "@/external-adapter/leaderboard-service/usePostLeaderboardConfig.ts";
import { PostLeaderboardConfigBody } from "@/external-resource/leaderboard-service/postLeaderboardConfig.ts";
import { LeaderBoard } from "@/ui/components/LeaderBoard.tsx";
import { useState } from "react";

export function HomePage() {
  const [shouldShowLeaderboard, setShouldShowLeaderboard] = useState<boolean>(false)
  const postLeaderboardConfigMutation = usePostLeaderboardConfig()

  async function handleClickShowLeaderboard() {
    try {
      const leaderboardConfig: PostLeaderboardConfigBody = {
        from: 0,
        to: 5
      }
      await postLeaderboardConfigMutation.sent(leaderboardConfig)
      setShouldShowLeaderboard(true)
    } catch (e) {
      // TODO: handle error
      console.error(e as LeaderboardServerErrorCode)
    }
  }

  return <div className={" flex flex-col justify-start items-center gap-6"}>
    {!shouldShowLeaderboard && <button onClick={handleClickShowLeaderboard}>Show Leaderboard</button>}
    {shouldShowLeaderboard && <LeaderBoard/>}
  </div>
}
