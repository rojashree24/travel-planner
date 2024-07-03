import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  travelExperience: { type: String },
  suggestions: { type: String },
});


export default mongoose.model("Feedback",feedbackSchema)