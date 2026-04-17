import React from "react";
import Nature from "../assets/Nature.jpg";
import "./Usercard.css";

const Usercard = () =>{
    return(

        <div className="User-container">

            <p id="User-name">Love Nature</p>
            <img id ="User-image" src={Nature} alt="Nature" />
            <p id="User-desc">This is my 1st functional component</p>

            
        </div>
    );
}

export default Usercard;