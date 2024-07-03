import React, { useState } from "react";
import axios from "axios";

function Feedback() {
  const [travelExperience, setTravelExperience] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedback = { travelExperience, suggestions };
    await axios.post("http://localhost:5000/feedback", feedback);
    alert("Feedback submitted successfully!");
    setTravelExperience("");
    setSuggestions("");
  };

  const handleCancel = () => {
    setTravelExperience("");
    setSuggestions("");
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Travel Experience"
          value={travelExperience}
          onChange={(e) => setTravelExperience(e.target.value)}
        ></textarea>
        <textarea
          placeholder="Suggestions"
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <a style={{ "marginLeft":"450px"}} href="/dashboard">Back to Dashboard</a>
      </form>
    </div>
  );
}

export default Feedback;
