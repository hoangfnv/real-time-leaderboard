import { LeaderBoardRow } from "@/ui/components/LeaderBoardRow.tsx";
import { useLeaderBoard } from "@/ui/hooks/useLeaderBoard.ts";
import { Flipped, Flipper } from "react-flip-toolkit";

export function LeaderBoard() {
  const { isRealtime, leaderboard } = useLeaderBoard();
  const data = leaderboard.map(record => record.id)

  return <>
    {isRealtime ? 'Online' : 'Offline'}
    <Flipper flipKey={data.join('')}>
      <ul className="flex flex-col gap-6">
        {leaderboard.map((uerRecord) =>
          <Flipped key={uerRecord.id} flipId={uerRecord.id}>
            <li>
              <LeaderBoardRow record={uerRecord}/>
            </li>
          </Flipped>)
        }
      </ul>
    </Flipper>
  </>
}
