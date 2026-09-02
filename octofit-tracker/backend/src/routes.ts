import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from './models/index.js';

const router = Router();

router.get('/users/', async (_request, response) => {
  const users = await User.find().select('-_id -__v').lean();
  response.json(users);
});

router.get('/teams/', async (_request, response) => {
  const teams = await Team.find().select('-_id -__v').lean();
  response.json(teams);
});

router.get('/activities/', async (_request, response) => {
  const activities = await Activity.find().select('-_id -__v').lean();
  response.json(activities);
});

router.get('/leaderboard/', async (_request, response) => {
  const leaderboard = await Leaderboard.find().sort({ rank: 1 }).select('-_id -__v').lean();
  response.json(leaderboard);
});

router.get('/workouts/', async (_request, response) => {
  const workouts = await Workout.find().select('-_id -__v').lean();
  response.json(workouts);
});

export default router;