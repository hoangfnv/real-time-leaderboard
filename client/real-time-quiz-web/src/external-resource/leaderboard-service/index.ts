import { ofetch } from "ofetch";

const LEADERBOARD_SERVICE_URL = import.meta.env.VITE_LEADERBOARD_SERVICE_URL;
export const LeaderboardServicePost = ofetch.create({
  baseURL: LEADERBOARD_SERVICE_URL,
  method: "POST",
  retry: 0,
  onResponseError: [
    context => {
      throw context.response._data.errorCode
      || context.response.status
    }
  ]
})
