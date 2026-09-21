import { Router } from 'express';

const router = Router();

const users = [
  {
    id: '1',
    name: 'Ava Chen',
    email: 'ava.chen@example.com',
    level: 'intermediate',
    team: 'Trail Blazers',
  },
  {
    id: '2',
    name: 'Leo Martinez',
    email: 'leo.martinez@example.com',
    level: 'advanced',
    team: 'Velocity Squad',
  },
];

const teams = [
  {
    id: '1',
    name: 'Trail Blazers',
    members: 12,
    points: 1450,
  },
  {
    id: '2',
    name: 'Velocity Squad',
    members: 10,
    points: 1380,
  },
];

const activities = [
  {
    id: '1',
    userId: '1',
    type: 'Running',
    durationMinutes: 30,
    distanceKm: 5.2,
    date: '2026-09-20',
  },
  {
    id: '2',
    userId: '2',
    type: 'Strength',
    durationMinutes: 45,
    distanceKm: 0,
    date: '2026-09-19',
  },
];

const leaderboard = [
  { rank: 1, name: 'Ava Chen', points: 320 },
  { rank: 2, name: 'Leo Martinez', points: 295 },
  { rank: 3, name: 'Milo Patel', points: 280 },
];

const workouts = [
  {
    id: '1',
    title: 'Cardio Blast',
    type: 'Running',
    durationMinutes: 20,
    difficulty: 'moderate',
  },
  {
    id: '2',
    title: 'Power Circuit',
    type: 'Strength',
    durationMinutes: 30,
    difficulty: 'advanced',
  },
];

router.get('/users', (_request, response) => {
  response.json(users);
});

router.post('/users', (request, response) => {
  const user = request.body;
  const nextUser = { id: String(users.length + 1), ...user };
  users.push(nextUser);
  response.status(201).json(nextUser);
});

router.get('/teams', (_request, response) => {
  response.json(teams);
});

router.post('/teams', (request, response) => {
  const team = request.body;
  const nextTeam = { id: String(teams.length + 1), ...team };
  teams.push(nextTeam);
  response.status(201).json(nextTeam);
});

router.get('/activities', (_request, response) => {
  response.json(activities);
});

router.post('/activities', (request, response) => {
  const activity = request.body;
  const nextActivity = { id: String(activities.length + 1), ...activity };
  activities.push(nextActivity);
  response.status(201).json(nextActivity);
});

router.get('/leaderboard', (_request, response) => {
  response.json(leaderboard);
});

router.get('/workouts', (_request, response) => {
  response.json(workouts);
});

router.post('/workouts', (request, response) => {
  const workout = request.body;
  const nextWorkout = { id: String(workouts.length + 1), ...workout };
  workouts.push(nextWorkout);
  response.status(201).json(nextWorkout);
});

export default router;
