import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    teamId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mascot: { type: String, required: true },
    members: [{ type: String, required: true }],
    weeklyGoalMinutes: { type: Number, required: true }
}, { timestamps: true });
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
