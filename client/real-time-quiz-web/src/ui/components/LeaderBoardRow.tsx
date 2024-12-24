export type UserRankingRecord = {
  id: number,
  name: string,
  avatarUrl: string,
  score: number,
  rank: number,
}

type UserRecordProps = {
  record: UserRankingRecord,
}
export function LeaderBoardRow(props: UserRecordProps) {
  return <div className={"flex flex-row border bg-gray-50 justify-center items-center gap-4 p-4 w-full"}>
    <span>#{props.record.rank}</span>
    <img className="size-6 rounded-full ring-2 ring-white overflow-hidden"
         src={props.record.avatarUrl || "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc"}
         alt="avatar"/>
    <span className={"w-24"}>{props.record.id}: {props.record.name}</span>
    <span className={"w-16 text-right"}>{props.record.score}</span>
  </div>
}
