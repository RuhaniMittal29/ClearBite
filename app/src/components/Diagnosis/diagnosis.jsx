import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import './diagnosis.css'

const Diagnosis = () => {
    const location = useLocation(); // Get the state passed from the previous page
    const { diagnosis } = location.state || {}; // Extract the diagnosis from state

    return (
        <div className="diagnosis">
            <h1>Diagnosis Results</h1>
            {diagnosis ? (
                <div>
                    <h3>Your Results:</h3>
                    <p>{diagnosis}</p>
                </div>
            ) : (
                <p>No results available. Please go back and submit your analysis again.</p>
            )}
        </div>
    );
};

export default Diagnosis;