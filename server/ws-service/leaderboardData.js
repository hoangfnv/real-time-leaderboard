const { publishEvent } = require('./redisMock'); // Import the publishEvent function from redisMock.js
const { leaderboardConfigData } = require('./leaderboardConfigData');
const sampleRecord = [
  { id: 1, name: "Grace", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 1 },
  { id: 2, name: "Alice", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 2 },
  { id: 3, name: "Bob", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 3 },
  { id: 4, name: "Ivy", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 4 },
  { id: 5, name: "David", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 5 },
  { id: 6, name: "Charlie", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 6 },
  { id: 7, name: "Jack", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 7 },
  { id: 8, name: "Hannah", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 8 },
  { id: 9, name: "Frank", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 9 },
  { id: 10, name: "Eve", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 10 },
  { id: 11, name: "Alice", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 11 },
  { id: 12, name: "Ivy", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 12 },
  { id: 13, name: "Jack", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 13 },
  { id: 14, name: "David", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 14 },
  { id: 15, name: "Grace", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 15 },
  { id: 16, name: "Charlie", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 16 },
  { id: 17, name: "Bob", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 17 },
  { id: 18, name: "Eve", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 18 },
  { id: 19, name: "Hannah", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 19 },
  { id: 20, name: "Frank", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 20 },
  { id: 21, name: "Alice", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 21 },
  { id: 22, name: "Bob", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 22 },
  { id: 23, name: "Charlie", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 23 },
  { id: 24, name: "David", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 24 },
  { id: 25, name: "Eve", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 25 },
  { id: 26, name: "Grace", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 26 },
  { id: 27, name: "Hank", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 27 },
  { id: 28, name: "Ivy", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 28 },
  { id: 29, name: "Jack", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 29 },
  { id: 30, name: "Kathy", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 30 },
  { id: 31, name: "Liam", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 31 },
  { id: 32, name: "Mona", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 32 },
  { id: 33, name: "Nina", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 33 },
  { id: 34, name: "Oscar", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 34 },
  { id: 35, name: "Paul", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 35 },
  { id: 36, name: "Quincy", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 36 },
  { id: 37, name: "Rita", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 37 },
  { id: 38, name: "Sam", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 38 },
  { id: 39, name: "Tina", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 39 },
  { id: 40, name: "Uma", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 40 },
  { id: 41, name: "Vera", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 41 },
  { id: 42, name: "Walter", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 42 },
  { id: 43, name: "Xander", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 43 },
  { id: 44, name: "Yara", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 44 },
  { id: 45, name: "Zane", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 45 },
  { id: 46, name: "Aaron", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 46 },
  { id: 47, name: "Blake", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 47 },
  { id: 48, name: "Cody", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 48 },
  { id: 49, name: "Derek", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 49 },
  { id: 50, name: "Ella", avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc", score: 0, rank: 50 },
]

function userConsumeScore(index) {
  const score = Math.round(Math.random() * 10);
  sampleRecord[index].score += score
  const sampleDup = [...sampleRecord]
  sampleDup.sort((user1, user2) => user2.score - user1.score);
  sampleDup.forEach((user, index) => {
    user.rank = index + 1
  })
  const messageData = sampleDup.slice(leaderboardConfigData.from, leaderboardConfigData.to)
  const message = JSON.stringify(messageData)
  publishEvent('events', message);
  const gapTime = Math.random() * 3000 + 500
  setTimeout(() => userConsumeScore(index), gapTime)
}

function simulateUpdateUserScore() {
  sampleRecord.forEach((user, index) => {
    userConsumeScore(index)
  })
}

module.exports = {
  simulateUpdateUserScore,
  sampleRecord
}
