const leaderboardConfigData = {
  from: 0,
  to: 9,
}

function updateConfig({from, to}) {
  leaderboardConfigData.from = from;
  leaderboardConfigData.to = to;
}

module.exports = {
  leaderboardConfigData,
  updateConfig
};
