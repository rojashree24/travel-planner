import express from 'express'
import { feedbackRoute } from '../controllers/feedback.js';


const router = express.Router();
router.post("/",feedbackRoute)


export default router;