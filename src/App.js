//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import Buttons from "./Components/Buttons";
import "./App.css";
import ScoreBoard from "./Components/Scoreboard";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  let [homeCount, setHomeCount] = useState(0);
  let [awayCount, setAwayCount] = useState(0);

  const homeTouchdown = () => {
    setHomeCount(homeCount + 7);
  }
  const homeFieldGoal = () => {
    setHomeCount(homeCount + 3);
  }

  const awayTouchdown = ()=> {
    setAwayCount(awayCount + 7);
  }

  const awayFieldGoal = () => {
    setAwayCount(awayCount + 3);
  }
  return (
    <div className="container">
       <section className="scoreboard">
      <ScoreBoard homeCount={homeCount} awayCount={awayCount}/>
      <BottomRow />
      <Buttons homeTouchdown={homeTouchdown} homeFieldGoal={homeFieldGoal} awayTouchdown={awayTouchdown} awayFieldGoal={awayFieldGoal}/>
      </section>
    </div>
  );
}

export default App;
