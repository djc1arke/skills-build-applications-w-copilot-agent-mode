import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  level: { type: String, required: true },
  team: { type: String, required: true },
});

const teamSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  members: { type: Number, required: true },
  points: { type: Number, required: true },
});

const activitySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: { type: Number, required: true },
  date: { type: String, required: true },
});

const leaderboardSchema = new mongoose.Schema({
  rank: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  points: { type: Number, required: true },
});

const workoutSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  difficulty: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);
const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);

const users = [
  { id: '1', name: 'Ava Chen', email: 'ava.chen@example.com', level: 'intermediate', team: 'Trail Blazers' },
  { id: '2', name: 'Leo Martinez', email: 'leo.martinez@example.com', level: 'advanced', team: 'Velocity Squad' },
];

const teams = [
  { id: '1', name: 'Trail Blazers', members: 12, points: 1450 },
  { id: '2', name: 'Velocity Squad', members: 10, points: 1380 },
];

const activities = [
  { id: '1', userId: '1', type: 'Running', durationMinutes: 30, distanceKm: 5.2, date: '2026-09-20' },
  { id: '2', userId: '2', type: 'Strength', durationMinutes: 45, distanceKm: 0, date: '2026-09-19' },
];

const leaderboard = [
  { rank: 1, name: 'Ava Chen', points: 320 },
  { rank: 2, name: 'Leo Martinez', points: 295 },
  { rank: 3, name: 'Milo Patel', points: 280 },
];

const workouts = [
  { id: '1', title: 'Cardio Blast', type: 'Running', durationMinutes: 20, difficulty: 'moderate' },
  { id: '2', title: 'Power Circuit', type: 'Strength', durationMinutes: 30, difficulty: 'advanced' },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      Leaderboard.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete: 2 users, 2 teams, 2 activities, 3 leaderboard entries, 2 workouts');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
