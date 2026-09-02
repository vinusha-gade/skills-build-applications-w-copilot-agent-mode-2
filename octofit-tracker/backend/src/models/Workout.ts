import mongoose, { Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    workoutId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    recommendedFor: [{ type: String, required: true }]
  },
  { timestamps: true }
);

export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);