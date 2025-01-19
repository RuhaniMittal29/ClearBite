import React from "react";
import './home.css';
import Image from "../../assets/healthy food.webp"
import Sweet from "../../assets/sweet.jpeg"
import Dairy from "../../assets/image.png"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/analysis");
      };

  return (
    <div className="home">
        <div className="herosection">
            <span className="title1">the</span>
            <span className="title2">ClearBite</span>
            <span className="title3"><br/>Your journey to clear skin starts today!</span>
        </div>
        <div className="banner1">
            <div className="banner1left">
                <span className="banner1text">Eat for the skin you want, not the skin you have.</span>
                <span className="banner2text"><br/>ClearBite uses advanced AI to analyze your dietary habits and identify potential triggers for acne. Let us guide you towards a skin-friendly lifestyle.</span>
                <button className="banner1button" onClick={handleClick}>Get Started</button>
            </div>
            <div className="banner1right">
                <img src= {Image} alt="banner1" className="food"/>
            </div>
        </div>

        <div className="banner2">
            <div className="banner2left">
                <img src= {Dairy} alt="banner2" className="dairy"/> 
            </div>
            <div className="banner2right">
                <span className="banner3text">"I never realized how much dairy was affecting my skin until ClearBite. Now, I’m enjoying clear skin and feeling more confident.” – Emma, 25</span>
                <span className="banner3text"><br/>"ClearBite helped me identify that my sugary snacks were the culprit. Once I made the change, my acne started to clear up within weeks.” – Ryan, 30</span>
            </div>
        </div>

        <div className="footer">
            <p>ClearBite respects your privacy. We do not store or share any of your data. Learn more in our <a href="/privacy-policy">Privacy Policy</a>.</p>
        </div>

    </div>
  );
}

export default Home;