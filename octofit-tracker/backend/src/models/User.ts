import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    fitnessGoal: { type: String, required: true },
    teamId: { type: String, required: true }
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);