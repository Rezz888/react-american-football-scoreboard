import React from "react";
import "../App.css";

const Buttons = (props) => {


    return (
    <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button 
          onClick={props.homeTouchdown} 
          className="homeButtons__touchdown">Home Touchdown</button>
          <button 
          onClick={props.homeFieldGoal}
          className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button 
          onClick={props.awayTouchdown} 
          className="awayButtons__touchdown">Away Touchdown</button>
          <button 
          onClick={props.awayFieldGoal} 
          className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    )
    
}

export default Buttons; 