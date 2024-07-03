import feedbackModel from '../models/feedback.js'


export const feedbackRoute=async(req,res)=>{
    const { travelExperience, suggestions } = req.body;
    const newFeedback = new feedbackModel({ travelExperience, suggestions });
    await newFeedback.save();
    res.send({ message: "Feedback submitted successfully!" });
}