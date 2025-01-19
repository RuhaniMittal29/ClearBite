import React, { useState } from "react";
import './analysis.css';

const Analysis = () => {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
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


                    {/* image input */}
                    <div className="card-item">
                        <label className="question">Upload image of your acne: </label>
                        <input type="file" onChange={handleChange} style={{
                            fontSize: "16px",
                            padding: "10px",
                            cursor: "pointer",}}/>
                        <img src={file} style={{ width: "200px", height: "auto" }}/>
                    </div>

                    {/* diet input */}
                    <div className="card-item">
                        <label className="question">Your diet: </label>
                        <input type="text" name="answer_diet" placeholder="eg.: sandwich, muffin, coffee" className="answer-text" />
                    </div>

                    {/* diet restriction input */}
                    <div className="card-item">
                        <label className="question">Your dietary restriction: </label>
                        <input type="text" name="answer_diet_restriction" placeholder="eg.: vegeterian/ halal/ lactose intolerant" className="answer-text" />
                    </div>
                    <input type="submit" value="Submit" className="submit-button" />
                    <span className="disclaimer">Disclaimer: This is not a substitute for professional medical advice. Please consult a dermatologist for a proper diagnosis.</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Analysis;