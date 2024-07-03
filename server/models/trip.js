import mongoose from "mongoose";

const tripSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  start: { type: String, required: true },
  destination: { type: String, required: true },
  dates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  modeOfTravel: { type: String, required: true },
  activities: [{ date: Date, description: String }],
  notes: String,
  isFavorite: { type: Boolean, default: false },
});

export default mongoose.model("Trip", tripSchema);