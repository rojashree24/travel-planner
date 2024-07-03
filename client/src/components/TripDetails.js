// import React,{useState,useEffect} from 'react'
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const TripDetails = () => {
//     const { userId } = useParams();
//     const navigate = useNavigate();
//     const [trip, setTrip] = useState(null);
//     const [newActivity, setNewActivity] = useState({
//       date: "",
//       description: "",
//     });

//     useEffect(() => {
//       const fetchTrip = async (e) => {
//         e.preventDefault()
//         try {
//            const response = await axios.get(
//              `http://localhost:5000/${userId}`
//            );
//            setTrip(response.data); 
//            fetchTrip();
//         } catch (error) {
//             console.log(error);
//         }
        
//       };
      
//     }, [userId]);

//      const handleUpdateTrip = async (e) => {
//         e.preventDefault();
//        await axios.put(`http://localhost:5000/${userId}`, trip);
//        alert("Trip updated successfully!");
//      };

//      const handleDeleteTrip = async (e) => {
//         e.preventDefault();
//        await axios.delete(`http://localhost:5000/${userId}`);
//        alert("Trip deleted successfully!");
//        navigate("/dashboard");
//      };

//      const handleAddActivity = (e) => {
//         e.preventDefault();
//        setTrip({ ...trip, activities: [...trip.activities, newActivity] });
//        setNewActivity({ date: "", description: "" });
//      };

//      if (!trip) return <div>Loading...</div>;


//   return (
//     <div className="trip-details">
//       <h2>Trip Details</h2>
//       <input
//         type="text"
//         value={trip.start}
//         onChange={(e) => setTrip({ ...trip, start: e.target.value })}
//       />
//       <input
//         type="text"
//         value={trip.destination}
//         onChange={(e) => setTrip({ ...trip, destination: e.target.value })}
//       />
//       <input
//         type="date"
//         value={trip.dates.start.slice(0, 10)}
//         onChange={(e) =>
//           setTrip({ ...trip, dates: { ...trip.dates, start: e.target.value } })
//         }
//       />
//       <input
//         type="date"
//         value={trip.dates.end.slice(0, 10)}
//         onChange={(e) =>
//           setTrip({ ...trip, dates: { ...trip.dates, end: e.target.value } })
//         }
//       />
//       <select
//         value={trip.modeOfTravel}
//         onChange={(e) => setTrip({ ...trip, modeOfTravel: e.target.value })}
//       >
//         <option value="Road">Road</option>
//         <option value="Train">Train</option>
//         <option value="Plane">Plane</option>
//         <option value="Cruise">Cruise</option>
//       </select>
//       <textarea
//         value={trip.notes}
//         onChange={(e) => setTrip({ ...trip, notes: e.target.value })}
//       ></textarea>

//       <h3>Activities</h3>
//       <ul>
//         {trip.activities.map((activity, index) => (
//           <li key={index}>
//             {activity.date} - {activity.description}
//           </li>
//         ))}
//       </ul>
//       <input
//         type="date"
//         value={newActivity.date}
//         onChange={(e) =>
//           setNewActivity({ ...newActivity, date: e.target.value })
//         }
//       />
//       <input
//         type="text"
//         value={newActivity.description}
//         onChange={(e) =>
//           setNewActivity({ ...newActivity, description: e.target.value })
//         }
//       />
//       <button onClick={handleAddActivity}>Add Activity</button>

//       <button onClick={handleUpdateTrip}>Update Trip</button>
//       <button onClick={handleDeleteTrip}>Delete Trip</button>
//     </div>
//   );
// }

// export default TripDetails


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/trips/${id}`);
        setTrip(response.data);
      } catch (error) {
        setError("Error fetching trip details");
        console.error(error);
      }
    };

    fetchTrip();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!trip) {
    return <p>Loading...</p>;
  }

  return (
    <div className="trip-details">
      <h2>Trip Details</h2>
      <h3>
        {trip.start} to {trip.destination}
      </h3>
      <p>
        Dates: {trip.startDate} - {trip.endDate}
      </p>
      <p>Mode of Travel: {trip.modeOfTravel}</p>
      <p>Notes: {trip.notes}</p>
      <div>
        <strong>Activities:</strong>
        <ul>
          {trip.activities.map((activity, index) => (
            <li key={index}>
              {activity.date} - {activity.time}: {activity.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TripDetails;
