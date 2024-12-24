# Requirements analysis

## Questions and Sample Answers for Acceptance Criteria
1. **User Participation**:
    - Users should be able to join a quiz session using a unique quiz ID.
    - The system should support multiple users joining the same quiz session simultaneously.
   
   **Questions:**

   *For Quiz:*
   - What is a quiz session: A set of questions that need to be answered within a limited time frame.

   *For Relationship of Quiz and System:*
   - How long is the available time for a quiz session?: A quiz session can be available for a short or long duration. For example, it could be 10 minutes (equivalent to the session duration), or extend to 1 day, 1 week, or even 1 month.
   - How many quiz sessions are available at the same time?: The system supports multiple quiz sessions running simultaneously.
   
   *For Relationship of Quiz and User:*
   - How many quiz sessions can a user join at the same time?: A user can join multiple ongoing quiz sessions.
   - How many users can join a quiz session: There is no limit to the number of users who can join a quiz session.
   - Can a user join a quiz session that has run out of available time?: No, a user can only join quizzes that are still within the available time duration.
   - Can a user re-take the quiz session?: This option can be configured.

2. **Real-Time Score Updates**:
    - As users submit answers, their scores should be updated in real-time.
    - The scoring system must be accurate and consistent.
   
   **Questions:** 
   - What is the average range of answer time?: According to statistics, most users to submit their answers ranges from 3 to 5 seconds.
   - How many times can a user answer a question?: A user can answer each question only once.

3. **Real-Time Leaderboard**:
    - A leaderboard should display the current standings of all participants.
    - The leaderboard should update promptly as scores change.
   
   **Questions:**
   - How many rows will be displayed in the leaderboard?: The leaderboard is paginated, displaying 10 rows per page.
    
## A full user story
As a user, I have a unique ID for a quiz session.  
I join a quiz session.  
I view my score, rank and the leaderboard.  
I begin take the quiz session.  
I see my score, rank and the leaderboard updated in real-time.  
Once I finish my quiz session, I can view the ongoing real-time leaderboard or the final leaderboard.  
*Optional:*  
I can quit the current quiz session and join another one.
I can return to the joined quiz session to view the leaderboard or re-take the quiz.

## Draft on Traffic Volume and Requests per Second (RPS)
There are 2 events need consider: **submit answer and update leaderboard**  
Maximum RPS for  = Number of active user / Average range of answer time  
Let assume answer time around 5 - 3 = 2s  
Example:  
100 user per quiz session + 100 quiz session  
10_000 / 2 = 5000 RPS  

1000 user per quiz session + 1000 quiz session  
1_000_000 / 2 = 500_000 RPS

## Issues
1. The system may experience traffic spikes if a large number of users submit their answers simultaneously.  
  => It is important to monitor the number of users joining to dynamically scale the handler and manage such events.

2. The leaderboard may need to be updated too frequently.  
  => Consider using a throttle event mechanism instead of continuously listening for events, while still accepting updates in real-time to balance performance and responsiveness.
