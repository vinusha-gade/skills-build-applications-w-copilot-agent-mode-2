import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    userId: 'u-1001',
    name: 'Mona Octavio',
    email: 'mona.octavio@example.com',
    age: 31,
    fitnessGoal: 'Build endurance for a spring half marathon',
    teamId: 'team-tentacle-titans'
  },
  {
    userId: 'u-1002',
    name: 'Diego Santos',
    email: 'diego.santos@example.com',
    age: 27,
    fitnessGoal: 'Improve strength and mobility',
    teamId: 'team-cardio-kraken'
  },
  {
    userId: 'u-1003',
    name: 'Priya Shah',
    email: 'priya.shah@example.com',
    age: 35,
    fitnessGoal: 'Maintain consistent weekday workouts',
    teamId: 'team-tentacle-titans'
  }
];

const teams = [
  {
    teamId: 'team-tentacle-titans',
    name: 'Tentacle Titans',
    mascot: 'Titan',
    members: ['u-1001', 'u-1003'],
    weeklyGoalMinutes: 420
  },
  {
    teamId: 'team-cardio-kraken',
    name: 'Cardio Kraken',
    mascot: 'Kraken',
    members: ['u-1002'],
    weeklyGoalMinutes: 300
  }
];

const activities = [
  {
    activityId: 'act-5001',
    userId: 'u-1001',
    type: 'Outdoor run',
    durationMinutes: 42,
    caloriesBurned: 390,
    activityDate: new Date('2026-08-27T13:00:00Z')
  },
  {
    activityId: 'act-5002',
    userId: 'u-1002',
    type: 'Strength circuit',
    durationMinutes: 50,
    caloriesBurned: 360,
    activityDate: new Date('2026-08-28T22:30:00Z')
  },
  {
    activityId: 'act-5003',
    userId: 'u-1003',
    type: 'Yoga flow',
    durationMinutes: 35,
    caloriesBurned: 160,
    activityDate: new Date('2026-08-29T12:15:00Z')
  },
  {
    activityId: 'act-5004',
    userId: 'u-1001',
    type: 'Interval bike',
    durationMinutes: 30,
    caloriesBurned: 280,
    activityDate: new Date('2026-08-30T14:45:00Z')
  }
];

const leaderboard = [
  {
    leaderboardId: 'rank-001',
    userId: 'u-1001',
    userName: 'Mona Octavio',
    teamName: 'Tentacle Titans',
    totalPoints: 670,
    rank: 1
  },
  {
    leaderboardId: 'rank-002',
    userId: 'u-1002',
    userName: 'Diego Santos',
    teamName: 'Cardio Kraken',
    totalPoints: 360,
    rank: 2
  },
  {
    leaderboardId: 'rank-003',
    userId: 'u-1003',
    userName: 'Priya Shah',
    teamName: 'Tentacle Titans',
    totalPoints: 160,
    rank: 3
  }
];

const workouts = [
  {
    workoutId: 'workout-7001',
    title: 'Lunchtime Core Reset',
    focusArea: 'Core stability',
    difficulty: 'Beginner',
    durationMinutes: 20,
    recommendedFor: ['u-1002', 'u-1003']
  },
  {
    workoutId: 'workout-7002',
    title: 'Hill Sprint Builder',
    focusArea: 'Running power',
    difficulty: 'Advanced',
    durationMinutes: 35,
    recommendedFor: ['u-1001']
  },
  {
    workoutId: 'workout-7003',
    title: 'Full Body Strength Ladder',
    focusArea: 'Strength endurance',
    difficulty: 'Intermediate',
    durationMinutes: 45,
    recommendedFor: ['u-1001', 'u-1002']
  }
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({})
    ]);

    await User.insertMany(users);
    await Team.insertMany(teams);
    await Activity.insertMany(activities);
    await Leaderboard.insertMany(leaderboard);
    await Workout.insertMany(workouts);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
