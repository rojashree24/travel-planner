import express from "express";
const router = express.Router();

import { newTrip,getTrip,updateTrip,deleteTrip,getAllTrips } from "../controllers/trip.js";

router.post("/new",newTrip);
router.get("/trips",getAllTrips)
router.get("/:userId",getTrip)
router.put("/:userId",updateTrip)
router.delete("/:userId",deleteTrip)


export default router;