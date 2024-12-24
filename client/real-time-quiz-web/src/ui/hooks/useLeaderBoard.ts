import { useWebSocketConnection } from "@/external-adapter/web-socket-service/useWebSocketConnection.ts";
import { useWebSocketEvent } from "@/external-adapter/web-socket-service/useWebSocketEvent.ts";
import { UserRankingRecord } from "@/ui/components/LeaderBoardRow.tsx";
import { useState } from "react";

type LeaderBoard = UserRankingRecord[]
export const useLeaderBoard = () => {
  const { isConnected } = useWebSocketConnection()
  const [leaderboard, setLeaderboard] = useState<LeaderBoard>([])

  useWebSocketEvent('event', (eventMessages) => {
    const leaderBoard: LeaderBoard = eventMessages
      ? JSON.parse(eventMessages)
      : []
    setLeaderboard(leaderBoard)
  })

  return {
    isRealtime: isConnected,
    leaderboard,
  }
};
