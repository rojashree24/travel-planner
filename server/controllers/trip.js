import tripModel from '../models/trip.js'


export const newTrip=async (req, res) => {
  const { userId, start, destination, dates, modeOfTravel, activities, notes } =
    req.body;
  const newTrip = new tripModel({
    userId,
    start,
    destination,
    dates,
    modeOfTravel,
    activities,
    notes,
    isFavourite: false,
  });
  await newTrip.save();
  res.send({ message: "Trip added successfully!" });
};

export const getAllTrips=async(req,res)=>{
    let trips;
    try {
      trips = await tripModel.find();
    } catch (error) {
      console.log(error);
    }

    if (!trips) {
      return res.status(404).json({ message: "No trips found" });
    }
    return res.status(200).json({ trips });
}

export const getTrip=async (req, res) => {
  const { userId } = req.params;
try {
  const trips = await tripModel.findById(userId);
  res.status(200).json(trips);
} catch (error) {
  res.status(404).json({ message: error.message });
}
};

export const updateTrip=async (req, res) => {
  const { userId } = req.params;
  const updatedData = req.body;
  await tripModel.findByIdAndUpdate(userId , updatedData);
  res.send({ message: 'Trip updated successfully!' });
};

export const deleteTrip=async (req, res) => {
  const { userId } = req.params;
  await tripModel.findByIdAndDelete(userId);
  res.send({ message: 'Trip deleted successfully!' });
};

