import mongoose, { Schema } from 'mongoose';
const activitySchema = new Schema({
    activityId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    activityDate: { type: Date, required: true }
}, { timestamps: true });
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
