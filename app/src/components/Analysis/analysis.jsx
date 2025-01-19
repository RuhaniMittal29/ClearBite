import React, { useState } from "react";
import './analysis.css';

const Analysis = () => {
  const [file, setFile] = useState(); // For image file (if needed later)
  const [diet, setDiet] = useState(""); // For diet input
  const [dietaryRestriction, setDietaryRestriction] = useState(""); // For dietary restriction input
  const [response, setResponse] = useState(""); // To display the API response

  // Handle file upload (if you need to handle the file later)
  function handleFileChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent page refresh on submit

    // Data to send to the API
    const requestData = {
      prompt: `Diet: ${diet}, Dietary Restrictions: ${dietaryRestriction}`,
    };

    try {
      // Make a POST request to the API
      const res = await fetch("https://YOUR_API_URL/predict", {
        method: "POST", // API method
        headers: {
          "Content-Type": "application/json", // Inform the server you're sending JSON
        },
        body: JSON.stringify(requestData), // Convert the data to JSON
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from API");
      }

      const data = await res.json(); // Parse JSON response
      setResponse(data.response); // Update the response state

      // navigate to the different page 
      navigate("/diagnosis", { state: { diagnosis: data.response } });
    } catch (err) {
      console.error("Error submitting form:", err);
      setResponse("Error: Unable to fetch response from the API.");
    }
  }

  return (
    <div className="analysis">
      <div className="herosection">
        <span className="title1">the</span>
        <span className="title2">ClearBite</span>
        <span className="title3"><br/>Your journey to clear skin starts today!</span>
      </div>
      <div className="card-background">
        <div className="card">
          <span className="title2">Analysis</span>
          <div className="card-content">
            {/* Image input */}
            <div className="card-item">
              <label className="question">Upload image of your acne: </label>
              <input
                type="file"
                onChange={handleFileChange}
                style={{
                  fontSize: "16px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              />
              <img src={file} style={{ width: "200px", height: "auto" }} alt="" />
            </div>

            {/* Diet input */}
            <div className="card-item">
              <label className="question">Your diet: </label>
              <input
                type="text"
                name="answer_diet"
                placeholder="eg.: sandwich, muffin, coffee"
                className="answer-text"
                value={diet}
                onChange={(e) => setDiet(e.target.value)} // Update diet state
              />
            </div>

            {/* Dietary restriction input */}
            <div className="card-item">
              <label className="question">Your dietary restriction: </label>
              <input
                type="text"
                name="answer_diet_restriction"
                placeholder="eg.: vegeterian/ halal/ lactose intolerant"
                className="answer-text"
                value={dietaryRestriction}
                onChange={(e) => setDietaryRestriction(e.target.value)} // Update dietary restriction state
              />
            </div>

            {/* Submit button */}
            <input
              type="submit"
              value="Submit"
              className="submit-button"
              onClick={handleSubmit} // Call handleSubmit when clicked
            />

            {/* Display API response */}
            {response && (
              <div className="api-response">
                <h3>Analysis Result:</h3>
                <p>{response}</p>
              </div>
            )}

            <span className="disclaimer">
              Disclaimer: This is not a substitute for professional medical advice. Please consult a dermatologist for a proper diagnosis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
