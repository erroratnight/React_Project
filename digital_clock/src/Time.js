import React, { useState } from "react";
import "./Time.css"

function Time() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [time1, setTime] = useState(time);
  const [date1, setDate] = useState(date);

  const updatetime = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    setDate(date);
    setTime(time);
  };

  setInterval(updatetime, 1000);

  return (
    <div className="entire">
        <div className="user">
            
            <h1>Digital Clock</h1> 
        <h2>By Vishal Chaurasia<sub>a.k.a error_at_night</sub></h2>
        </div>
      <h1 className="time">Current Time: {time1}</h1>
      <h1 className="date">Current Date: {date1}</h1>
    </div>
  );
}

export default Time;
