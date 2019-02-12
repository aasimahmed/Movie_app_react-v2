import React from "react";
import "./Mainlanding.css";

const Mainlanding = ({title, description, rating, releasedate, background}) => {
    return(
        <div className="mainlanding_card" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${background})`}}>
            <div>

            </div>
            <div>
              <span className="mainlanding_card_title">{title}</span><span> {releasedate} </span>
              <p> {rating}/10 </p>
              <p>{description.slice(0, 130) + "..."}</p>
            </div>
            <div>
      
            </div>
        </div>

    )
}

export default Mainlanding;