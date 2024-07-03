import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modeOfTravel, setModeOfTravel] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleAddTrip = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const newTrip = {
      userId,
      start,
      destination,
      dates: { start: startDate, end: endDate },
      modeOfTravel,
      activities: [],
      notes,
    };
    try {
        await axios.post("http://localhost:5000/new", newTrip);
        navigate("/dashboard");
    } catch (error) {
        console.log(error);
    }
    
  };
  return (
    <div className="trip-form">
      <h2>Add New Trip</h2>
      <input
        type="text"
        placeholder="Start"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <select
        value={modeOfTravel}
        onChange={(e) => setModeOfTravel(e.target.value)}
      >
        <option value="">Select Mode of Travel</option>
        <option value="Road">Road</option>
        <option value="Train">Train</option>
        <option value="Plane">Plane</option>
        <option value="Cruise">Cruise</option>
      </select>
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <button onClick={handleAddTrip}>Add Trip</button>
    </div>
  );
};

export default AddTrip;
