import React, { useState } from "react";
import './analysis.css';
import Fork from "../../assets/fork.png"

const Analysis = () => {
    const [file, setFile] = useState(); // For image file (if needed later)
    const [diet, setDiet] = useState(""); // For diet input
    const [dietaryRestriction, setDietaryRestriction] = useState(""); // For dietary restriction input
    const [response, setResponse] = useState(""); // To display the API response
    const [loading, setLoading] = useState(false); // Loading state

    // Handle file upload (if you need to handle the file later)
    function handleFileChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault(); // Prevent page refresh on submit
        setLoading(true); // Set loading to true

        // Encode the prompt as query parameters
        const params = new URLSearchParams({
            prompt: `Diet: ${diet}, Dietary Restrictions: ${dietaryRestriction}`,
        });

        const url = `https://33a0-34-87-162-164.ngrok-free.app/predict?${params.toString()}`; // change this url 

        try {
            console.log("Sending request to:", url);

            // Make a GET request to the API with query parameters
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "ngrok-skip-browser-warning": "true", // Add this header to skip the warning
                },
            });

            console.log("Response object:", res);

            if (!res.ok) {
                throw new Error(`Failed to fetch response from API: ${res.statusText}`);
            }

            const data = await res.json(); // Parse JSON response
            console.log("Response data:", data);
            const answerIndex = data.response.indexOf("Answer:");
            const answer = answerIndex !== -1 ? data.response.substring(answerIndex) : "No answer found.";
            setResponse(answer);; // Update the response state
        } catch (err) {
            console.error("Error submitting form:", err);
            setResponse("Error: Unable to fetch response from the API.");
        } finally {
            setLoading(false); // Set loading to false when request completes
        }
    }

    return (
        <div className="analysis">
            <div className="herosection">
                <span className="title1">the</span>
                <span className="title2">ClearBite</span>
                <img src={Fork} alt="banner2" className="fork" />
                <span className="title3"><br />Your journey to clear skin starts today!</span>
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
                                placeholder="eg.: vegetarian/ halal/ lactose intolerant"
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

                        {/* Display Loading Message */}
                        {loading && (
                            <div className="loading-message">
                                <p>Processing your request. Please wait...</p>
                            </div>
                        )}

                        {/* Display API response */}
                        {response && (
                            <div className="api-response">
                                <h3>Analysis Result:</h3>
                                <p>{response}</p>
                            </div>
                        )}

                        {/* Conditional disclaimer */}
                        {!response && !loading && (
                            <span className="disclaimer">
                                Disclaimer: This is not a substitute for professional medical advice. Please consult a dermatologist for a proper diagnosis.
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
