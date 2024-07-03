import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import AddTrip from "./components/AddTrip";
import TripDetails from "./components/TripDetails"
import Feedback from "./components/Feedback";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/add-trip" element={<AddTrip />} />
        <Route exact path="/trip" element={<TripDetails />} />
        <Route exact path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
