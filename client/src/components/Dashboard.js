import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("list"); 

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/trips`);
        if (Array.isArray(response.data)) {
          setTrips(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };
    fetchTrips();
  }, []);


  const filteredTrips = trips.filter(
    (trip) =>
      trip.start.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <input
        type="text"
        placeholder="Search Trips"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Link to="/add-trip" className="add-trip-button">
        Add New Trip
      </Link>
      <Link to="/feedback" className="feedback" style={{"marginLeft":"650px"}}>
        Add Feedback
      </Link>
      <div className="view-selector">
        <button onClick={() => setView("icon")}>Icon View</button>
        <button onClick={() => setView("list")}>List View</button>
        <button onClick={() => setView("detailed")}>Detailed View</button>
      </div>
      <div className={`trips-view ${view}`}>
        {filteredTrips.map((trip) => (
          <div key={trip._id} className="trip-item">
            <Link to={`/trips/${trip._id}`}>
              <div className="trip-info">
                <div className="trip-start">{trip.start}</div>
                <div className="trip-destination">{trip.destination}</div>
                <div className="trip-dates">
                  {new Date(trip.dates.start).toLocaleDateString()} -{" "}
                  {new Date(trip.dates.end).toLocaleDateString()}
                </div>
                <div className="trip-mode">{trip.modeOfTravel}</div>
                {view === "detailed" && (
                  <div className="trip-notes">{trip.notes}</div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   const [trips, setTrips] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/trips");
//         setTrips(response.data);
//       } catch (error) {
//         console.error("Error fetching trips:", error);
//       }
//     };

//     fetchTrips();
//   }, []);

//   return (
//     <div className="dashboard">
//       <h2>My Trips</h2>
//       {/* <input
//         type="text"
//         placeholder="Search Trips"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       /> */}
//       <Link to="/add-trip" className="add-trip-button">
//         Add New Trip
//       </Link>
//       <Link to="/feedback" className="feedback" style={{ marginLeft: "650px" }}>
//         Add Feedback
//       </Link>
//       <div className="trip-list">
//         {Array.isArray(trips)
//           ? trips.map((trip) => (
//               <div key={trip._id} className="trip">
//                 <h3>
//                   {trip.start} to {trip.destination}
//                 </h3>
//                 <p>
//                   Dates: {trip.startDate} - {trip.endDate}
//                 </p>
//                 <p>Mode of Travel: {trip.modeOfTravel}</p>
//                 <p>Notes: {trip.notes}</p>
//                 <div>
//                   <strong>Activities:</strong>
//                   <ul>
//                     {trip.activities.map((activity, index) => (
//                       <li key={index}>
//                         {activity.date} - {activity.time}:{" "}
//                         {activity.description}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))
//           : null}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/trips");
//         setTrips(response.data);
//       } catch (error) {
//         console.error("Error fetching trips:", error);
//       }
//     };

//     fetchTrips();
//   }, []);

//   return (
//     <div className="dashboard">
//       <h2>My Trips</h2>
//       <Link to="/add-trip" className="add-trip-button">
//         Add New Trip 
//       </Link>
     
//       <Link to="/feedback" className="feedback" style={{ marginLeft: "650px" }}>
//         Add Feedback
//       </Link>
//       <div className="trip-list">
//         {Array.isArray(trips)
//           ? trips.map((trip) => (
//               <div key={trip._id} className="trip">
//                 <h3>
//                   {trip.start} to {trip.destination}
//                 </h3>
//                 <p>
//                   Dates: {trip.startDate} - {trip.endDate}
//                 </p>
//                 <p>Mode of Travel: {trip.modeOfTravel}</p>
//                 <p>Notes: {trip.notes}</p>
//                 <div>
//                   <strong>Activities:</strong>
//                   <ul>
//                     {trip.activities.map((activity, index) => (
//                       <li key={index}>
//                         {activity.date} - {activity.time}:{" "}
//                         {activity.description}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <Link to={`/trip/${trip._Id}`}>View Details</Link>
//               </div>
//             ))
//           : null}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
