import mongoose, { Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    leaderboardId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    teamName: { type: String, required: true },
    totalPoints: { type: Number, required: true },
    rank: { type: Number, required: true }
  },
  { timestamps: true }
);

export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);